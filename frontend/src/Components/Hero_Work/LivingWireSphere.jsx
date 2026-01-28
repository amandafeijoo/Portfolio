import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* =========================
   🌐 WIREFRAME SPHERE
========================= */
function WireSphere({ scrollProgress }) {
  const groupRef = useRef();

  // ---- points on sphere
  const { points, lines } = useMemo(() => {
    const pts = [];
    const connections = [];
    const count = 120;
    const radius = 1.6;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pts.push(new THREE.Vector3(x, y, z));
    }

    // connect nearby points
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 0.55) {
          connections.push(pts[i], pts[j]);
        }
      }
    }

    return { points: pts, lines: connections };
  }, []);

  // ---- geometry
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(lines);
    return geo;
  }, [lines]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.elapsedTime;
    const scroll = scrollProgress?.current ?? 0;

    // rotation + scroll
    groupRef.current.rotation.y = t * 0.15 + scroll * Math.PI * 0.6;
    groupRef.current.rotation.x = t * 0.08 + scroll * 0.4;

    // breathing scale
    const pulse = 1 + Math.sin(t * 0.9) * 0.04;
    groupRef.current.scale.setScalar(pulse + scroll * 0.35);
  });

  return (
    <group ref={groupRef}>
      {/* lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#c9b07a" transparent opacity={0.15} />
      </lineSegments>

      {/* points */}
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial
            color="rgba(201,184,138,1)"
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

/* =========================
   🧠 SCENE WRAPPER
========================= */
export default function LivingWireSphere({ scrollProgress }) {
  return (
    <div style={{ height: 880, width: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[4, 6, 4]} intensity={0.6} />

        <WireSphere scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
