import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FacetMesh({
  radius = 2,
  expand = 1, 
  opacity = 0.35,
  speed = 0.08,
  color = "#e6d5bc", 
}) {
  const group = useRef();

  const geometry = useMemo(() => {
    const points = [];
    const sides = 6;

    const verts = [];
    for (let i = 0; i < sides; i++) {
      const a = (i / sides) * Math.PI * 2;
      const r = radius * (0.85 + Math.random() * 0.3);
      verts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0));
    }

    // outline
    for (let i = 0; i < sides; i++) {
      points.push(verts[i], verts[(i + 1) % sides]);
    }

    // diagonals → convergencia
    for (let i = 0; i < sides; i++) {
      points.push(verts[i], new THREE.Vector3(0, 0, 0));
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.z = t * speed;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.1;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={geometry}>
        <lineBasicMaterial color="#e6d5bc" transparent opacity={opacity} />
      </lineSegments>
    </group>
  );
}
