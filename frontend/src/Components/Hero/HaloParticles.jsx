import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HaloParticles() {
  const ref = useRef();
  const count = 1200;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(2.25 + Math.random() * 0.3);

      arr.set([v.x, v.y, v.z], i * 3);
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    ref.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={ref}>
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
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.12}
        depthWrite={false}
      />
    </points>
  );
}
