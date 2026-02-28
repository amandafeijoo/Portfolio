import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function UniverseVista({ isMobile = false }) {
  const farRef = useRef();
  const midRef = useRef();
  const nearRef = useRef();
  const bandRef = useRef();
  const darkDustRef = useRef();
  const wireSphereRef = useRef();
  const orbitRingRef = useRef();

  /* =========================
     🌟 STAR GENERATOR
  ========================= */

  function generateStars(count, spread, depth) {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
      arr[i * 3 + 2] = -Math.random() * depth;
    }
    return arr;
  }

  const farStars = useMemo(
    () => generateStars(isMobile ? 1500 : 4000, 240, 320),
    [isMobile]
  );

  const midStars = useMemo(
    () => generateStars(isMobile ? 1000 : 2500, 180, 240),
    [isMobile]
  );

  const nearStars = useMemo(
    () => generateStars(isMobile ? 600 : 1500, 120, 160),
    [isMobile]
  );

  /* =========================
     🌌 MILKY WAY BAND
  ========================= */

  const bandStars = useMemo(() => {
    const COUNT = isMobile ? 2500 : 8000;
    const arr = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 260;
      const y = (Math.random() - 0.5) * 30;
      const z = -Math.random() * 260;

      arr[i * 3] = x;
      arr[i * 3 + 1] = y + x * 0.25;
      arr[i * 3 + 2] = z;
    }

    return arr;
  }, [isMobile]);

  /* =========================
     🌑 DARK DUST
  ========================= */

  const darkDust = useMemo(() => {
    const COUNT = isMobile ? 1000 : 3500;
    const arr = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 260;
      const y = (Math.random() - 0.5) * 18;
      const z = -Math.random() * 260;

      arr[i * 3] = x;
      arr[i * 3 + 1] = y + x * 0.25;
      arr[i * 3 + 2] = z;
    }

    return arr;
  }, [isMobile]);

  /* =========================
     🔥 NEBULA TEXTURE
  ========================= */

  const nebulaTexture = useMemo(() => {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );

    gradient.addColorStop(0, "rgba(169, 141, 95, 0.9)");
    gradient.addColorStop(0.4, "rgba(200,164,106,0.3)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  /* =========================
     🎬 ANIMATION
  ========================= */

  useFrame((_, delta) => {
    if (farRef.current) farRef.current.rotation.y += delta * 0.0015;
    if (midRef.current) midRef.current.rotation.y += delta * 0.003;
    if (nearRef.current) nearRef.current.rotation.y += delta * 0.005;

    if (bandRef.current) bandRef.current.rotation.z += delta * 0.001;
    if (darkDustRef.current) darkDustRef.current.rotation.z += delta * 0.001;

    // Wire sphere rotation
    if (wireSphereRef.current) {
      wireSphereRef.current.rotation.y += 0.003;
      wireSphereRef.current.rotation.x += 0.0015;
    }

    // Orbit ring rotation
    if (orbitRingRef.current) {
      orbitRingRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group>
      {/* 🔥 NEBULA BACKDROP */}
      <mesh position={[0, 0, -180]}>
        <planeGeometry args={[400, 250]} />
        <meshBasicMaterial
          map={nebulaTexture}
          transparent
          opacity={0.09}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 🌐 WIREFRAME SPHERE */}
      <mesh ref={wireSphereRef} position={[0, 0, -190]}>
        <sphereGeometry args={[65, 32, 32]} />
        <meshBasicMaterial
          color="#c8a46a"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* 🪐 ORBIT RING */}
      <mesh
        ref={orbitRingRef}
        rotation={[Math.PI / 2.6, 0, 0.3]}
        position={[0, 0, -190]}
      >
        <torusGeometry args={[80, 0.8, 16, 200]} />
        <meshBasicMaterial color="#c8a46a" transparent opacity={0.15} />
      </mesh>

      {/* ⭐ FAR STARS */}
      <points ref={farRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={farStars}
            count={farStars.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#b8c0cc"
          size={0.003}
          transparent
          opacity={0.5}
          depthWrite={false}
        />
      </points>

      {/* ⭐ MID STARS */}
      <points ref={midRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={midStars}
            count={midStars.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#e6e9ef"
          size={0.006}
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>

      {/* ⭐ NEAR STARS */}
      <points ref={nearRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={nearStars}
            count={nearStars.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#f4d8a8"
          size={0.015}
          transparent
          opacity={1}
          depthWrite={false}
        />
      </points>

      {/* 🌌 MILKY WAY BAND */}
      <points ref={bandRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={bandStars}
            count={bandStars.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#dfe6f5"
          size={0.005}
          transparent
          opacity={0.6}
          depthWrite={false}
        />
      </points>

      {/* 🌑 DARK DUST */}
      <points ref={darkDustRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={darkDust}
            count={darkDust.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#000000"
          size={0.08}
          transparent
          opacity={0.06}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
