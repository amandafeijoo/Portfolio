import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function ProcessHeroBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <Scene />
    </Canvas>
  );
}
