import { useEffect, useRef } from "react";
import WorkOrbital from "./WorkOrbital";

export default function WorkFlowLines({ height = 520 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = canvas.offsetWidth;
    let h = height;

    function resize() {
      width = canvas.offsetWidth;
      canvas.width = width * dpr;
      canvas.height = h * dpr;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    /* =========================
       CONFIGURACIÓN GEOMÉTRICA
    ========================= */

    const cx = width / 2;
    const originY = 5;
    const travel = h * 0.65;

    const lines = Array.from({ length: 7 }).map((_, i) => ({
      index: i - 3,
      spread: 200,
      sway: 14,
    }));

    let activeLine = 0;
    let progress = 0;

    function getPoint(t, line) {
      const openness = Math.pow(t, 2.2);

      const x =
        cx +
        line.index * line.spread * openness +
        Math.sin(t * Math.PI) * line.sway * openness;

      const y = originY + t * travel;

      return { x, y };
    }

    function drawBaseLines() {
      lines.forEach((line, index) => {
        ctx.beginPath();

        for (let t = 0; t <= 1; t += 0.02) {
          const { x, y } = getPoint(t, line);
          t === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.strokeStyle =
          index === activeLine
            ? "rgba(255,255,255,0.22)"
            : "rgba(255,255,255,0.12)";

        ctx.lineWidth = 1;
        ctx.stroke();
      });
    }

    function drawEnergySegment() {
      const line = lines[activeLine];
      const segmentLength = 0.12;
      const start = Math.max(0, progress - segmentLength);

      ctx.beginPath();

      for (let t = start; t <= progress; t += 0.01) {
        const { x, y } = getPoint(t, line);
        t === start ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(255,255,255,1)";
      ctx.lineWidth = 1.6;
      ctx.shadowColor = "rgba(255,255,255,0.65)";
      ctx.shadowBlur = 6;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBaseLines();
      drawEnergySegment();

      progress += 0.008;
      if (progress >= 1) {
        progress = 0;
        activeLine = (activeLine + 1) % lines.length;
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [height]);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: height,
        overflow: "hidden",
      }}
    >
      {/* 🌌 ORBITAL */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "100%",
          transform: "translateX(-50%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <WorkOrbital />
      </div>

      {/* ✨ CANVAS */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />
    </section>
  );
}
