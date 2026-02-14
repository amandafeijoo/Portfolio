import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import LinkedRelief from "./LinkedRelief";
import FineLines from "./FineLines";
import SoftParticles from "./SoftParticles";
import GoldenHalo from "./GoldenHalo";

export default function Scene() {
  const { viewport } = useThree();

  const isMobile = viewport.width < 6;

  const scale = useMemo(() => {
    if (isMobile) return 0.38; // móvil
    return 0.45; // desktop
  }, [isMobile]);

  const positionY = useMemo(() => {
    if (isMobile) return -0.8; // móvil
    return -1; // desktop
  }, [isMobile]);

  return (
    <group scale={scale} position={[0, positionY, 0]}>
      <ambientLight intensity={0.22} />

      <directionalLight position={[4, 5, 6]} intensity={1.1} />
      <directionalLight position={[-4, -3, 2]} intensity={0.55} />
      <pointLight position={[0, 0, -4]} intensity={0.35} />

      <GoldenHalo />
      <SoftParticles />
      <FineLines />
    </group>
  );
}
