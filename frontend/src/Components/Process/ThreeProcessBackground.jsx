import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* =========================
   LÍNEAS ENTRE NODOS
========================= */
function ConnectionLines({ positions }) {
  const geometry = useMemo(() => {
    const verts = [];
    const threshold = 1.2;

    for (let i = 0; i < positions.length; i += 3) {
      for (let j = i + 3; j < positions.length; j += 3) {
        const dx = positions[i] - positions[j];
        const dy = positions[i + 1] - positions[j + 1];
        const dz = positions[i + 2] - positions[j + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < threshold) {
          verts.push(
            positions[i],
            positions[i + 1],
            positions[i + 2],
            positions[j],
            positions[j + 1],
            positions[j + 2]
          );
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, [positions]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#c9b88a" transparent opacity={0.15} />
    </lineSegments>
  );
}

/* =========================
   ESTRELLAS / NODOS
========================= */
function FloatingNodes() {
  const group = useRef();

  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 120; i++) {
      arr.push(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
    }
    return new Float32Array(arr);
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geo;
  }, [positions]);

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.elapsedTime * 0.02;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.05;
  });

  return (
    <group ref={group}>
      <points geometry={geometry}>
        <pointsMaterial
          size={0.03}
          color="#c9b88a"
          transparent
          opacity={0.55}
        />
      </points>

      <ConnectionLines positions={positions} />
    </group>
  );
}

/* =========================
   CANVAS FINAL
========================= */
export default function ThreeProcessBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.6} />
      <FloatingNodes />
    </Canvas>
  );
}
