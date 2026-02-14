import { useMemo } from "react";
import * as THREE from "three";

function createHaloTexture() {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );

  gradient.addColorStop(0, "rgba(255,215,160,0.7)");
  gradient.addColorStop(0.3, "rgba(255,215,160,0.35)");
  gradient.addColorStop(0.6, "rgba(255,215,160,0.12)");
  gradient.addColorStop(1, "rgba(255,215,160,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return new THREE.CanvasTexture(canvas);
}

export default function GoldenHalo() {
  const texture = useMemo(() => createHaloTexture(), []);

  return (
    <mesh position={[0, 2, -2]} renderOrder={-2}>
      <circleGeometry args={[4, 64]} />
      <meshBasicMaterial
        map={texture}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
