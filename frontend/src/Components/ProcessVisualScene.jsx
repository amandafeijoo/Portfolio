import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import ProcessVisualNode from "./ProcessVisualNode";

function OrbitNode({ angleOffset, orbitRadius, speed, scale }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime();
    const angle = t * speed + angleOffset;

    ref.current.position.x = Math.cos(angle) * orbitRadius;
    ref.current.position.z = Math.sin(angle) * orbitRadius;
    ref.current.position.y = Math.sin(angle * 0.6) * 0.35;
  });

  return (
    <group ref={ref}>
      <ProcessVisualNode scale={scale} />
    </group>
  );
}

export default function ProcessVisualScene() {
  return (
    <>
      {/* 🪐 ORBITALES */}
      {Array.from({ length: 6 }).map((_, i) => (
        <OrbitNode
          key={i}
          angleOffset={(i / 6) * Math.PI * 2}
          orbitRadius={2.4} // orbitRadius={1.4 + i * 0.3}
          speed={0.22}
          scale={0.35}
        />
      ))}
    </>
  );
}
