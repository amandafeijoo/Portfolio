import { useEffect, useRef } from "react";

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
    ctx.scale(dpr, dpr);

    /* =========================
       CONFIGURACIÓN GEOMÉTRICA
    ========================= */

    const cx = w / 2;
    const originY = -80;

    const lines = Array.from({ length: 7 }).map((_, i) => ({
      index: i - 3, // centro = 0
      spread: 220, // apertura inferior
      sway: 19, // curvatura suave
    }));

    let activeLine = 0;
    let progress = 0;

    /* =========================
       FUNCIÓN DE CURVA
    ========================= */

    function getPoint(t, line) {
      const openness = Math.pow(t, 2.4); // controla cómo se abren

      const x =
        cx +
        line.index * line.spread * openness +
        Math.sin(t * Math.PI) * line.sway * openness;

      const y = originY + t * (h + 140);

      return { x, y };
    }

    /* =========================
       DIBUJO LÍNEAS BASE
    ========================= */

    function drawBaseLines() {
      lines.forEach((line, index) => {
        ctx.beginPath();

        for (let t = 0; t <= 1; t += 0.02) {
          const { x, y } = getPoint(t, line);
          if (t === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle =
          index === activeLine
            ? "rgba(255,255,255,0.28)"
            : "rgba(255,255,255,0.14)";

        ctx.lineWidth = 1;
        ctx.stroke();
      });
    }

    /* =========================
       DIBUJO ENERGÍA (TRAMO)
    ========================= */

    function drawEnergySegment() {
      const line = lines[activeLine];
      const segmentLength = 0.14;
      const start = Math.max(0, progress - segmentLength);

      ctx.beginPath();

      for (let t = start; t <= progress; t += 0.01) {
        const { x, y } = getPoint(t, line);
        if (t === start) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(255,255,255,0.95)";
      ctx.lineWidth = 1.8;
      ctx.shadowColor = "rgba(255,255,255,0.6)";
      ctx.shadowBlur = 10;

      ctx.stroke();

      ctx.shadowBlur = 0;
    }

    /* =========================
       LOOP ANIMACIÓN
    ========================= */

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
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        display: "block",
      }}
    />
  );
}
