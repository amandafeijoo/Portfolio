import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ConvergenceField({
  radius = 2.2,
  lines = 48,
  opacity = 0.25,
  speed = 0.08,
}) {
  const group = useRef();

  const geometry = useMemo(() => {
    const points = [];

    for (let i = 0; i < lines; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * radius;

      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;

      // Línea NO llega al centro (queda más elegante)
      points.push(
        new THREE.Vector3(x, y, 0),
        new THREE.Vector3(x * 0.15, y * 0.15, 0)
      );
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius, lines]);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.z = t * speed;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.05;
  });

  return (
    <group ref={group}>
      {/* SOFT CORE */}
      <mesh>
        <circleGeometry args={[radius * 0.15, 48]} />
        <meshBasicMaterial
          color="#e6d5bc"
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </mesh>

      {/* CONVERGING LINES */}
      <lineSegments geometry={geometry}>
        <lineBasicMaterial
          color="#e6d5bc"
          transparent
          opacity={opacity}
        />
      </lineSegments>
    </group>
  );
}
