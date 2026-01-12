import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HaloParticles({ radius, count = 28 }) {
  const ref = useRef();

  // posiciones + velocidades individuales
  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;

      // 🔑 MÁS CERCA DEL HALO
      const r = radius * (1.12 + Math.random() * 0.06);

      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.12;
      pos[i * 3 + 2] = Math.sin(angle) * r;

      // velocidad individual
      spd[i] = 0.15 + Math.random() * 0.25;
    }

    return { positions: pos, speeds: spd };
  }, [radius, count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // rotación general del halo
    ref.current.rotation.y = t * 0.22;
    ref.current.rotation.x = t * 0.25;

    // rotación individual de partículas
    const pos = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const angle = t * speeds[i];

      const x = pos[idx];
      const z = pos[idx + 2];

      pos[idx] = x * Math.cos(angle) - z * Math.sin(angle);
      pos[idx + 2] = x * Math.sin(angle) + z * Math.cos(angle);
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.028}
        color="#f2eadb"          // 👈 MÁS CLARO QUE EL HALO
        transparent
        opacity={0.32}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}


  