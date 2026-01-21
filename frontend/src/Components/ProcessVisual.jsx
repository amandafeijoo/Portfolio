import { Canvas } from "@react-three/fiber";
import ProcessVisualScene from "./ProcessVisualScene";

export default function ProcessVisual() {
  return (
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: 0,
        width: "100%",
        height: "1000px",
        transform: "translateY(-50%)",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 3, 4]} intensity={0.9} />
        <ProcessVisualScene />
      </Canvas>
    </div>
  );
}
