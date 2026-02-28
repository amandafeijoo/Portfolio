import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import ParticleSphere from "./ParticleSphere";

/* =========================
   RESPONSIVE CAMERA
========================= */
function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const isMobile = size.width < 768;

    if (isMobile) {
      camera.position.set(0, 0, 7.5);
      camera.fov = 70;
    } else {
      camera.position.set(0, 0, 6);
      camera.fov = 55;
    }

    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

export default function HeroScene({ enter, enterStage, onArriveUniverse }) {
  const [ready, setReady] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor("#000000", 1);
        setReady(true);
      }}
      style={{
        width: "100%",
        height: "100%",
        opacity: ready ? 1 : 0,
        transition: "opacity 600ms ease",
      }}
    >
      <ResponsiveCamera />
      <ParticleSphere
        enter={enter}
        enterStage={enterStage}
        onArriveUniverse={onArriveUniverse}
      />
    </Canvas>
  );
}
