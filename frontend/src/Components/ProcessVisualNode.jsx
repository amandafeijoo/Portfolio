import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ProcessVisualNode({ scale = 1 }) {
  const group = useRef();

  const positions = useMemo(() => {
    const count = 25;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.randFloat(0.4, 1.2);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloat(-1, 1));

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();
    group.current.rotation.y += 0.001;
    group.current.rotation.x += 0.0006;
    group.current.scale.setScalar(scale * (1 + Math.sin(t * 1.2) * 0.03));
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#d6c3a1"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <mesh>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial
          color="#bfa57a"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}
