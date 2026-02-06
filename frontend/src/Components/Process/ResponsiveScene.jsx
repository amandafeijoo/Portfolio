import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import ReliefMesh from "./ReliefMesh";

export default function ResponsiveScene() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;

  const cameraZ = isMobile ? 6.5 : 5;

  return (
    <>
      {/* 🌑 Luz base */}
      <ambientLight intensity={0.25} />

      {/* 🔥 Luz principal (define volumen) */}
      <directionalLight position={[4, 5, 6]} intensity={1.2} />

      {/* ✨ Luz secundaria (marca relieve) */}
      <directionalLight position={[-4, -3, 2]} intensity={0.55} />

      {/* 🌒 Luz trasera (profundidad 3D) */}
      <pointLight position={[0, 0, -4]} intensity={0.35} />

      <group position={[0, 0, 0]}>
        <ReliefMesh />
      </group>
    </>
  );
}
