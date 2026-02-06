import { useMemo } from "react";
import * as THREE from "three";

export default function FineLines() {
  const geometry = useMemo(() => {
    const points = [];
    const radius = 3;
    const segments = 64;

    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      points.push(
        new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0)
      );
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        color="#e6d3a8"
        transparent
        opacity={0.25}
        blending={THREE.AdditiveBlending}
      />
    </line>
  );
}
