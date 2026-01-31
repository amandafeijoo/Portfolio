import FacetMesh from "./FacetMesh";
import FacetParticles from "./FacetParticles";
import { Canvas } from "@react-three/fiber";

export default function ProcessHeroBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.2], fov: 50 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />

      {/* RELLENO */}
      <FacetParticles
        count={130}
        spread={5}
        depth={3}
        size={0.03}
        opacity={0.4}
        speed={0.015}
        color="rgba(201, 184, 138, 0.9)"
      />

      {/* ESTRUCTURA */}
      <FacetMesh radius={2.3} opacity={0.15} speed={0.03} />

      <FacetMesh
        radius={1.6}
        opacity={0.3}
        speed={0.07}
      />

      <FacetMesh
        radius={1.2}
        opacity={0.5}
        speed={0.12}
        color="#f1eadc" 
      />
    </Canvas>
  );
}
