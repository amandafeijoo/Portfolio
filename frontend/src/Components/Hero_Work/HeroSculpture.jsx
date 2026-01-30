import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import OctagonWire from "./OctagonWire";
import FloatingParticles from "./FloatingParticles";

export default function HeroSculpture({ enter, onProgress }) {
  const group = useRef();
  const progress = useRef(0);
  const { camera } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;

    // 🔄 progreso suave (0 → 1)
    progress.current = THREE.MathUtils.lerp(
      progress.current,
      enter ? 1 : 0,
      0.002 // velocidad de interpolación de la entrada/salida al portal
    );

    // el progreso al padre (React)
    if (onProgress) {
      onProgress(progress.current);
    }

    // 🔮 ESCULTURA
    group.current.scale.setScalar(1 + progress.current * 2.2);
    group.current.rotation.y += progress.current * 0.02;
    group.current.position.z = -progress.current * 4;

    // 🎥 CÁMARA
    camera.position.z = THREE.MathUtils.lerp(6, 0.8, progress.current);
  });

  return (
    <group ref={group} position={[-0.95, 0, 0]}>
      {/* 🌌 PARTÍCULAS */}
      <FloatingParticles count={260} />

      {/* 🔮 OCTÁGONOS */}
      <OctagonWire radius={1.8} opacity={0.18} speed={0.05} />
      <OctagonWire radius={1.5} opacity={0.35} speed={0.1} />
      <OctagonWire radius={1.2} opacity={0.6} speed={0.18} />
    </group>
  );
}
