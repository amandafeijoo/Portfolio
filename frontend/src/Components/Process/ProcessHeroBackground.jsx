import { Canvas } from "@react-three/fiber";
import ConvergenceField from "./ConvergenceField";

export default function ProcessHeroBackground() {
  return (
    <Canvas
    camera={{ position: [0, 0, 7.8], fov: 50 }}
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
    }}
  >
  
      <ambientLight intensity={0.6} />

      {/* LAYERS DE CONVERGENCIA */}
      <ConvergenceField radius={3.8} lines={28} opacity={0.12} speed={0.03} />
<ConvergenceField radius={2.6} lines={48} opacity={0.25} speed={0.07} />
<ConvergenceField radius={1.6} lines={64} opacity={0.45} speed={0.12} />


    </Canvas>
  );
}
