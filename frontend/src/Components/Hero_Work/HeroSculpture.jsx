import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import OctagonWire from "./OctagonWire";
import FloatingParticles from "./FloatingParticles";

export default function HeroSculpture({ enter, onProgress }) {
  const group = useRef();
  const progress = useRef(0);
  const { camera, size } = useThree();

  // 📐 Breakpoints reales
  const isMobile = size.width < 768;
  const isTablet = size.width >= 768 && size.width < 1024;

  // 🎯 VALORES RESPONSIVE
  const config = useMemo(() => {
    if (isMobile) {
      return {
        baseScale: 1.2,
        idleCameraZ: 6.2,
        offsetX: 0,
        radii: [1.1, 0.9, 0.7],
      };
    }

    if (isTablet) {
      return {
        baseScale: 1.05,
        idleCameraZ: 5.4,
        offsetX: -0.4,
        radii: [1.3, 1.05, 0.85],
      };
    }

    return {
      baseScale: 1.2,
      idleCameraZ: 4.8,
      offsetX: -0.75,
      radii: [1.3, 1.08, 0.8],
    };
  }, [isMobile, isTablet]);

  useFrame(() => {
    if (!group.current) return;

    // 🔄 PROGRESO AL ENTRAR Y SALIR DEL PORTAL
    const enterSpeed = 0.0035;
    const exitSpeed = 0.02;

    const speed = enter
      ? enterSpeed
      : THREE.MathUtils.lerp(exitSpeed, 0.008, progress.current);

    progress.current = THREE.MathUtils.lerp(
      progress.current,
      enter ? 1 : 0,
      speed
    );

    if (onProgress) onProgress(progress.current);

    // 🔮 ESCULTURA
    group.current.scale.setScalar(config.baseScale + progress.current * 2.2);

    group.current.rotation.y += progress.current * 0.02;
    group.current.position.z = -progress.current * 4;

    // 🎥 CÁMARA
    camera.position.z = THREE.MathUtils.lerp(
      config.idleCameraZ,
      0.8,
      progress.current
    );
  });

  return (
    <group ref={group} position={[config.offsetX, 0, 0]}>
      {/* 🌌 PARTÍCULAS */}
      <FloatingParticles count={isMobile ? 160 : 260} />

      {/* 🔮 OCTÁGONOS */}
      <OctagonWire radius={config.radii[0]} opacity={0.18} speed={0.05} />
      <OctagonWire radius={config.radii[1]} opacity={0.35} speed={0.1} />
      <OctagonWire radius={config.radii[2]} opacity={0.6} speed={0.18} />
    </group>
  );
}
