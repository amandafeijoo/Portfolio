import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ReliefMesh() {
  const mesh = useRef();

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const sides = 6;
    const radius = 1.6;

    for (let i = 0; i <= sides; i++) {
      const a = (i / sides) * Math.PI * 2;
      const x = Math.cos(a) * radius;
      const y = Math.sin(a) * radius;
      i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
    }

    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.4,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelSegments: 6,
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    mesh.current.rotation.y = t * 0.18;
    mesh.current.rotation.x = Math.sin(t * 0.3) * 0.12;
  });

  return (
    <mesh ref={mesh} geometry={geometry}>
      <meshPhysicalMaterial
        color="#c9b07a"
        metalness={0.8}
        roughness={0.32}
        clearcoat={0.6}
        clearcoatRoughness={0.25}
      />
    </mesh>
  );
}
