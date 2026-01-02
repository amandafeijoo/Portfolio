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
       🌌 CONFIG ESFERA
    ============================ */
    const radius = 480;
    const cx = rect.width / 2;
    const cy = rect.height * 0.86;

    let tick = 0;

    /* ============================
       🌀 ROTACIÓN BASE + IMPULSO
    ============================ */
    let baseSpeed = 0.0015; // velocidad normal
    let impulse = 0; // energía extra por drag

    /* ============================
       ⭐ CREAR ESTRELLAS ESFÉRICAS
    ============================ */
    const stars = Array.from({ length: 1000 }, () => {
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
       🔄 ANIMATE
    ============================ */
    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      tick += 0.01;

      /* 🔥 APLICAR IMPULSO DESDE LAS CARDS */
      if (impulseRef?.current) {
        impulse += impulseRef.current;
        impulseRef.current = 0; // consumir impulso
      }

      // fricción → vuelve suave a la velocidad normal
      impulse *= 0.92;

      const rotationSpeed = baseSpeed + impulse;

      /* 🌍 DIBUJAR ESFERA */
      stars.forEach((star) => {
        star.theta += rotationSpeed;

        const x3d = radius * Math.sin(star.phi) * Math.cos(star.theta);
        const y3d = radius * Math.cos(star.phi);
        const z3d = radius * Math.sin(star.phi) * Math.sin(star.theta);

        const depth = (z3d + radius) / (radius * 2);
        if (depth < 0.12) return;

        const x = cx + x3d;
        const y = cy - y3d;

        const alpha = star.opacity * depth;
        const size = star.size * (0.6 + depth);

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      /* 🌫 HALO SUTIL */
      const halo = ctx.createRadialGradient(
        cx,
        cy,
        radius * 0.8,
        cx,
        cy,
        radius * 1.08
      );

      halo.addColorStop(0, "rgba(255,255,255,0)");
      halo.addColorStop(0.65, "rgba(255,255,255,0.02)");
      halo.addColorStop(0.85, "rgba(255,255,255,0.045)");
      halo.addColorStop(1, "rgba(255,255,255,0)");

      ctx.strokeStyle = halo;
      ctx.lineWidth = radius * 0.075;
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
