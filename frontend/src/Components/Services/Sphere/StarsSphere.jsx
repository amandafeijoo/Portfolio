import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function StarsSphere({ impulseRef }) {
  const pointsRef = useRef();
  const impulse = useRef(0); //  MEMORIA del impulso

  const { size } = useThree();
  const isMobile = size.width < 768;

  const STAR_COUNT = 1600;
  const RADIUS = 3;

  /* ============================
     ⭐ GEOMETRY
  ============================ */
  const geometry = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      const u = Math.random();
      const v = Math.random();

      // Distribución(más estrellas arriba)
      const phi = Math.acos(2 * Math.pow(u, 0.75) - 1);
      const theta = 2 * Math.PI * v;

      positions[i * 3] = RADIUS * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = RADIUS * Math.cos(phi);
      positions[i * 3 + 2] = RADIUS * Math.sin(phi) * Math.sin(theta);
    }

    return positions;
  }, []);

  /* ============================
     ✨ MATERIAL
  ============================ */
  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#ffffff",
        size: isMobile ? 0.009 : 0.01,
        transparent: true,
        opacity: isMobile ? 0.95 : 0.45,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [isMobile]
  );

  /* ============================
     🌀 ROTATION + IMPULSE
  ============================ */
  useFrame((_, delta) => {
    // 🔥 inyectar impulso desde drag
    if (impulseRef?.current) {
      impulse.current += impulseRef.current;
      impulseRef.current = 0;
    }

    // 🧲 fricción la velocidad en que va
    impulse.current *= 0.69;

    //// 🌀 velocidad final /////
    const baseSpeed = 0.10 * delta;
    const speed = baseSpeed + impulse.current;

    pointsRef.current.rotation.y += speed;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={geometry}
          count={geometry.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <primitive object={material} />
    </points>
  );
}
