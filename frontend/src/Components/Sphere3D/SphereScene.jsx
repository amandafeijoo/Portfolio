import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import SphereLines3D from "../SphereLines3D";

/* =========================
   CONFIG
========================= */
const RADIUS = 2.2;
const IMAGE_SIZE = 0.65;
const ROTATION_SPEED = 0.0015;
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

  // Rotación global estable
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += ROTATION_SPEED;
    }
  });

  const planes = useMemo(() => {
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
   PLANO INDIVIDUAL (IMG / VIDEO)
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
      video.play();

      const vt = new THREE.VideoTexture(video);
      vt.colorSpace = THREE.SRGBColorSpace;
      vt.minFilter = THREE.LinearFilter;
      vt.magFilter = THREE.LinearFilter;
      vt.generateMipmaps = false;

      return vt;
    }

    const tex = new THREE.TextureLoader().load(media.src);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [media]);

  // Siempre miran al centro
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
  const media = useMemo(() => {
    const allMedia = [
      {
        type: "image",
        src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767899688/logo_web_spjpxj.png",
      },

      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_mp4,fps_12,du_3,q_auto:low,br_400k/hero_07video_crz7cb.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_mp4,fps_12,du_3,q_auto:low,br_400k/hero_12video_ogyq4b.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/v1767908984/hero__02video_iy2ud3.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_mp4,fps_12,du_3,q_auto:low,br_400k/hero_11video_whxuos.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_mp4,fps_12,du_3,q_auto:low,br_400k/hero_03video_zm8hp0.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dp6jrgvoz/video/upload/w_512,f_mp4,fps_12,du_3,q_auto:low,br_400k/hero_video05_v2huxf.mp4",
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
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1} />

      <MediaSphere media={media} />

      <SphereLines3D
        radius={RADIUS + 0.1}
        linesPerSide={6}
        spread={Math.PI * 0.15}
        color={new THREE.Color("rgb(214, 189, 172)")}
      />
    </Canvas>
  );
}
