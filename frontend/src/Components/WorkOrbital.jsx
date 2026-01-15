import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useMediaQuery } from "@mui/material";

/* =========================
   ✨ STAR FIELD
========================= */
function StarField({
  count,
  size,
  rotFactor,
  moveFactor,
  depthFactor,
  isMobile,
}) {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = isMobile
        ? THREE.MathUtils.randFloat(1.4, 3) // 📱 mobile  //////
        : THREE.MathUtils.randFloat(3, 7); // 🖥 desktop ///////

      const angle = Math.random() * Math.PI * 2;

      arr[i * 3] =
        Math.cos(angle) * radius + THREE.MathUtils.randFloatSpread(0.6);

      arr[i * 3 + 1] = THREE.MathUtils.randFloatSpread(1.4);

      arr[i * 3 + 2] = Math.sin(angle) * radius;
    }

    return arr;
  }, [count, isMobile]);

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scroll = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    const wobbleY = Math.sin(t * 0.4) * 0.04;
    const wobbleX = Math.sin(t * 0.3) * 0.02;

    ref.current.rotation.y = scroll * Math.PI * rotFactor + wobbleY;
    ref.current.rotation.x = scroll * rotFactor * 0.25 + wobbleX;

    ref.current.position.x = (scroll - 0.5) * moveFactor;
    ref.current.position.z = -scroll * depthFactor;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#f5e9d6"
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

/* =========================
   🌌 SCENE (RESPONSIVE)
========================= */
export default function WorkOrbital() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const config = useMemo(() => {
    if (isMobile) {
      return {
        height: 360,
        cameraZ: 4.2,
        count: 420,
        size: 0.045,
        rotFactor: 0.6,
        moveFactor: 0.9,
        depthFactor: 0.3,
      };
    }

    return {
      height: 520,
      cameraZ: 5,
      count: 800,
      size: 0.035,
      rotFactor: 1.2,
      moveFactor: 1.6,
      depthFactor: 0.5,
    };
  }, [isMobile]);

  return (
    <div style={{ height: config.height, width: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, config.cameraZ], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <StarField {...config} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
