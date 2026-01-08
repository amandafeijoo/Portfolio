import { useEffect, useRef } from "react";

export default function ProcessStones({ imageUrl, height = 900 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let w = 0,
      h = 0,
      dpr = 1;
    let raf = 0;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    const stones = [];
    let angleBase = 0;

    // ⏱️ velocidad órbita
    const ORBIT_SPEED = 0.001;

    // 🖱️ mouse
    let mouseX = -9999;
    let mouseY = -9999;

    /* =====================
       📐 RESIZE
    ===================== */
    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    /* =====================
       🪨 INIT STONES
    ===================== */
    const initStones = () => {
      stones.length = 0;

      const centerX = w * 0.5;
      const centerY = h * 0.5;

      const radiusX = w * 0.23;
      const radiusY = h * 0.25;

      const baseAngles = [-140, -80, -20, 40, 100, 160];

      baseAngles.forEach((deg) => {
        stones.push({
          baseAngle: (deg * Math.PI) / 180,
          scale: 0.55 + Math.random() * 0.25,
          selfRotation: Math.random() * 0.2 - 0.1,
          selfRotSpeed: Math.random() * 0.002 - 0.001,
          x: 0,
          y: 0,
          size: 0,
        });
      });

      stones.centerX = centerX;
      stones.centerY = centerY;
      stones.radiusX = radiusX;
      stones.radiusY = radiusY;
    };

    /* =====================
       🎨 DRAW
    ===================== */
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      angleBase += ORBIT_SPEED;

      const tilt = 0.6;

      stones.forEach((s) => {
        const angle = s.baseAngle + angleBase;
        const z = Math.sin(angle);

        const x = stones.centerX + Math.cos(angle) * stones.radiusX;
        const y = stones.centerY + Math.sin(angle) * stones.radiusY * tilt;

        const lift = z * 42;
        const depthScale = 1 + z * 0.14;

        s.selfRotation += s.selfRotSpeed;

        /* =====================
       🎨   SIZE PIEDRA
          ===================== */
        const baseSize = 120; //** TAMANO DE LA PIEDRA */
        const size = baseSize * s.scale * depthScale;
        const ratio = img.width / img.height;

        // guardar posición para hover
        s.x = x;
        s.y = y - lift;
        s.size = size;

        // 🖱️ HOVER DETECTION
        const dx = mouseX - s.x;
        const dy = mouseY - s.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isHovered = distance < size * 0.6;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.selfRotation);

        /* =========================
   🌑 PIEDRA BASE (oscura)
========================= */
        ctx.globalAlpha = 0.55;

        ctx.drawImage(img, (-size * ratio) / 2, -size / 2, size * ratio, size);

        /* =========================
   🔦 LUZ TIPO LINTERNA
========================= */
        if (isHovered) {
          // 🔆 Aclara la textura
          ctx.globalCompositeOperation = "screen";

          const lightGradient = ctx.createRadialGradient(
            dx * 0.25,
            dy * 0.25,
            size * 0.1,
            0,
            0,
            size * 0.6
          );

          lightGradient.addColorStop(0, "rgba(255,255,255,0.40)");
          lightGradient.addColorStop(0.4, "rgba(255,255,255,0.18)");
          lightGradient.addColorStop(1, "rgba(255,255,255,0)");

          ctx.fillStyle = lightGradient;
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();

          ctx.globalCompositeOperation = "source-over";

          // ✨ Micro halo MUY sutil
          ctx.shadowColor = "rgba(255,255,255,0.25)";
          ctx.shadowBlur = 12;
        }

        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    };

    /* =====================
       🖱️ MOUSE EVENTS
    ===================== */
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    /* =====================
       🚀 INIT
    ===================== */
    const handleResize = () => {
      resize();
      initStones();
    };

    img.onload = () => {
      handleResize();
      draw();
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [imageUrl]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height,
        pointerEvents: "auto",
        zIndex: 1,
      }}
    />
  );
}
