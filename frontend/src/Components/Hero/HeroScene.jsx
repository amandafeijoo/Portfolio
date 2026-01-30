import { Canvas } from "@react-three/fiber";
import ParticleSphere from "./ParticleSphere";


export default function HeroScene({ enter }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <ParticleSphere enter={enter} />
    </Canvas>
  );
}

