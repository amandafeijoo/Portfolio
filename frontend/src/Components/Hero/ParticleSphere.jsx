import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import SphereLines3D from "./SphereLines3D";
import UniverseVista from "./Portal/UniverseVista";

export default function ParticleSphere({ enter, onArriveUniverse }) {
  const pointsRef = useRef();
  const haloRef = useRef();
  const zoomFinished = useRef(false);

  const { mouse, camera, size } = useThree();
  const isMobile = size.width < 768;

  const [portalOpen, setPortalOpen] = useState(false);

  const baseHaloScale = isMobile ? 2.13 : 2.48;
  const SPHERE_RADIUS = baseHaloScale * 0.96;

  const zoom = useRef(0);
  const targetRotation = useRef({ x: 0, y: 0 });

  const PARTICLE_COUNT = isMobile ? 1400 : 2200;
  const ZOOM_DURATION = 5.0;

  useEffect(() => {
    if (!enter) {
      setPortalOpen(false);
      zoom.current = 0;
      zoomFinished.current = false;
      camera.position.x = 0;
    }
  }, [enter, camera]);

  /* =========================
     PARTICLES (MIXED SYSTEM)
  ========================= */

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);

    const maxRadius = baseHaloScale;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let radius;

      if (Math.random() > 0.4) {
        radius = maxRadius * Math.cbrt(Math.random());
      } else {
        radius = maxRadius * (0.85 + Math.random() * 0.15);
      }

      const dir = new THREE.Vector3().randomDirection();
      const v = dir.multiplyScalar(radius);

      arr.set([v.x, v.y, v.z], i * 3);
    }

    return arr;
  }, [baseHaloScale, PARTICLE_COUNT]);

  /* =========================
     ANIMATION
  ========================= */

  useFrame((_, delta) => {
    const t = performance.now() * 0.001;

    /* ================= IDLE ================= */
    if (!enter) {
      const autoDriftX = Math.sin(t * 0.3) * 0.15;
      const autoDriftY = Math.cos(t * 0.25) * 0.2;

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
        pointsRef.current.scale.setScalar(1);

        pointsRef.current.material.opacity = 0.6 + Math.sin(t * 1.2) * 0.08;
      }

      camera.position.z = isMobile ? 6.8 : 6;
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.08);
      return;
    }

    /* ================= ZOOM ================= */
    if (!portalOpen) {
      if (zoom.current < 1) {
        zoom.current = Math.min(zoom.current + delta / ZOOM_DURATION, 1);

        camera.position.z = THREE.MathUtils.lerp(
          isMobile ? 6.8 : 6,
          -1.8,
          zoom.current
        );

        camera.position.x = THREE.MathUtils.lerp(0, 1.4, zoom.current);

        if (pointsRef.current) {
          pointsRef.current.rotation.y += delta * 0.6;
          pointsRef.current.rotation.x += delta * 0.15;

          pointsRef.current.scale.setScalar(1 + zoom.current * 4.0);
        }

        if (haloRef.current) {
          haloRef.current.scale.setScalar(baseHaloScale + zoom.current * 5.0);
        }

        return;
      }

      if (!zoomFinished.current) {
        zoomFinished.current = true;
        setPortalOpen(true);
        onArriveUniverse?.();
      }

      return;
    }

    /* ================= UNIVERSE MODE ================= */

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
    }

    if (haloRef.current) {
      haloRef.current.material.opacity = 0.02;
    }
  });

  return (
    <group>
      {/* LÍNEAS ESFERA */}
      {!isMobile && !portalOpen && (
        <group position={[0, 0, -0.6]}>
          <SphereLines3D />
        </group>
      )}

      {/* UNIVERSE */}
      <group position={[0, 0, -4]} visible={portalOpen}>
        <UniverseVista isMobile={isMobile} />
      </group>

      {/* HALO */}
      {!portalOpen && (
        <mesh ref={haloRef} scale={baseHaloScale}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshBasicMaterial
            color="#e6d5bc"
            transparent
            opacity={0.08}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* PARTICLES */}
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
          size={isMobile ? 0.012 : 0.014}
          sizeAttenuation
          transparent
          opacity={1.2}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
