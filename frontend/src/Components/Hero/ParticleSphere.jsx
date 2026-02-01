import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import SphereLines3D from "./SphereLines3D";

export default function ParticleSphere({ enter }) {
  const pointsRef = useRef();
  const haloRef = useRef();
  const { mouse, camera, size } = useThree();
  const navigate = useNavigate();

  const isMobile = size.width < 768;

  const zoom = useRef(0);

  const PARTICLE_COUNT = 1800;
  const SPHERE_RADIUS = 2.4;
  const DURATION = 2.4;

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const v = new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(SPHERE_RADIUS + Math.random() * 0.1);
      arr.set([v.x, v.y, v.z], i * 3);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    const t = performance.now() * 0.001;

    if (!enter) {
      if (pointsRef.current) {
        pointsRef.current.rotation.y = t * 0.06;
        pointsRef.current.rotation.x = mouse.y * 0.22;
        pointsRef.current.rotation.z = mouse.x * 0.22;
      }
      if (haloRef.current) {
        haloRef.current.rotation.y = t * 0.025;
      }
      return;
    }

    zoom.current = Math.min(zoom.current + delta / DURATION, 1);

    camera.position.z = THREE.MathUtils.lerp(6, 0.35, zoom.current);

    if (pointsRef.current) {
      pointsRef.current.scale.setScalar(1 + zoom.current * 2.3);
    }
    if (haloRef.current) {
      haloRef.current.scale.setScalar(2.2 + zoom.current * 3.0);
    }

    if (zoom.current >= 1) {
      navigate("/contactpage");
    }
  });

  return (
    <group>
      {/* 👇 SOLO DESKTOP / TABLET */}
      {!isMobile && (
        <group position={[0, 0, -0.6]} renderOrder={0}>
          <SphereLines3D />
        </group>
      )}

      <mesh ref={haloRef} scale={2.6} renderOrder={1}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color="#e6d5bc"
          transparent
          opacity={0.18}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      <points ref={pointsRef} renderOrder={2}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={PARTICLE_COUNT}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#e6d5bc"
          size={0.014}
          sizeAttenuation
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
