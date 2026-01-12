import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* =========================
   ✨ STAR FIELD
========================= */
function StarField({ count = 800 }) {
  const ref = useRef();

  /* =========================
     POSICIONES (una sola vez)
  ========================= */
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = THREE.MathUtils.randFloat(1.6, 3.2);
      const angle = Math.random() * Math.PI * 2;

      const x = Math.cos(angle) * radius + THREE.MathUtils.randFloatSpread(0.8);

      const y = THREE.MathUtils.randFloatSpread(1.6);
      const z = Math.sin(angle) * radius;

      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }

    return arr;
  }, [count]);

  /* =========================
     SCROLL + ROTACIÓN
  ========================= */
  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

    // 🌊 scroll normalizado (0 → 1)
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const scroll = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    /* ---------- ROTACIÓN ---------- */
    // rotación guiada por scroll
    const scrollRotY = scroll * Math.PI * 1.2; //
    const scrollRotX = scroll * 0.25;

    // micro vida orgánica (muy sutil)
    const wobbleY = Math.sin(t * 0.4) * 0.04;
    const wobbleX = Math.sin(t * 0.3) * 0.02;

    ref.current.rotation.y = scrollRotY + wobbleY;
    ref.current.rotation.x = scrollRotX + wobbleX;

    /* ---------- DESPLAZAMIENTO ---------- */
    // ⬅️➡️ movimiento horizontal con scroll
    ref.current.position.x = (scroll - 0.5) * 1.6;

    // profundidad muy ligera
    ref.current.position.z = -scroll * 0.5;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#f5e9d6"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

/* =========================
   🌌 SCENE
========================= */
export default function WorkOrbital() {
  return (
    <div style={{ height: "520px", width: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <StarField />
      </Canvas>
    </div>
  );
}
