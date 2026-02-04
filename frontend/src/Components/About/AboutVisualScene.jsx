import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function AboutVisualScene() {
  const group = useRef();
  const { mouse } = useThree();

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  /* 🎯 base rotation (shared) */
  const baseRotation = useRef({ x: 0, y: 0 });

  /* 🖱️ mouse influence (desktop only) */
  const mouseTarget = useRef(new THREE.Vector2(0, 0));
  const mouseCurrent = useRef(new THREE.Vector2(0, 0));

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

    /* 🔁 BASE ROTATION (SAME SPEED EVERYWHERE) */
    baseRotation.current.y += 0.0012;
    baseRotation.current.x += 0.0006;

    /* 🖱️ desktop mouse = OFFSET, not speed */
    let offsetX = 0;
    let offsetY = 0;

    if (!isMobile) {
      mouseTarget.current.x = mouse.y * 0.25;
      mouseTarget.current.y = mouse.x * 0.25;

      mouseCurrent.current.lerp(mouseTarget.current, 0.06);

      offsetX = mouseCurrent.current.x;
      offsetY = mouseCurrent.current.y;
    }

    /* 🎯 APPLY FINAL ROTATION */
    group.current.rotation.x = baseRotation.current.x + offsetX;
    group.current.rotation.y = baseRotation.current.y + offsetY;
    group.current.rotation.z =
      Math.sin(t * 0.4) * 0.02 + Math.cos(t * 0.6) * 0.015;
  });

  return (
    <group ref={group}>
      {/* ✨ PARTICLES */}
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
          size={0.025}
          color="#e6d3a8"
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* ✨ WIREFRAME */}
      <mesh>
        <icosahedronGeometry args={[1.38, 1]} />
        <meshBasicMaterial
          color="#c8a46a"
          wireframe
          transparent
          opacity={0.38}
        />
      </mesh>

      {/* ✨ HALO */}
      <mesh>
        <icosahedronGeometry args={[1.42, 1]} />
        <meshBasicMaterial
          color="#e6d3a8"
          wireframe
          transparent
          opacity={0.14}
        />
      </mesh>

      {/* ✨ ATMOSPHERE */}
      <mesh>
        <icosahedronGeometry args={[1.48, 0]} />
        <meshBasicMaterial
          color="#fdf9f0"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>
    </group>
  );
}

