import FacetMesh from "./FacetMesh";
import FacetParticles from "./FacetParticles";
import { Canvas, useThree } from "@react-three/fiber";
import { useMemo } from "react";

/* ===============================
   RESPONSIVE SCENE
================================ */

function ResponsiveScene() {
  const { viewport } = useThree();

  const isMobile = viewport.width < 6;

  const config = useMemo(() => {
    if (isMobile) {
      return {
        cameraZ: 9.6,
        fov: 58,

        particles: {
          count: 70,
          spread: 4,
          size: 0.02,
          opacity: 0.25,
          speed: 0.01,
        },

        meshes: [
          { radius: 1.8, opacity: 0.12, speed: 0.02 },
          { radius: 1.3, opacity: 0.22, speed: 0.05 },
          { radius: 1.0, opacity: 0.35, speed: 0.08 },
        ],
      };
    }

    // 💻 Desktop
    return {
      cameraZ: 8.2,
      fov: 50,

      particles: {
        count: 130,
        spread: 5,
        size: 0.03,
        opacity: 0.4,
        speed: 0.015,
      },

      meshes: [
        { radius: 2.0, opacity: 0.15, speed: 0.03 },
        { radius: 1.4, opacity: 0.3, speed: 0.07 },
        { radius: 1.0, opacity: 0.5, speed: 0.12 },
      ],
    };
  }, [isMobile]);

  return (
    <>
      {/* 💡 Luz */}
      <ambientLight intensity={0.6} />

      {/* ✨ Partículas */}
      <FacetParticles
        count={config.particles.count}
        spread={config.particles.spread}
        depth={3}
        size={config.particles.size}
        opacity={config.particles.opacity}
        speed={config.particles.speed}
        color="rgba(201, 184, 138, 0.9)"
      />

      {/* 🔮 Estructura */}
      {config.meshes.map((mesh, i) => (
        <FacetMesh
          key={i}
          radius={mesh.radius}
          opacity={mesh.opacity}
          speed={mesh.speed}
          color={mesh.color}
        />
      ))}
    </>
  );
}

/* ===============================
   CANVAS WRAPPER
================================ */

export default function ProcessHeroBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.2], fov: 50 }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <ResponsiveScene />
    </Canvas>
  );
}
