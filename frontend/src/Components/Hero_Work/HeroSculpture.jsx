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
        baseScale: 1.15,
        idleCameraZ: 5.6,
        offsetX: 0,
        radii: [1.5, 1.25, 1.0],
      };
    }

    if (isTablet) {
      return {
        baseScale: 1.1,
        idleCameraZ: 5.2,
        offsetX: -0.4,
        radii: [1.35, 1.1, 0.9],
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
    const enterSpeed = 0.004;
    5;
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
    group.current.position.z = -progress.current * 8;

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
      <OctagonWire
        radius={config.radii[0]}
        opacity={isMobile ? 1 : 0.62}
        speed={0.05}
        isMobile={isMobile}
        color="#8fa8c9"
        innerColor="#7f96b4"
        haloColor="#5c6f8f"
      />

      <OctagonWire
        radius={config.radii[1]}
        opacity={isMobile ? 0.9 : 0.5}
        speed={0.1}
        isMobile={isMobile}
        color="#e7a63c"
        innerColor="#d99a38"
        haloColor="#8f6a2a"
      />

      <OctagonWire
        radius={config.radii[2]}
        opacity={isMobile ? 1 : 0.62}
        speed={0.18}
        isMobile={isMobile}
        color="#e9c86a"
        innerColor="#f0d892"
        haloColor="#c9b07a"
      />
    </group>
  );
}
