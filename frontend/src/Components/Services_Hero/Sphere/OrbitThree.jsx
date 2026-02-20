import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import StarsSphere from "./StarsSphere";

export default function OrbitThree({ impulseRef, rotationRef }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      style={{
        position: "absolute",
        inset: 0,
        height: "100%",
        width: "100%",
        overflow: "visible",
        zIndex: 1,
        pointerEvents: "none",
        opacity: 0.95,
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />

      <Suspense fallback={null}>
        <group position={[0, -0.38, 0]}>
          <StarsSphere impulseRef={impulseRef} rotationRef={rotationRef} />
        </group>
      </Suspense>
    </Canvas>
  );
}
