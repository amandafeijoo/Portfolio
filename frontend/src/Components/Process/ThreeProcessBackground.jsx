import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* =========================
   LÍNEAS ENTRE NODOS
========================= */
function ConnectionLines({ positions }) {
  const geometry = useMemo(() => {
    const verts = [];
    const threshold = 1.2;

    for (let i = 0; i < positions.length; i += 3) {
      for (let j = i + 3; j < positions.length; j += 3) {
        const dx = positions[i] - positions[j];
        const dy = positions[i + 1] - positions[j + 1];
        const dz = positions[i + 2] - positions[j + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < threshold) {
          verts.push(
            positions[i],
            positions[i + 1],
            positions[i + 2],
            positions[j],
            positions[j + 1],
            positions[j + 2]
          );
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, [positions]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial
        color="rgba(254, 253, 253, 0.55)"
        transparent
        opacity={0.18}
      />
    </lineSegments>
  );
}

/* =========================
   ESTRELLAS / NODOS
========================= */
function FloatingNodes() {
  const group = useRef();

  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 120; i++) {
      arr.push(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
    }
    return new Float32Array(arr);
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geo;
  }, [positions]);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.02;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.05;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <points geometry={geometry}>
        <pointsMaterial
          size={0.03}
          color="rgba(254, 253, 253, 0.55)"
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>

      <ConnectionLines positions={positions} />
    </group>
  );
}

/* =========================
   CANVAS FINAL (CENTRADO REAL)
========================= */
export default function ThreeProcessBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 50 }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "75vw",
        height: "75vh",
        transform: "translate(-50%, -50%)",
        zIndex: 0,
        pointerEvents: "none",
      }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <FloatingNodes />
    </Canvas>
  );
}
