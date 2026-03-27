import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function StarsSphere({ impulseRef }) {
  const groupRef = useRef();
  const starsRef = useRef();
  const coreRef = useRef();
  const glowRef = useRef();
  const ringRef = useRef();
  const impulse = useRef(0);

  const { size } = useThree();
  const isMobile = size.width < 768;

  const STAR_COUNT = isMobile ? 350 : 500;
  const RADIUS = 2.4;

  const coreSpeedX = 0.08;
  const coreSpeedY = 0.05;

  /* ============================
     ⭐ STAR POSITIONS
  ============================ */
  const starPositions = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      const u = Math.random();
      const v = Math.random();

      const phi = Math.acos(2 * Math.pow(u, 0.75) - 1);
      const theta = 2 * Math.PI * v;

      positions[i * 3] = RADIUS * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = RADIUS * Math.cos(phi);
      positions[i * 3 + 2] = RADIUS * Math.sin(phi) * Math.sin(theta);
    }

    return positions;
  }, [STAR_COUNT]);

  /* ============================
     🎨 STAR COLORS
  ============================ */
  const starColors = useMemo(() => {
    const palette = [
      new THREE.Color("#fff6dc"), // warm white
      new THREE.Color("#f0d892"), // soft gold
      new THREE.Color("#d8dfeb"), // cool light
      new THREE.Color("#8fa8c9"), // blue-gray
    ];

    const colors = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return colors;
  }, [STAR_COUNT]);

  /* ============================
     ✨ STAR SIZES
  ============================ */
  const starSizes = useMemo(() => {
    const sizes = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      sizes[i] = isMobile
        ? 0.008 + Math.random() * 0.008
        : 0.01 + Math.random() * 0.01;
    }

    return sizes;
  }, [STAR_COUNT, isMobile]);

  /* ============================
     ⏱ TWINKLE OFFSETS
  ============================ */
  const twinkleOffsets = useMemo(() => {
    const offsets = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      offsets[i] = Math.random() * Math.PI * 2;
    }

    return offsets;
  }, [STAR_COUNT]);

  /* ============================
     🧱 STAR GEOMETRY
  ============================ */
  const starGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    geometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));
    return geometry;
  }, [starPositions, starColors, starSizes]);

  /* ============================
     ✨ STAR MATERIAL
  ============================ */
  const starMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      size: isMobile ? 0.014 : 0.016,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
  }, [isMobile]);

  /* ============================
     🌀 ANIMATION
  ============================ */
  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;

    if (impulseRef?.current) {
      impulse.current += impulseRef.current;
      impulseRef.current = 0;
    }

    impulse.current *= 0.92;

    const baseSpeed = 0.02 * delta;
    const speed = baseSpeed + impulse.current;

    if (groupRef.current) {
      groupRef.current.rotation.y += speed;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x += coreSpeedX * delta;
      coreRef.current.rotation.y += coreSpeedY * delta;

      const pulse = 1 + Math.sin(t * 1.8) * 0.03 + Math.min(impulse.current * 2.5, 0.08);
      coreRef.current.scale.setScalar(pulse);
    }

    if (glowRef.current) {
      const glowPulse =
        1 + Math.sin(t * 1.6 + 0.8) * 0.05 + Math.min(impulse.current * 3, 0.12);
      glowRef.current.scale.setScalar(glowPulse);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z -= 0.3 * delta;
      ringRef.current.rotation.x = Math.sin(t * 0.4) * 0.08;
    }

    if (starsRef.current) {
      const pulseOpacity =
        0.82 + Math.sin(t * 1.4) * 0.08 + Math.min(impulse.current * 1.2, 0.12);
      starsRef.current.material.opacity = THREE.MathUtils.clamp(
        pulseOpacity,
        0.72,
        1
      );

      const starScale =
        1 + Math.sin(t * 1.2) * 0.01 + Math.min(impulse.current * 0.5, 0.04);
      starsRef.current.scale.setScalar(starScale);
    }
  });

  return (
    <group rotation={isMobile ? [0.4, 0.3, 0] : [0, 0, 0]}>
      {/* ⭐ STARS */}
      <points ref={starsRef} geometry={starGeometry} material={starMaterial} />

      {/* 💫 CORE + RING */}
      <group ref={groupRef}>
        {/* 🌕 SOFT GLOW */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[isMobile ? 3.15 : 2.85, 32, 32]} />
          <meshBasicMaterial
            color="#e9c86a"
            transparent
            opacity={0.06}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* 💎 INNER FILL */}
        <mesh>
          <sphereGeometry args={[isMobile ? 2.68 : 2.38, 24, 24]} />
          <meshBasicMaterial
            color="#8fa8c9"
            transparent
            opacity={0.08}
            depthWrite={false}
          />
        </mesh>

        {/* 💎 CORE WIREFRAME */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[isMobile ? 2.9 : 2.6, 24, 24]} />
          <meshBasicMaterial
            color="#f0d892"
            wireframe
            transparent
            opacity={isMobile ? 0.22 : 0.3}
          />
        </mesh>

        {/* 🪐 RING */}
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[isMobile ? 3.08 : 2.78, 0.018, 16, 140]} />
          <meshBasicMaterial
            color="#e7a63c"
            transparent
            opacity={0.32}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}
