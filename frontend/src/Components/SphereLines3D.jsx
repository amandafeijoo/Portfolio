import * as THREE from "three";

export default function SphereLines3D({
  radius = 3.2,
  linesPerSide = 7,
  spread = Math.PI * 0.18,
  length = 9,
}) {
  const lines = [];

  const material = new THREE.LineBasicMaterial({
    color: new THREE.Color("rgb(174, 163, 163)"),
    transparent: true,
    opacity: 0.2,
  });

  const createSide = (direction) => {
    for (let i = 0; i < linesPerSide; i++) {
      const t = i / (linesPerSide - 1);
      const angle = -spread / 2 + spread * t;

      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(
          Math.cos(angle) * radius * direction,
          Math.sin(angle) * radius * 0.15,
          0
        ),
        new THREE.Vector3(
          Math.cos(angle) * length * direction,
          Math.sin(angle) * length,
          0
        ),
      ];

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      lines.push(
        <line
          key={`${direction}-${i}`}
          geometry={geometry}
          material={material}
        />
      );
    }
  };

  createSide(1);
  createSide(-1);

  return <group>{lines}</group>;
}
