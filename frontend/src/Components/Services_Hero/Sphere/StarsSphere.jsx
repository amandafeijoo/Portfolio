import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function StarsSphere({ impulseRef }) {
  const groupRef = useRef();
  const impulse = useRef(0);

  const { size } = useThree();
  const isMobile = size.width < 768;

  const STAR_COUNT = 800;
  const RADIUS = 2.3;

  // 💎 Núcleo interno

  const coreSpeedX = 0.08;
  const coreSpeedY = 0.05;

  /* ============================
     ⭐ STAR GEOMETRY
  ============================ */
  const starPositions = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      const u = Math.random();
      const v = Math.random();

      const phi = Math.acos(2 * Math.pow(u, 0.75) - 1);
      const theta = 2 * Math.PI * v;

      positions[i * 3] = RADIUS * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = RADIUS * Math.cos(phi);
      positions[i * 3 + 2] = RADIUS * Math.sin(phi) * Math.sin(theta);
    }

    return positions;
  }, []);

  /* ============================
     ✨ STAR MATERIAL
  ============================ */
  const starMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#fff6dc",
        size: isMobile ? 0.012 : 0.015, // 🔥 MÁS GRANDES
        transparent: true,
        opacity: isMobile ? 3 : 1.6, // 🔥 más visibles
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [isMobile]
  );

  /* ============================
     🌀 ROTATION + IMPULSE
  ============================ */
  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Inyectar impulso desde drag
    if (impulseRef?.current) {
      impulse.current += impulseRef.current;
      impulseRef.current = 0;
    }

    // Fricción
    impulse.current *= 0.69;

    const baseSpeed = 0.035 * delta;
    const speed = baseSpeed + impulse.current;

    // 🌌 Esfera exterior
    groupRef.current.rotation.y += speed;

    // 💎 Núcleo interno rota distinto

    groupRef.current.children[1].rotation.x += coreSpeedX * delta;
    groupRef.current.children[1].rotation.y += coreSpeedY * delta;

    // 🌀 Anillo rota en dirección opuesta
    groupRef.current.children[2].rotation.z -= 0.5 * delta;
  });

  return (
    <group ref={groupRef} rotation={isMobile ? [0.4, 0.3, 0] : [0, 0, 0]}>
      {/* ⭐ STARS */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={starPositions}
            count={starPositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <primitive object={starMaterial} />
      </points>

      {/* 💎 INNER GEOMETRIC CORE */}
      <mesh>
        <icosahedronGeometry args={[isMobile ? 2.9 : 2.6, 1]} />
        <meshBasicMaterial
          color="rgba(248, 235, 210, 0.85)"
          wireframe
          transparent
          opacity={isMobile ? 0.45 : 0.3} // 🔥 más visible en móvil
          />
      </mesh>

      {/* 🌀 ROTATING TORUS RING */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[isMobile ? 3.0 : 3.2, 0.01, 16, 200]} />
        <meshBasicMaterial
          color="rgba(201,169,106,0.85),"
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}
