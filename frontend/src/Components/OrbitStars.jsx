import { useEffect, useRef } from "react";

export default function OrbitStars({ impulseRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    /* ============================
       📐 CANVAS SETUP (RETINA)
    ============================ */
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    /* ============================
       📱 DETECT MOBILE
    ============================ */
    const isMobile = rect.width < 768;

    /* ============================
       🌌 SPHERE CONFIG
    ============================ */
    const radius = isMobile ? rect.width * 0.55 : 480;
    const cx = rect.width / 2;

    // 🔥 centro más bajo en móvil para leer el arco
    const cy = isMobile ? rect.height * 0.86 : rect.height * 0.86;

    let tick = 0;

    /* ============================
       🌀 ROTATION + IMPULSE
    ============================ */
    let baseSpeed = isMobile ? 0.0042 : 0.0015;
    let impulse = 0;

    /* ============================
       ⭐ CREATE STARS (SPHERE)
    ============================ */
    const STAR_COUNT = isMobile ? 700 : 1000;

    const stars = Array.from({ length: STAR_COUNT }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      return {
        theta,
        phi,
        size: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.5 + 0.15,
      };
    });

    let frameId;

    /* ============================
       🔄 ANIMATION LOOP
    ============================ */
    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      tick += 0.01;

      /* 🔥 IMPULSE FROM CARDS */
      if (impulseRef?.current) {
        impulse += impulseRef.current;
        impulseRef.current = 0;
      }

      impulse *= 0.92;
      const rotationSpeed = baseSpeed + impulse;

      /* 🌍 DRAW SPHERE */
      stars.forEach((star) => {
        star.theta += rotationSpeed;

        const x3d = radius * Math.sin(star.phi) * Math.cos(star.theta);
        const y3d = radius * Math.cos(star.phi);
        const z3d = radius * Math.sin(star.phi) * Math.sin(star.theta);

        const depth = (z3d + radius) / (radius * 2);
        if (depth < 0.12) return;

        const x = cx + x3d;
        const y = cy - y3d;

        // 🔥 CLAVE: definir la curvatura (terminator)
        const limb = Math.pow(depth, isMobile ? 2.6 : 1.8);
        const alpha = star.opacity * depth * limb;
        const size = star.size * (0.6 + depth);

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      /* 🌫 HALO / RIM LIGHT */
      const halo = ctx.createRadialGradient(
        cx,
        cy,
        radius * (isMobile ? 0.96 : 0.8),
        cx,
        cy,
        radius * (isMobile ? 1.02 : 1.08)
      );

      halo.addColorStop(0, "rgba(255,255,255,0)");
      halo.addColorStop(
        isMobile ? 0.6 : 0.65,
        isMobile ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)"
      );
      halo.addColorStop(
        isMobile ? 0.82 : 0.85,
        isMobile ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.045)"
      );
      halo.addColorStop(1, "rgba(255,255,255,0)");

      ctx.strokeStyle = halo;
      ctx.lineWidth = radius * (isMobile ? 0.09 : 0.075);
      ctx.beginPath();
      ctx.arc(cx, cy, radius, Math.PI, 0);
      ctx.stroke();

      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, [impulseRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
