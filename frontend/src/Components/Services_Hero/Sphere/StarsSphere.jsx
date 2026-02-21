import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function StarsSphere({ impulseRef }) {
  const groupRef = useRef();
  const coreRef = useRef();
  const ringRef = useRef();
  const impulse = useRef(0);

  const { size } = useThree();
  const isMobile = size.width < 768;

  const STAR_COUNT = isMobile ? 350 : 500;
  const RADIUS = 2.4;

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
  }, [STAR_COUNT]);

  /* ============================
     ✨ STAR MATERIAL
  ============================ */
  const starMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#fff6dc",
        size: isMobile ? 0.012 : 0.015,
        transparent: true,
        opacity: 1,
        depthWrite: false,
      }),
    [isMobile]
  );

  /* ============================
     🌀 ROTATION + IMPULSE
  ============================ */
  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (impulseRef?.current) {
      impulse.current += impulseRef.current;
      impulseRef.current = 0;
    }

    impulse.current *= 0.92;

    const baseSpeed = 0.02 * delta;
    const speed = baseSpeed + impulse.current;

    groupRef.current.rotation.y += speed;

    if (coreRef.current) {
      coreRef.current.rotation.x += coreSpeedX * delta;
      coreRef.current.rotation.y += coreSpeedY * delta;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z -= 0.3 * delta;
    }
  });

  return (
    <group rotation={isMobile ? [0.4, 0.3, 0] : [0, 0, 0]}>
      {/* ⭐ STARS (NO SE MUEVEN) */}
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

      {/* 💫 CORE + RING GROUP (SI SE MUEVE) */}
      <group ref={groupRef}>
        {/* 💎 CORE */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[isMobile ? 2.9 : 2.6, 24, 24]} />
          <meshBasicMaterial
            color="#f8ebd2"
            wireframe
            transparent
            opacity={isMobile ? 0.18 : 0.3}
          />
        </mesh>

        {/* 🌀 RING */}
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[isMobile ? 3.0 : 3, 0.01, 8, 64]} />
          <meshBasicMaterial color="#c9a96a" transparent opacity={0.55} />
        </mesh>
      </group>
    </group>
  );
}
