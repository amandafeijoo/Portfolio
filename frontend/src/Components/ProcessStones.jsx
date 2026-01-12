import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

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

    // 🔄 SOLO las secundarias orbitan
    if (!isCenter) {
      const angle = t * speed + angleOffset;
      ref.current.position.x = Math.cos(angle) * orbitRadius;
      ref.current.position.z = Math.sin(angle) * orbitRadius;
      ref.current.position.y = Math.sin(angle * 0.6) * 0.35;
    }

    // 🌬️ pulso orgánico MUY sutil
    const pulse = 1 + Math.sin(t * 0.6) * 0.02;
    ref.current.scale.setScalar(pulse);
  });

  return (
    <group ref={ref}>
      {/* 🌑 ESFERA BASE */}
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

      {/* ✨ NÚCLEO INTERIOR — SOLO CENTRAL */}
      {isCenter && (
        <mesh>
          <sphereGeometry args={[radius * 0.18, 32, 32]} />
          <meshBasicMaterial
            color="#e6dcc8"
            transparent
            opacity={0.6}
          />
        </mesh>
      )}

      {/* ✨ HALO — SOLO ORBITALES */}
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
   🟣 PROCESS SPHERES SCENE
============================ */
export default function ProcessSpheres({ height = 900 }) {
  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height,
        zIndex: 1,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 8], fov: 50 }}
    >
      {/* 🌫️ LUZ AMBIENTE BAJA (para que exista sombra) */}
      <ambientLight intensity={0.3} />

      {/* ☀️ LUZ PRINCIPAL */}
      <pointLight position={[6, 6, 6]} intensity={1.05} />

      {/* 🌘 LUZ DIRECCIONAL — CREA LA SOMBRA TIPO ECLIPSE */}
      <directionalLight position={[2.5, 0.8, 4]} intensity={0.9} />

      {/* ✨ LUZ LATERAL (halo suave) */}
      <pointLight position={[-6, -3, 4]} intensity={0.5} />

      {/* 🌕 ESFERA CENTRAL — IDEA */}
      <SphereNode radius={1.16} isCenter />

      {/* 🪐 ESFERAS ORBITALES — CONTEXTO */}
      {Array.from({ length: 6 }).map((_, i) => (
        <SphereNode
          key={i}
          radius={0.45}
          angleOffset={(i / 6) * Math.PI * 2}
          orbitRadius={2.9}
          speed={0.22}
          hasHalo
        />
      ))}
    </Canvas>
  );
}

