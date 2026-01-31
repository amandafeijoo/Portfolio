import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";

function Ring() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.18;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.15;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1, 0.28, 64, 128]} />
      <MeshTransmissionMaterial
        thickness={0.4}
        roughness={0.2}
        transmission={0.9}
        ior={1.4}
        chromaticAberration={0.03}
        backside
        color="#c9a96a"
      />
    </mesh>
  );
}

export default function BrandObject() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 3.2], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 3]} intensity={1.2} />
      <Ring />
    </Canvas>
  );
}
