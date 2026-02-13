import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ───────── INNER LINES ───────── */
function InnerLines({ radius }) {
  const geometry = useMemo(() => {
    const points = [];
    const sides = 8;

    for (let i = 0; i < sides; i++) {
      const a = (i / sides) * Math.PI * 2;
      points.push(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0)
      );
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#e6d5bc" transparent opacity={0.25} />
    </lineSegments>
  );
}

/* ───────── OCTAGON ───────── */
export default function OctagonWire({
  radius = 1.8,
  opacity = 0.55,
  speed = 0.15,
}) {
  const group = useRef();

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const sides = 8;

    for (let i = 0; i <= sides; i++) {
      const a = (i / sides) * Math.PI * 2;
      const x = Math.cos(a) * radius;
      const y = Math.sin(a) * radius;
      i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
    }

    const geo = new THREE.ShapeGeometry(shape);
    geo.center();

    return geo;
  }, [radius]);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;
    group.current.rotation.y = t * speed;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.12;
  });

  return (
    <group ref={group}>
      {/* HALO */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[radius * 0.95, 64]} />
        <meshBasicMaterial
          color="#c9b07a"
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </mesh>

      {/* INNER STRUCTURE */}
      <InnerLines radius={radius * 0.95} />

      {/* OUTLINE */}
      <lineSegments geometry={new THREE.EdgesGeometry(geometry)}>
        <lineBasicMaterial color="#c9b07a" transparent opacity={opacity} />
      </lineSegments>
    </group>
  );
}
