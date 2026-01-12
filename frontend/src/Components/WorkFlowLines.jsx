import { useEffect, useRef } from "react";
import WorkOrbital from "./WorkOrbital";

export default function WorkFlowLines({ height = 520 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.offsetWidth;
    const h = height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    /* =========================
       CONFIGURACIÓN GEOMÉTRICA
    ========================= */

    const cx = w / 2;
    const originY = 40;
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

      ctx.strokeStyle = "rgba(255,255,255,0.85)";
      ctx.lineWidth = 1.6;
      ctx.shadowColor = "rgba(255,255,255,0.5)";
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      drawBaseLines();
      drawEnergySegment();

      progress += 0.008;
      if (progress >= 1) {
        progress = 0;
        activeLine = (activeLine + 1) % lines.length;
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, [height]);

  return (
    <div
      style={{
        position: "relative",
        height,
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* 🌌 ORBITAL ARRIBA */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <WorkOrbital />
      </div>

      {/* ✨ LÍNEAS ABAJO */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
    </div>
  );
}
