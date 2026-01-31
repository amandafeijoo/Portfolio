import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import ParticleSphere from "./ParticleSphere";

export default function HeroScene({ enter }) {
  const [ready, setReady] = useState(false);

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
        opacity: ready ? 1 : 0,
        transition: "opacity 600ms ease",
      }}
    >
      <ParticleSphere enter={enter} />
    </Canvas>
  );
}
