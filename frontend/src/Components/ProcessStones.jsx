import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useMediaQuery } from "@mui/material";

/* ============================
   🟢 SPHERE NODE
============================ */
function SphereNode({
  radius,
  angleOffset = 0,
  orbitRadius = 0,
  speed = 0,
  isCenter = false,
  hasHalo = false,
}) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (!isCenter) {
      const angle = t * speed + angleOffset;
      ref.current.position.x = Math.cos(angle) * orbitRadius;
      ref.current.position.z = Math.sin(angle) * orbitRadius;
      ref.current.position.y = Math.sin(angle * 0.6) * 0.35;
    }

    const pulse = 1 + Math.sin(t * 0.6) * 0.02;
    ref.current.scale.setScalar(pulse);
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          color={isCenter ? "#121212" : "#2a2a2a"}
          roughness={0.6}
          metalness={0.1}
          emissive="#e6dcc8"
          emissiveIntensity={isCenter ? 0.08 : 0.22}
        />
      </mesh>

      {isCenter && (
        <mesh>
          <sphereGeometry args={[radius * 0.18, 32, 32]} />
          <meshBasicMaterial color="#e6dcc8" transparent opacity={0.6} />
        </mesh>
      )}

      {hasHalo && (
        <mesh scale={1.15}>
          <sphereGeometry args={[radius, 64, 64]} />
          <meshBasicMaterial
            color="#e8dcc8"
            transparent
            opacity={0.08}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}

/* ============================
   🟣 PROCESS SPHERES (RESPONSIVE)
============================ */
export default function ProcessSpheres() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  const config = useMemo(() => {
    if (isMobile) {
      return {
        height: 520,
        cameraZ: 6.5,
        centerRadius: 1.1,
        orbitRadius: 2.1,
        orbitSphereRadius: 0.32,
        speed: 0.18,
      };
    }

    if (isTablet) {
      return {
        height: 700,
        cameraZ: 7.2,
        centerRadius: 1.05,
        orbitRadius: 2.5,
        orbitSphereRadius: 0.38,
        speed: 0.2,
      };
    }

    return {
      height: 900,
      cameraZ: 8,
      centerRadius: 1.16,
      orbitRadius: 2.9,
      orbitSphereRadius: 0.45,
      speed: 0.22,
    };
  }, [isMobile, isTablet]);

  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: config.height,
        zIndex: 1,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, config.cameraZ], fov: 50 }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[6, 6, 6]} intensity={1.05} />
      <directionalLight position={[2.5, 0.8, 4]} intensity={0.9} />
      <pointLight position={[-6, -3, 4]} intensity={0.5} />

      {/* 🌕 CENTRO */}
      <SphereNode radius={config.centerRadius} isCenter />

      {/* 🪐 ORBITALES */}
      {Array.from({ length: 6 }).map((_, i) => (
        <SphereNode
          key={i}
          radius={config.orbitSphereRadius}
          angleOffset={(i / 6) * Math.PI * 2}
          orbitRadius={config.orbitRadius}
          speed={config.speed}
          hasHalo
        />
      ))}
    </Canvas>
  );
}
