import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { ThreeWrap } from "./ThreeWrap.styles";

/* ---------- Particles ---------- */
function Particles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 1400;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.randFloat(1.8, 6.2);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const y = THREE.MathUtils.randFloat(-1.2, 2.3);

      arr[i * 3 + 0] = Math.cos(theta) * r;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = Math.sin(theta) * r;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.06;
  });

  return (
    <group ref={ref} position={[0, 0.4, 0]}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#c9b88a"
          size={0.012}
          sizeAttenuation
          depthWrite={false}
          opacity={0.55}
        />
      </Points>

      {/* halo central (mesh muy barato) */}
      <mesh position={[0, 0.7, -2.2]}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial transparent opacity={0.07} color="#c9b88a" />
      </mesh>
    </group>
  );
}

export default function ThreeContactBackground() {
  return (
    <ThreeWrap aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <Particles />
      </Canvas>
    </ThreeWrap>
  );
}
