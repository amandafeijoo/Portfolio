import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function ProcessHeroBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.9,
      }}
    >
      <Scene />
    </Canvas>
  );
}
