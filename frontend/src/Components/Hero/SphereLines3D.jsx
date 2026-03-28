import * as THREE from "three";

export default function SphereLines3D({
  radius = 3.2,
  linesPerSide = 7,
  spread = Math.PI * 0.18,
  length = 9,
}) {
  const elements = [];

  const accentMaterial = new THREE.LineBasicMaterial({
    color: new THREE.Color("#d9e6f5"),
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
    depthTest: true,
  });

  const createSide = (direction) => {
    for (let i = 0; i < linesPerSide; i++) {
      const t = i / (linesPerSide - 1);
      const angle = -spread / 2 + spread * t;
      const distanceFromCenter = Math.abs(t - 0.5);
      const opacity = 0.34 - distanceFromCenter * 0.14;

      const goldMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color("#e6d3a8"),
        transparent: true,
        opacity: Math.max(opacity, 0.14),
        depthWrite: false,
        depthTest: true,
      });

      // evita la banda rectangular en el centro
      const centerYOffset = (t - 0.5) * 0.22;

      const points = [
        new THREE.Vector3(0, centerYOffset, -1.2),
        new THREE.Vector3(
          Math.cos(angle) * radius * direction,
          Math.sin(angle) * radius * 0.24,
          -1.2
        ),
        new THREE.Vector3(
          Math.cos(angle) * length * direction,
          Math.sin(angle) * length,
          -2.5
        ),
      ];

      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      elements.push(
        <line
          key={`line-${direction}-${i}`}
          geometry={geometry}
          material={goldMaterial}
          renderOrder={1}
        />
      );
    }
  };

  createSide(1);
  createSide(-1);

  // ribbons suaves, más orgánicas, no rectangulares
  const ribbonTop = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-8.8, 1.8, -2.9),
    new THREE.Vector3(-5.2, 1.05, -2.2),
    new THREE.Vector3(-2.2, 0.45, -1.7),
    new THREE.Vector3(0, 0.2, -1.45),
    new THREE.Vector3(2.2, 0.45, -1.7),
    new THREE.Vector3(5.2, 1.05, -2.2),
    new THREE.Vector3(8.8, 1.8, -2.9),
  ]);

  const ribbonBottom = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-8.8, -1.8, -2.9),
    new THREE.Vector3(-5.2, -1.05, -2.2),
    new THREE.Vector3(-2.2, -0.45, -1.7),
    new THREE.Vector3(0, -0.2, -1.45),
    new THREE.Vector3(2.2, -0.45, -1.7),
    new THREE.Vector3(5.2, -1.05, -2.2),
    new THREE.Vector3(8.8, -1.8, -2.9),
  ]);

  const ribbonTopGeometry = new THREE.BufferGeometry().setFromPoints(
    ribbonTop.getPoints(80)
  );
  const ribbonBottomGeometry = new THREE.BufferGeometry().setFromPoints(
    ribbonBottom.getPoints(80)
  );

  return (
    <group>
      {elements}

      {/* ribbons azules suaves */}
      <line
        geometry={ribbonTopGeometry}
        material={accentMaterial}
        renderOrder={0}
      />
      <line
        geometry={ribbonBottomGeometry}
        material={accentMaterial}
        renderOrder={0}
      />
    </group>
  );
}
