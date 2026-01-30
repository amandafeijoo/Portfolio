import { Canvas } from "@react-three/fiber";
import HeroSculpture from "./HeroSculpture";

export default function WorkHeroScene({ enter, onProgress }) {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 4]} intensity={1} />

      <HeroSculpture enter={enter} onProgress={onProgress} />
    </Canvas>
  );
}
