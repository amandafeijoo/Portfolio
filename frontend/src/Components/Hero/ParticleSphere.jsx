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

  const baseHaloScale = isMobile ? 2.5 : 2.6;
  const baseGroupScale = isMobile ? 0.95 : 1;

  const zoom = useRef(0);
  const insideTime = useRef(0);

  // 🎯 NUEVO: rotación objetivo suave
  const targetRotation = useRef({ x: 0, y: 0 });

  const PARTICLE_COUNT = 1800;
  const SPHERE_RADIUS = 2.4;
  const ZOOM_DURATION = 2.6;
  const INSIDE_DURATION = 4.0;

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

    /* ───────── FASE 0 · IDLE CINEMÁTICO ───────── */
    if (!enter) {
      zoom.current = 0;
      insideTime.current = 0;

      // 🌊 Drift automático suave
      const autoDriftX = Math.sin(t * 0.3) * 0.15;
      const autoDriftY = Math.cos(t * 0.25) * 0.2;

      // 🎯 Mouse influencia real 3D
      targetRotation.current.x = autoDriftX + mouse.y * 0.9;
      targetRotation.current.y = autoDriftY + mouse.x * 1.2;

      if (pointsRef.current) {
        pointsRef.current.rotation.x = THREE.MathUtils.lerp(
          pointsRef.current.rotation.x,
          targetRotation.current.x,
          0.06
        );

        pointsRef.current.rotation.y = THREE.MathUtils.lerp(
          pointsRef.current.rotation.y,
          targetRotation.current.y,
          0.06
        );
      }

      if (haloRef.current) {
        haloRef.current.rotation.x = THREE.MathUtils.lerp(
          haloRef.current.rotation.x,
          targetRotation.current.x * 0.6,
          0.05
        );

        haloRef.current.rotation.y = THREE.MathUtils.lerp(
          haloRef.current.rotation.y,
          targetRotation.current.y * 0.6,
          0.05
        );
      }

      camera.position.z = isMobile ? 6.8 : 6;

      return;
    }

    /* ───────── FASE 1 · ZOOM ───────── */
    if (zoom.current < 1) {
      zoom.current = Math.min(zoom.current + delta / ZOOM_DURATION, 1);

      camera.position.z = THREE.MathUtils.lerp(
        isMobile ? 6.8 : 6,
        -1.6,
        zoom.current
      );

      if (pointsRef.current) {
        pointsRef.current.scale.setScalar(1 + zoom.current * 2.2);
      }

      if (haloRef.current) {
        haloRef.current.scale.setScalar(baseHaloScale + zoom.current * 3.2);
      }

      return;
    }

    /* ───────── FASE 2 · DENTRO ───────── */
    insideTime.current += delta;

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.7;
      pointsRef.current.rotation.x += delta * 0.2;
    }

    if (haloRef.current) {
      haloRef.current.rotation.y += delta * 0.25;
    }

    if (insideTime.current >= INSIDE_DURATION) {
      navigate("/contactpage");
    }
  });

  return (
    <group scale={baseGroupScale}>
      {!isMobile && (
        <group position={[0, 0, -0.6]}>
          <SphereLines3D />
        </group>
      )}

      {/* 🔥 HALO */}
      <mesh ref={haloRef} scale={baseHaloScale}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color="#e6d5bc"
          transparent
          opacity={0.18}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* ✨ PARTICULAS */}
      <points ref={pointsRef}>
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
          size={isMobile ? 0.013 : 0.014}
          sizeAttenuation
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
