import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SoftParticles({ count = 50 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#e6d5bc"
        size={0.012}
        transparent
        opacity={1}
        depthWrite={false}
      />
    </points>
  );
}
