import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 120;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = THREE.MathUtils.randFloat(-6, 6);   // x
      arr[i * 3 + 1] = THREE.MathUtils.randFloat(-4, 4); // y
      arr[i * 3 + 2] = THREE.MathUtils.randFloat(-6, -1); // z
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#c9b88a"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  );
}

export default function ThreeWorkParticlesBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={1} />
      <Particles />
    </Canvas>
  );
}


