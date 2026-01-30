import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import OctagonWire from "./OctagonWire";
import FloatingParticles from "./FloatingParticles";

export default function HeroSculpture({ enter, onProgress }) {
  const group = useRef();
  const progress = useRef(0);
  const { camera } = useThree();

  // 🎯 VALORES BASE (CLAVE)
  const baseScale = 1.3;      // tamaño normal del hero
  const idleCameraZ = 4.8;    // cámara en estado idle

  useFrame(() => {
    if (!group.current) return;

    // 🔄 PROGRESO SUAVE (portal)
    progress.current = THREE.MathUtils.lerp(
      progress.current,
      enter ? 1 : 0,
      0.002 
    );

    // 📡 enviar progreso al padre
    if (onProgress) {
      onProgress(progress.current);
    }

    // 🔮 ESCULTURA
    group.current.scale.setScalar(
      baseScale + progress.current * 2.2
    );

    group.current.rotation.y += progress.current * 0.02;
    group.current.position.z = -progress.current * 4;

    // 🎥 CÁMARA
    camera.position.z = THREE.MathUtils.lerp(
      idleCameraZ,
      0.8,
      progress.current
    );
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

