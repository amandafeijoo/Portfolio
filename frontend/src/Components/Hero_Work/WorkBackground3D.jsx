import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ==========
  CONFIG
========== */
const COUNT = 140; // partículas (sube/baja)
const RADIUS = 3.2; // radio esfera invisible
const CONNECT_DIST = 0.62; // distancia para líneas
const MAX_CONNECTIONS = 320; // límite total de segmentos (performance)

function useMouseParallax(strength = 0.35) {
  const mouse = useRef({ x: 0, y: 0 });
  React.useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouse.current = { x, y };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return { mouse, strength };
}

function ParticlesField({ scrollProgressRef }) {
  const group = useRef();
  const pointsRef = useRef();
  const linesRef = useRef();

  const { viewport } = useThree();
  const { mouse, strength } = useMouseParallax(0.35);

  // --- Partículas base (posiciones + velocidades)
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const vel = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      // randomDirection() dentro de una esfera
      const v = new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(RADIUS * (0.55 + Math.random() * 0.45));

      pos[i * 3 + 0] = v.x;
      pos[i * 3 + 1] = v.y;
      pos[i * 3 + 2] = v.z;

      // pequeñas velocidades (drift)
      vel[i * 3 + 0] = (Math.random() - 0.5) * 0.0016;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.0016;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.0016;
    }

    return { positions: pos, velocities: vel };
  }, []);

  // Buffer para líneas (se reescribe en cada frame)
  const linePositions = useMemo(() => {
    // 2 puntos por segmento → (MAX_CONNECTIONS * 2) * 3 coords
    return new Float32Array(MAX_CONNECTIONS * 2 * 3);
  }, []);

  const pointsGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  const linesGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    g.setDrawRange(0, 0);
    return g;
  }, [linePositions]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // scroll 0..1 (si no lo pasas, queda 0)
    const sp = scrollProgressRef?.current ?? 0;

    // “energía” según scroll: más scroll = un pelín más vivo
    const energy = 0.7 + sp * 0.6;

    // Parallax suave
    const px = mouse.current.x * strength;
    const py = mouse.current.y * strength;

    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        px * 0.25,
        0.05
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -py * 0.18,
        0.05
      );

      // leve “respiración”
      group.current.rotation.z = Math.sin(t * 0.12) * 0.05;
    }

    // update partículas
    const posAttr = pointsGeo.attributes.position;
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;

      posAttr.array[ix + 0] += velocities[ix + 0] * energy;
      posAttr.array[ix + 1] += velocities[ix + 1] * energy;
      posAttr.array[ix + 2] += velocities[ix + 2] * energy;

      // ondulación elegante
      posAttr.array[ix + 1] += Math.sin(t * 0.8 + i) * 0.00035 * energy;

      // mantener “cerca” de la esfera: si se va, lo reintroducimos
      const x = posAttr.array[ix + 0];
      const y = posAttr.array[ix + 1];
      const z = posAttr.array[ix + 2];
      const d = Math.sqrt(x * x + y * y + z * z);
      if (d > RADIUS * 1.05) {
        const v = new THREE.Vector3(x, y, z)
          .normalize()
          .multiplyScalar(RADIUS * 0.8);
        posAttr.array[ix + 0] = v.x;
        posAttr.array[ix + 1] = v.y;
        posAttr.array[ix + 2] = v.z;
      }
    }
    posAttr.needsUpdate = true;

    // --- conexiones (líneas)
    // Algoritmo simple O(n²) pero con COUNT bajo funciona bien.
    // Si subes COUNT mucho, te lo optimizo con spatial hashing.
    let segCount = 0;
    const arr = posAttr.array;

    for (let i = 0; i < COUNT; i++) {
      const ia = i * 3;
      const ax = arr[ia + 0],
        ay = arr[ia + 1],
        az = arr[ia + 2];

      for (let j = i + 1; j < COUNT; j++) {
        if (segCount >= MAX_CONNECTIONS) break;

        const ib = j * 3;
        const bx = arr[ib + 0],
          by = arr[ib + 1],
          bz = arr[ib + 2];

        const dx = ax - bx;
        const dy = ay - by;
        const dz = az - bz;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECT_DIST) {
          const w = 1 - dist / CONNECT_DIST; // peso
          // guardamos segmentos
          const out = segCount * 2 * 3;

          linePositions[out + 0] = ax;
          linePositions[out + 1] = ay;
          linePositions[out + 2] = az;

          linePositions[out + 3] = bx;
          linePositions[out + 4] = by;
          linePositions[out + 5] = bz;

          segCount++;
        }
      }
      if (segCount >= MAX_CONNECTIONS) break;
    }

    // drawRange = segCount*2 vertices
    linesGeo.setDrawRange(0, segCount * 2);
    linesGeo.attributes.position.needsUpdate = true;

    // leve “zoom” según scroll (sin mareo)
    state.camera.position.z = THREE.MathUtils.lerp(6.2, 5.2, sp);
  });

  return (
    <group ref={group}>
      {/* LÍNEAS */}
      <lineSegments ref={linesRef} geometry={linesGeo}>
        <lineBasicMaterial
          transparent
          opacity={0.22}
          color={new THREE.Color("rgba(201,184,138,1)")}
        />
      </lineSegments>

      {/* PUNTOS */}
      <points ref={pointsRef} geometry={pointsGeo}>
        <pointsMaterial
          size={0.035}
          sizeAttenuation
          transparent
          opacity={0.9}
          color={new THREE.Color("#f5f0e8")}
        />
      </points>
    </group>
  );
}

export default function WorkBackground3D({ scrollProgressRef }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />

        {/* niebla suave para profundidad */}
        <fog attach="fog" args={["#000", 6, 12]} />

        <ParticlesField scrollProgressRef={scrollProgressRef} />
      </Canvas>
    </div>
  );
}
