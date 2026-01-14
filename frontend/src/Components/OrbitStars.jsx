import { useEffect, useRef } from "react";

export default function OrbitStars({ impulseRef }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let stars = [];
    let tick = 0;
    let impulse = 0;

    let radius = 0;
    let cx = 0;
    let cy = 0;
    let isMobile = false;
    let baseSpeed = 0;

    /* ============================
       🔄 RESIZE + SETUP
    ============================ */
    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      isMobile = rect.width < 768;

      radius = Math.min(
        isMobile ? rect.width * 0.55 : rect.width * 0.38,
        isMobile ? 260 : 480
      );

      cx = rect.width / 2;
      cy = rect.height * (isMobile ? 0.86 : 0.86);

      baseSpeed = isMobile ? 0.004 : 0.0015;

      const STAR_COUNT = isMobile ? 520 : 1000;

      stars = Array.from({ length: STAR_COUNT }, () => {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        return {
          theta,
          phi,
          size: Math.random() * 1.1 + 0.3,
          opacity: Math.random() * 0.45 + 0.15,
        };
      });
    };

    setup();

    /* 👂 OBSERVE RESIZE */
    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(canvas);

    /* ============================
       🎞 ANIMATION LOOP
    ============================ */
    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      tick += 0.01;

      /* 🔥 impulse from cards */
      if (impulseRef?.current) {
        impulse += impulseRef.current;
        impulseRef.current = 0;
      }

      impulse *= 0.92;
      const rotationSpeed = baseSpeed + impulse;

      /* ⭐ STARS */
      stars.forEach((star) => {
        star.theta += rotationSpeed;

        const x3d = radius * Math.sin(star.phi) * Math.cos(star.theta);
        const y3d = radius * Math.cos(star.phi);
        const z3d = radius * Math.sin(star.phi) * Math.sin(star.theta);

        const depth = (z3d + radius) / (radius * 2);
        if (depth < 0.12) return;

        const x = cx + x3d;
        const y = cy - y3d;

        const limb = Math.pow(depth, isMobile ? 2.6 : 1.8);
        const alpha = star.opacity * depth * limb;
        const size = star.size * (0.6 + depth);

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      /* 🌫 HALO */
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

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
    };
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
