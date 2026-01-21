import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import SphereLines3D from "../SphereLines3D";

/* =========================
   CONFIG
========================= */
const RADIUS = 2.2;
const IMAGE_SIZE = 0.65;
const ROTATION_SPEED = 0.002;
const MAX_VIDEOS = 6;

/* =========================
   UTILS
========================= */
function shuffleArray(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* =========================
   MEDIA SPHERE
========================= */
function MediaSphere({ media }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += ROTATION_SPEED;
    }
  });

  const planes = useMemo(() => {
    // 🔥 REDUCIDO para Safari
    const count = media.length * 8;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const shuffled = shuffleArray(media);

    return Array.from({ length: count }).map((_, i) => {
      const t = i / count;
      const y = 1 - 2 * t;
      const r = Math.sqrt(1 - y * y);
      const phi = i * goldenAngle;

      return {
        position: new THREE.Vector3(
          Math.cos(phi) * r * RADIUS,
          y * RADIUS,
          Math.sin(phi) * r * RADIUS
        ),
        media: shuffled[i % shuffled.length],
      };
    });
  }, [media]);

  return (
    <group ref={groupRef}>
      {planes.map((p, i) => (
        <MediaPlane key={i} position={p.position} media={p.media} />
      ))}
    </group>
  );
}

/* =========================
   PLANO INDIVIDUAL
========================= */
function MediaPlane({ position, media }) {
  const meshRef = useRef();

  const texture = useMemo(() => {
    if (media.type === "video") {
      const video = document.createElement("video");
      video.src = media.src;
      video.crossOrigin = "anonymous";
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.play().catch(() => {});
  
      const vt = new THREE.VideoTexture(video);
      vt.colorSpace = THREE.SRGBColorSpace;
      vt.minFilter = THREE.LinearFilter;
      vt.magFilter = THREE.LinearFilter;
      vt.generateMipmaps = false;
  
      vt.flipY = false; // ✅ SOLO VIDEO (clave Safari)
  
      return vt;
    }
  
    const tex = new THREE.TextureLoader().load(media.src);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
  
    tex.flipY = true; // ✅ EXPLÍCITO para imágenes
  
    return tex;
  }, [media]);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[IMAGE_SIZE, IMAGE_SIZE]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.95}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

/* =========================
   ESCENA PRINCIPAL
========================= */
export default function SphereScene() {
  const [ready, setReady] = useState(false);

  /* ⏱️ Delay 1 frame para Safari */
  useEffect(() => {
    requestAnimationFrame(() => setReady(true));
  }, []);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const media = useMemo(() => {
    const allMedia = [
      {
        type: "image",
        src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/w_512,q_auto/logo_web_spjpxj.png",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_auto,fps_12,du_3,q_auto:low,br_400k/hero_001_fg3v1x.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_auto,fps_12,du_3,q_auto:low,br_400k/hero_10_m7j8nz.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_auto,fps_12,du_3,q_auto:low,br_400k/herotop_exhs4t.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_auto,fps_12,du_3,q_auto:low,br_400k/hero_008_wm68ux.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_auto,fps_12,du_3,q_auto:low,br_400k/hero_17_yahpcd.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_auto,fps_12,du_3,q_auto:low,br_400k/hero_video05_v2huxf.mp4",
      },
    ];

    const videos = allMedia
      .filter((m) => m.type === "video")
      .slice(0, MAX_VIDEOS);
    const images = allMedia.filter((m) => m.type === "image");

    return shuffleArray([...videos, ...images]);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]} // 🔥 CLAVE Safari
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={1} />

      {ready && <MediaSphere media={media} />}

      {!isMobile && (
        <SphereLines3D
          radius={RADIUS + 0.1}
          linesPerSide={6}
          spread={Math.PI * 0.15}
          color={new THREE.Color("rgb(214, 189, 172)")}
        />
      )}
    </Canvas>
  );
}
