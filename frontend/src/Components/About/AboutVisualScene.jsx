import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function AboutVisualScene() {
  const group = useRef();
  const points = useRef();
  const { mouse } = useThree();

  // 🎯 targets suaves
  const targetRotation = useRef(new THREE.Vector2(0, 0));
  const currentRotation = useRef(new THREE.Vector2(0, 0));

  /* ======================
     PARTICLES GEOMETRY
  ====================== */
  const positions = useMemo(() => {
    const count = 420;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.randFloat(0.5, 1.5);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloat(-1, 1));

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }

    return arr;
  }, []);

  /* ======================
     ANIMATION LOOP
  ====================== */
  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    /* 🌬️ breathing */
    const scale = 1 + Math.sin(t * 1.1) * 0.03;
    group.current.scale.setScalar(scale);

    /* 🧲 mouse → target (NO directo) */
    targetRotation.current.x = mouse.y * 0.45;
    targetRotation.current.y = mouse.x * 0.45;

    /* 🫧 damping / inertia */
    currentRotation.current.lerp(targetRotation.current, 0.06);

    group.current.rotation.x = currentRotation.current.x;
    group.current.rotation.y = currentRotation.current.y;

    /* 🌀 micro drift (vida propia) */
    group.current.rotation.z =
      Math.sin(t * 0.4) * 0.02 + Math.cos(t * 0.6) * 0.015;
  });

  return (
    <group ref={group}>
      {/* ✨ POINTS CORE */}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.035}
          color="#d6c3a1"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* ✨ WIREFRAME SOUL */}
      <mesh>
        <icosahedronGeometry args={[1.38, 1]} />
        <meshBasicMaterial
          color="#bfa57a"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}
