import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* =========================
   ✨ TEXTURA HALO SUAVE
========================= */
function createCircleTexture() {
  const size = 128;
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

  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.2, "rgba(255,255,255,0.6)");
  gradient.addColorStop(0.5, "rgba(255,255,255,0.25)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;

  return texture;
}

/* =========================
   🌌 PARTICULAS FIBONACCI
========================= */

export default function SoftParticles({ count = 800 }) {
  const pointsRef = useRef();

  const texture = useMemo(() => createCircleTexture(), []);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const radius = 2.9;

    for (let i = 0; i < count; i++) {
      const r = radius * Math.sqrt(i / count);
      const theta = i * goldenAngle;

      arr[i * 3] = r * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(theta);
      arr[i * 3 + 2] = -1.1; 
    }

    return arr;
  }, [count]);

  /* =========================
     🎥 MOVIMIENTO SUAVE
  ========================== */

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    const t = clock.elapsedTime;

    // Rotación ultra suave
    pointsRef.current.rotation.z = t * 0.02;

    // Inclinación fija elegante
    pointsRef.current.rotation.x = 0.25;
  });

  return (
    <points ref={pointsRef} renderOrder={-1} position={[0, 1.0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        map={texture}
        color="#f0d6a0" 
        size={0.055}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
