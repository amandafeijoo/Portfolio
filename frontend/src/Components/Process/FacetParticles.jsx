import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FacetParticles({
  count = 100,
  spread = 2,
  depth = 3,
  size = 0.02,
  opacity = 0.45,
  speed = 0.02,
}) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 2] = (Math.random() - 0.5) * depth;
    }
    return arr;
  }, [count, spread, depth]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.elapsedTime * speed;
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
        size={1.3} // 👈 tamaño particulas
        sizeAttenuation={false} 
        transparent
        opacity={opacity}
        depthWrite={false}
        depthTest={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
