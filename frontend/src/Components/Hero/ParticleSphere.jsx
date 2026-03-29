import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import SphereLines3D from "./SphereLines3D";
import UniverseVista from "./Portal/UniverseVista";

/* =========================
   RADIAL HALO TEXTURE
========================= */
function createRadialTexture() {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );

  gradient.addColorStop(0, "rgba(255, 244, 225, 1)");
  gradient.addColorStop(0.3, "rgba(242, 218, 176, 0.9)");
  gradient.addColorStop(0.11, "rgba(230, 198, 145, 0.45)");
  gradient.addColorStop(0.2, "rgba(214, 178, 126, 0.16)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;

  return texture;
}

export default function ParticleSphere({ enter, onArriveUniverse }) {
  const pointsRef = useRef();
  const haloRef = useRef();
  const backGlowRef = useRef();
  const zoomFinished = useRef(false);

  const { mouse, camera, size } = useThree();
  const isMobile = size.width < 768;

  const [portalOpen, setPortalOpen] = useState(false);

  const baseHaloScale = isMobile ? 1.8 : 2.32;
  const zoom = useRef(0);
  const targetRotation = useRef({ x: 0, y: 0 });

  const PARTICLE_COUNT = isMobile ? 1400 : 2200;
  const ZOOM_DURATION = 5.0;

  const haloTexture = useMemo(() => createRadialTexture(), []);

  useEffect(() => {
    if (!enter) {
      setPortalOpen(false);
      zoom.current = 0;
      zoomFinished.current = false;
      camera.position.x = 0;
    }
  }, [enter, camera]);

  useEffect(() => {
    return () => {
      haloTexture.dispose();
    };
  }, [haloTexture]);

  /* =========================
     PARTICLES
  ========================= */
  const { positions, colors } = useMemo(() => {
    const positionsArr = new Float32Array(PARTICLE_COUNT * 3);
    const colorsArr = new Float32Array(PARTICLE_COUNT * 3);

    const maxRadius = baseHaloScale;

    const palette = [
      new THREE.Color("#fff6ea"),
      new THREE.Color("#f3eadb"),
      new THREE.Color("#e9d7b3"),
      new THREE.Color("#d8b97f"),
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let radius;

      if (Math.random() > 0.4) {
        radius = maxRadius * Math.cbrt(Math.random());
      } else {
        radius = maxRadius * (0.85 + Math.random() * 0.15);
      }

      const dir = new THREE.Vector3().randomDirection();
      const v = dir.multiplyScalar(radius);

      positionsArr.set([v.x, v.y, v.z], i * 3);

      const chosen =
        palette[Math.floor(Math.random() * palette.length)].clone();
      const intensity = 0.82 + Math.random() * 0.22;
      chosen.multiplyScalar(intensity);

      colorsArr.set([chosen.r, chosen.g, chosen.b], i * 3);
    }

    return {
      positions: positionsArr,
      colors: colorsArr,
    };
  }, [baseHaloScale, PARTICLE_COUNT]);

  /* =========================
     ANIMATION
  ========================= */
  useFrame((_, delta) => {
    const t = performance.now() * 0.001;

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
        pointsRef.current.material.opacity = 0.72 + Math.sin(t * 1.2) * 0.08;
      }

      if (haloRef.current) {
        haloRef.current.material.opacity = 0.05 + Math.sin(t * 1.1) * 0.008;
      }

      if (backGlowRef.current) {
        backGlowRef.current.material.opacity =
          0.42 + Math.sin(t * 0.95) * 0.035;
      }

      camera.position.z = isMobile ? 5.2 : 5.5;
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.08);
      return;
    }

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
          pointsRef.current.material.opacity = 0.9;
        }

        if (haloRef.current) {
          haloRef.current.scale.setScalar(baseHaloScale + zoom.current * 4.2);
          haloRef.current.material.opacity = THREE.MathUtils.lerp(
            0.05,
            0.018,
            zoom.current
          );
        }

        if (backGlowRef.current) {
          const zoomGlowScale = THREE.MathUtils.lerp(
            baseHaloScale * 2.55,
            baseHaloScale * 5.4,
            zoom.current
          );
          backGlowRef.current.scale.set(zoomGlowScale, zoomGlowScale, 1);
          backGlowRef.current.material.opacity = THREE.MathUtils.lerp(
            0.42,
            0.05,
            zoom.current
          );
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

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
    }

    if (haloRef.current) {
      haloRef.current.material.opacity = 0.02;
    }

    if (backGlowRef.current) {
      backGlowRef.current.material.opacity = 0.01;
    }
  });

  return (
    <group position={[0, isMobile ? 0.45 : 0, 0]}>
      {/* LÍNEAS ESFERA */}
      {!isMobile && !portalOpen && (
        <group position={[0, 0, -0.6]}>
          <SphereLines3D radius={3.55} length={11.5} />
        </group>
      )}

      {/* UNIVERSO */}
      <group position={[0, 0, -4]} visible={portalOpen}>
        <UniverseVista isMobile={isMobile} />
      </group>

      {/* HALO DIFUSO DETRÁS */}
      {!portalOpen && (
        <mesh
          ref={backGlowRef}
          position={[0, 0, -0.5]}
          scale={baseHaloScale * 2.35}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={haloTexture}
            transparent
            opacity={0.42}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      )}

      {/* HALO INTERNO MUY SUTIL */}
      {!portalOpen && (
        <mesh ref={haloRef} scale={baseHaloScale}>
          <sphereGeometry args={[1, 56, 56]} />
          <meshBasicMaterial
            color="#e6d3a8"
            transparent
            opacity={0.05}
            side={THREE.BackSide}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {/* PARTÍCULAS */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={PARTICLE_COUNT}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={colors}
            count={PARTICLE_COUNT}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          vertexColors
          size={isMobile ? 0.01 : 0.012}
          sizeAttenuation
          transparent
          opacity={0.82}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
