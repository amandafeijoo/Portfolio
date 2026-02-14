import { useMemo } from "react";
import * as THREE from "three";

export default function FineLines() {
  const phi = (1 + Math.sqrt(5)) / 2;
  const baseSize = 0.4;
  const squaresCount = 8;

  /* =========================
     FIBONACCI SQUARES
  ========================== */

  const squares = useMemo(() => {
    const group = new THREE.Group();

    let x = 0;
    let y = 0;
    let size = baseSize;

    for (let i = 0; i < squaresCount; i++) {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(size, 0, 0),
        new THREE.Vector3(size, size, 0),
        new THREE.Vector3(0, size, 0),
        new THREE.Vector3(0, 0, 0),
      ]);

      const line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({
          color: "#e8c98f",
          transparent: true,
          opacity: 0.25,
        })
      );

      line.position.set(x, y, 0);
      group.add(line);

      const newSize = size * phi;

      switch (i % 4) {
        case 0:
          x += size;
          break;
        case 1:
          y -= newSize;
          break;
        case 2:
          x -= newSize;
          break;
        case 3:
          y += size;
          break;
      }

      size = newSize;
    }

    group.position.set(-2.2, 1.2, 0);
    return group;
  }, []);

  /* =========================
     GOLDEN SPIRAL
  ========================== */

  const spiralGeometry = useMemo(() => {
    const points = [];
    const maxTheta = 6 * Math.PI;
    const segments = 1200;

    const a = 0.15;
    const b = 0.306349;

    for (let i = 0; i < segments; i++) {
      const theta = (i / segments) * maxTheta;
      const r = a * Math.exp(b * theta);

      points.push(
        new THREE.Vector3(r * Math.cos(theta), r * Math.sin(theta), 0)
      );
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <group position={[0, 0, -0.4]} scale={0.8}>
      <primitive object={squares} />

      <line geometry={spiralGeometry}>
        <lineBasicMaterial
          color="#e8c98f"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </line>
    </group>
  );
}
