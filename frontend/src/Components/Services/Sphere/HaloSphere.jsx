import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HaloSphere() {
  const ringRef = useRef();

  const geometry = useMemo(() => new THREE.RingGeometry(3.1, 3, 256), []);

  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.045,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    []
  );

  useFrame((_, delta) => {
    ringRef.current.rotation.y += delta * 0.02;
  });

  return <mesh ref={ringRef} geometry={geometry} material={material} />;
}
