import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FullStackCanvasCard() {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let time = 0;

    const pulseA = { t: 0 };
    const pulseB = { t: 0.45 };

    const particles = [];

    const createParticles = (w, h) => {
      particles.length = 0;
      const count = 18;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.8 + 0.6,
          speedY: Math.random() * 0.12 + 0.04,
          alpha: Math.random() * 0.3 + 0.08,
        });
      }
    };

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles(rect.width, rect.height);
    };

    const drawRoundedRect = (x, y, w, h, r) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    const getPointOnCurve = (p0, p1, p2, t) => {
      const x =
        (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;

      const y =
        (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;

      return { x, y };
    };

    const animate = () => {
      const rect = wrapper.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      time += 0.01;

      // background glow
      const glow = ctx.createRadialGradient(
        w * 0.5,
        h * 0.45,
        0,
        w * 0.5,
        h * 0.45,
        hovered ? w * 0.42 : w * 0.34
      );
      glow.addColorStop(
        0,
        hovered ? "rgba(231,201,143,0.18)" : "rgba(231,201,143,0.11)"
      );
      glow.addColorStop(
        0.45,
        hovered ? "rgba(231,201,143,0.08)" : "rgba(231,201,143,0.05)"
      );
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // grid
      ctx.save();
      ctx.strokeStyle = "rgba(231,201,143,0.045)";
      ctx.lineWidth = 1;

      const step = 24;
      for (let x = 0; x <= w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.restore();

      // node positions
      const front = {
        x: w * 0.34,
        y: h * 0.28 + Math.sin(time * 1.3) * 3,
      };

      const back = {
        x: w * 0.64,
        y: h * 0.5 + Math.sin(time * 1.1 + 1.2) * 3,
      };

      const db = {
        x: w * 0.47,
        y: h * 0.76 + Math.sin(time * 0.9 + 2.2) * 2,
      };

      // curves
      const c1 = {
        p0: front,
        p1: { x: w * 0.54, y: h * 0.32 },
        p2: back,
      };

      const c2 = {
        p0: back,
        p1: { x: w * 0.59, y: h * 0.67 },
        p2: db,
      };

      // draw curves
      ctx.save();
      ctx.strokeStyle = hovered
        ? "rgba(231,201,143,0.42)"
        : "rgba(231,201,143,0.28)";
      ctx.lineWidth = hovered ? 2.2 : 1.6;
      ctx.shadowColor = "rgba(231,201,143,0.35)";
      ctx.shadowBlur = hovered ? 10 : 6;

      ctx.beginPath();
      ctx.moveTo(c1.p0.x, c1.p0.y);
      ctx.quadraticCurveTo(c1.p1.x, c1.p1.y, c1.p2.x, c1.p2.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(c2.p0.x, c2.p0.y);
      ctx.quadraticCurveTo(c2.p1.x, c2.p1.y, c2.p2.x, c2.p2.y);
      ctx.stroke();

      ctx.restore();

      // animated pulses
      pulseA.t += hovered ? 0.012 : 0.008;
      pulseB.t += hovered ? 0.011 : 0.0075;

      if (pulseA.t > 1) pulseA.t = 0;
      if (pulseB.t > 1) pulseB.t = 0;

      const pulse1 = getPointOnCurve(c1.p0, c1.p1, c1.p2, pulseA.t);
      const pulse2 = getPointOnCurve(c2.p0, c2.p1, c2.p2, pulseB.t);

      const drawPulse = (p, color, radius) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.restore();
      };

      drawPulse(pulse1, "rgba(231,201,143,0.95)", 4.2);
      drawPulse(pulse2, "rgba(244,239,230,0.95)", 4.2);

      // particles
      particles.forEach((particle) => {
        particle.y -= particle.speedY;
        if (particle.y < -4) {
          particle.y = h + 4;
          particle.x = Math.random() * w;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(231,201,143,${particle.alpha})`;
        ctx.shadowColor = "rgba(231,201,143,0.35)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      // node glows
      const drawNode = (node, radius, fill) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.shadowColor = fill;
        ctx.shadowBlur = hovered ? 18 : 12;
        ctx.fill();
        ctx.restore();
      };

      drawNode(front, 5.2, "rgba(244,239,230,0.95)");
      drawNode(back, 5.2, "rgba(231,201,143,0.95)");
      drawNode(db, 5.2, "rgba(244,239,230,0.92)");

      // subtle frame highlight
      ctx.save();
      drawRoundedRect(8, 8, w - 16, h - 16, 22);
      ctx.strokeStyle = hovered
        ? "rgba(231,201,143,0.16)"
        : "rgba(231,201,143,0.10)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    const ro = new ResizeObserver(() => resize());
    ro.observe(wrapper);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, [hovered]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "28px",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(12,12,12,0.96), rgba(6,6,6,0.98))",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* soft vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.28) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* overlay labels */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(244,239,230,0.78)",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "Source Code Pro, monospace",
          }}
        >
          Full-stack flow
        </div>

        <motion.div
          animate={{
            y: hovered ? -6 : 0,
            x: hovered ? -4 : 0,
            boxShadow: hovered
              ? "0 0 24px rgba(231,201,143,0.10)"
              : "0 0 10px rgba(231,201,143,0.04)",
          }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute",
            top: "20%",
            left: "14%",
            width: "42%",
            minHeight: "17%",
            borderRadius: "18px",
            padding: "14px 14px",
            border: "1px solid rgba(231,201,143,0.26)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          }}
        >
          <div
            style={{
              color: "#f4efe6",
              fontWeight: 600,
              fontSize: "0.92rem",
            }}
          >
            Front-end
          </div>
          <div
            style={{
              color: "rgba(244,239,230,0.66)",
              fontSize: "0.74rem",
              marginTop: "4px",
              lineHeight: 1.4,
            }}
          >
            UI · layout · interactions
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: hovered ? 0 : 4,
            x: hovered ? 6 : 0,
            boxShadow: hovered
              ? "0 0 24px rgba(231,201,143,0.10)"
              : "0 0 10px rgba(231,201,143,0.04)",
          }}
          transition={{ duration: 0.45 }}
          style={{
            position: "absolute",
            top: "43%",
            right: "12%",
            width: "40%",
            minHeight: "15%",
            borderRadius: "18px",
            padding: "13px 14px",
            border: "1px solid rgba(231,201,143,0.28)",
            background:
              "linear-gradient(180deg, rgba(231,201,143,0.10), rgba(255,255,255,0.02))",
          }}
        >
          <div
            style={{
              color: "#f4efe6",
              fontWeight: 600,
              fontSize: "0.88rem",
            }}
          >
            Back-end
          </div>
          <div
            style={{
              color: "rgba(244,239,230,0.66)",
              fontSize: "0.72rem",
              marginTop: "4px",
              lineHeight: 1.4,
            }}
          >
            API · logic · auth
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: hovered ? 6 : 0,
            scale: hovered ? 1.03 : 1,
          }}
          transition={{ duration: 0.45 }}
          style={{
            position: "absolute",
            bottom: "12%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "34%",
            height: "11%",
            borderRadius: "999px",
            border: "1px solid rgba(231,201,143,0.30)",
            background:
              "linear-gradient(180deg, rgba(244,239,230,0.09), rgba(255,255,255,0.02))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f4efe6",
            fontWeight: 600,
            fontSize: "0.82rem",
          }}
        >
          Database
        </motion.div>
      </div>
    </div>
  );
}
