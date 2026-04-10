import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function MobileOrbitalCore({ enter, onArriveUniverse }) {
  const groupRef = useRef();
  const ringARef = useRef();
  const ringBRef = useRef();
  const ringCRef = useRef();
  const particlesRef = useRef();

  const zoomRef = useRef(0);
  const zoomFinishedRef = useRef(false);

  const { camera } = useThree();

  useEffect(() => {
    if (!enter) {
      zoomRef.current = 0;
      zoomFinishedRef.current = false;

      camera.position.set(0, 0, 5.2);
      camera.fov = 42;
      camera.updateProjectionMatrix();
    }
  }, [enter, camera]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    /* =========================
       IDLE
    ========================= */
    if (!enter) {
      if (groupRef.current) {
        groupRef.current.rotation.y = t * 0.08;
        groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.04;
        groupRef.current.scale.setScalar(1);
      }

      if (ringARef.current) {
        ringARef.current.rotation.z = t * 0.18;
        ringARef.current.rotation.x = 1.15;
      }

      if (ringBRef.current) {
        ringBRef.current.rotation.z = -t * 0.14;
        ringBRef.current.rotation.y = 0.55;
      }

      if (ringCRef.current) {
        ringCRef.current.rotation.z = t * 0.1;
        ringCRef.current.rotation.x = -0.9;
        ringCRef.current.rotation.y = -0.35;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y = t * 0.015;
        particlesRef.current.rotation.x = -t * 0.008;
      }

      return;
    }

    /* =========================
       ZOOM
    ========================= */
    if (zoomRef.current < 1) {
      zoomRef.current = Math.min(zoomRef.current + delta / 3.0, 1);

      const p = zoomRef.current;
      const eased = 1 - Math.pow(1 - p, 3);

      camera.position.z = THREE.MathUtils.lerp(5.2, 13.8, eased); //**  tamano del zoom **//
      camera.position.y = THREE.MathUtils.lerp(0, 0.03, eased);
      camera.fov = THREE.MathUtils.lerp(42, 38, eased);
      camera.updateProjectionMatrix();

      if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.45;
        groupRef.current.rotation.x += delta * 0.05;
        groupRef.current.scale.setScalar(1 + eased * 0.35);
      }

      if (ringARef.current) ringARef.current.rotation.z += delta * 0.5;
      if (ringBRef.current) ringBRef.current.rotation.z -= delta * 0.4;
      if (ringCRef.current) ringCRef.current.rotation.z += delta * 0.3;

      return;
    }

    /* =========================
       FIN DEL ZOOM → CONTACT
    ========================= */
    if (!zoomFinishedRef.current) {
      zoomFinishedRef.current = true;
      onArriveUniverse?.();
    }
  });

  const particles = useMemo(() => {
    const count = 650;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 1.55 + Math.random() * 1.15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.7;
    }

    return positions;
  }, []);

  return (
    <Float speed={1} rotationIntensity={0.05} floatIntensity={0.16}>
      <group ref={groupRef} position={[0, -1.25, 0]}>
        <mesh position={[0, 0, -0.5]}>
          <circleGeometry args={[2.1, 64]} />
          <meshBasicMaterial
            color="#d8bf8a"
            transparent
            opacity={0.055}
            depthWrite={false}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[1.12, 64, 64]} />
          <meshStandardMaterial
            color="#090909"
            roughness={0.3}
            metalness={0.12}
            transparent
            opacity={0.98}
          />
        </mesh>

        <mesh scale={[1.08, 1.08, 1.08]}>
          <sphereGeometry args={[1.12, 48, 48]} />
          <meshBasicMaterial
            color="#e2c991"
            transparent
            opacity={0.04}
            depthWrite={false}
          />
        </mesh>

        <mesh ref={ringARef}>
          <torusGeometry args={[1.62, 0.012, 16, 180]} />
          <meshBasicMaterial
            color="#e8d7ad"
            transparent
            opacity={0.29}
            depthWrite={false}
          />
        </mesh>

        <mesh ref={ringBRef}>
          <torusGeometry args={[1.42, 0.01, 16, 180]} />
          <meshBasicMaterial
            color="#c8ab70"
            transparent
            opacity={0.15}
            depthWrite={false}
          />
        </mesh>

        <mesh ref={ringCRef}>
          <torusGeometry args={[1.82, 0.008, 16, 180]} />
          <meshBasicMaterial
            color="#f0dfb5"
            transparent
            opacity={0.1}
            depthWrite={false}
          />
        </mesh>

        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particles.length / 3}
              array={particles}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            color="#e8d7ad"
            size={0.014}
            transparent
            opacity={0.6}
            depthWrite={false}
            sizeAttenuation
          />
        </points>
      </group>
    </Float>
  );
}

export default function HeroSceneMobile({ enter, onArriveUniverse }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <MobileOrbitalCore enter={enter} onArriveUniverse={onArriveUniverse} />
    </Canvas>
  );
}
