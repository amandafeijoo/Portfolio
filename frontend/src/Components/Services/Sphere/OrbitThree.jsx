import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import StarsSphere from "./StarsSphere";

export default function OrbitThree({ impulseRef }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      style={{
        position: "absolute",
        height: { xs: "120vh", md: "100vh" }, 
        overflow: "visible",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        opacity: { xs: "0.95", md: "0.55" },
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />

      <Suspense fallback={null}>
        <group position={[0, -0.15, 0]}>
          <StarsSphere impulseRef={impulseRef} />
        </group>
      </Suspense>
    </Canvas>
  );
}

