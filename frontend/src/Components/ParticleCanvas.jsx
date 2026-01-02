// src/Components/ParticleRingsCanvas.jsx
import React, { useEffect, useRef } from "react";

export default function ParticleRingsCanvas({
  imageA,
  imageB,
  activation = "hoverWindow", // "hover" | "hoverWindow" | "hold"
  background = "#000",
  animate = true,
  settings = {},
  style = {},
  className = "",
}) {
  const {
    numCircles = 30,
    gapCircle = 2,
    gapDot = 2,
    fitRadius = 12,
    maxScale = 5,
  } = settings;

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const rafRef = useRef(null);

  const imgARef = useRef(null);
  const imgBRef = useRef(null);
  const imgACanvasRef = useRef(null);
  const imgADataRef = useRef(null);
  const imgBDataRef = useRef(null);

  const particlesRef = useRef([]);
  const cursorRef = useRef({ x: 9999, y: 9999 });
  const downRef = useRef(false);

  // -------- utils
  const randRange = (a, b) => a + Math.random() * (b - a);
  const mapRange = (v, inMin, inMax, outMin, outMax, clamp = false) => {
    const t = (v - inMin) / (inMax - inMin);
    const tt = clamp ? Math.max(0, Math.min(1, t)) : t;
    return outMin + (outMax - outMin) * tt;
  };
  const dpr = () => (typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);

  const makeColorInterpolator = (colA, colB) => {
    const pa = colA.match(/\d+/g).map(Number);
    const pb = colB.match(/\d+/g).map(Number);
    return (t) => {
      const r = Math.round(pa[0] + (pb[0] - pa[0]) * t);
      const g = Math.round(pa[1] + (pb[1] - pa[1]) * t);
      const b = Math.round(pa[2] + (pb[2] - pa[2]) * t);
      return `rgb(${r}, ${g}, ${b})`;
    };
  };

  class Particle {
    constructor({ x, y, radius = 10, colMap }) {
      this.x = x; this.y = y;
      this.ix = x; this.iy = y;
      this.ax = 0; this.ay = 0;
      this.vx = 0; this.vy = 0;

      this.radius = radius;
      this.scale = 1;
      this.colMap = colMap;
      this.color = colMap(0);

      this.minDist    = randRange(100, 200);
      this.pushFactor = randRange(0.01, 0.02);
      this.pullFactor = randRange(0.002, 0.006);
      this.dampFactor = randRange(0.90, 0.95);
    }
    update(cursor) {
      let dx = this.ix - this.x;
      let dy = this.iy - this.y;
      let dd = Math.hypot(dx, dy);

      this.ax = dx * this.pullFactor;
      this.ay = dy * this.pullFactor;

      this.scale = mapRange(dd, 0, 200, 1, maxScale, true);
      this.color = this.colMap(mapRange(dd, 0, 200, 0, 1, true));

      dx = this.x - cursor.x;
      dy = this.y - cursor.y;
      dd = Math.hypot(dx, dy);

      const distDelta = this.minDist - dd;
      if (dd < this.minDist && dd > 0.0001) {
        this.ax += (dx / dd) * distDelta * this.pushFactor;
        this.ay += (dy / dd) * distDelta * this.pushFactor;
      }

      this.vx += this.ax; this.vy += this.ay;
      this.vx *= this.dampFactor; this.vy *= this.dampFactor;
      this.x  += this.vx; this.y  += this.vy;
    }
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(0, 0, this.radius * this.scale, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // -------- build (a partir de las imágenes)
  const buildParticles = (w, h) => {
    const imgAData = imgADataRef.current;
    const imgBData = imgBDataRef.current;
    const imgA = imgARef.current;

    const list = [];
    let cirRadius = 0;
    let dotRadius = fitRadius;

    for (let i = 0; i < numCircles; i++) {
      const circumference = Math.PI * 2 * cirRadius;
      const numFit = i ? Math.floor(circumference / (fitRadius * 2 + gapDot)) : 1;
      const fitSlice = (Math.PI * 2) / Math.max(1, numFit);

      for (let j = 0; j < Math.max(1, numFit); j++) {
        const theta = fitSlice * j;

        let x = Math.cos(theta) * cirRadius;
        let y = Math.sin(theta) * cirRadius;

        x += w * 0.5;
        y += h * 0.5;

        const ix = Math.floor((x / w) * imgA.width);
        const iy = Math.floor((y / h) * imgA.height);
        const idx = (iy * imgA.width + ix) * 4;

        let r = imgAData[idx + 0];
        let g = imgAData[idx + 1];
        let b = imgAData[idx + 2];
        const colA = `rgb(${r}, ${g}, ${b})`;

        const radius = mapRange(r, 0, 255, 1, 12, true);

        r = imgBDataRef.current[idx + 0];
        g = imgBDataRef.current[idx + 1];
        b = imgBDataRef.current[idx + 2];
        const colB = `rgb(${r}, ${g}, ${b})`;

        const colMap = makeColorInterpolator(colA, colB);

        list.push(new Particle({ x, y, radius, colMap }));
      }

      cirRadius += fitRadius * 2 + gapCircle;
      dotRadius = (1 - easeQuadOut(i / numCircles)) * fitRadius;
    }

    particlesRef.current = list;
  };

  const easeQuadOut = (t) => 1 - (1 - t) * (1 - t);

  // -------- draw loop
  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const w = canvas.width / dpr();
    const h = canvas.height / dpr();

    ctx.fillStyle = background;
    ctx.fillRect(0, 0, w, h);

    const imgACan = imgACanvasRef.current;
    if (imgACan) ctx.drawImage(imgACan, 0, 0, w, h);

    particlesRef.current.sort((a, b) => a.scale - b.scale);

    const cursor = cursorRef.current;
    for (let i = 0; i < particlesRef.current.length; i++) {
      const p = particlesRef.current[i];
      p.update(cursor);
      p.draw(ctx);
    }

    if (animate) rafRef.current = requestAnimationFrame(draw);
  };

  // -------- resize
  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement || canvas;
    const cssW = parent.clientWidth || 800;
    const cssH = parent.clientHeight || 600;
    const ratio = dpr();

    canvas.width = Math.floor(cssW * ratio);
    canvas.height = Math.floor(cssH * ratio);
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const ctx = canvas.getContext("2d");
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctxRef.current = ctx;

    if (imgADataRef.current && imgBDataRef.current) {
      buildParticles(cssW, cssH);
    }
  };

  // -------- cargar imágenes
  useEffect(() => {
    let canceled = false;

    const loadImage = (url) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });

    (async () => {
      const [A, B] = await Promise.all([loadImage(imageA), loadImage(imageB)]);
      if (canceled) return;

      imgARef.current = A;
      imgBRef.current = B;

      const canA = document.createElement("canvas");
      canA.width = A.width;
      canA.height = A.height;
      const ctxA = canA.getContext("2d");
      ctxA.drawImage(A, 0, 0);
      imgACanvasRef.current = canA;

      const canB = document.createElement("canvas");
      canB.width = B.width;
      canB.height = B.height;
      const ctxB = canB.getContext("2d");
      ctxB.drawImage(B, 0, 0);

      imgADataRef.current = ctxA.getImageData(0, 0, A.width, A.height).data;
      imgBDataRef.current = ctxB.getImageData(0, 0, B.width, B.height).data;

      resize();
      rafRef.current = requestAnimationFrame(draw);
    })();

    const ro = new ResizeObserver(resize);
    const parent = canvasRef.current?.parentElement || canvasRef.current;
    if (parent) ro.observe(parent);

    return () => {
      canceled = true;
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageA, imageB]);

  // -------- interacción (AHORA por hover)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const getPosCanvas = (e) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    // hover sobre el canvas
    const onHoverMove = (e) => {
      const { x, y } = getPosCanvas(e);
      cursorRef.current.x = x;
      cursorRef.current.y = y;
    };
    const onLeave = () => {
      cursorRef.current.x = 9999;
      cursorRef.current.y = 9999;
    };

    // hover global (ventana completa): perfecto para usar pointer-events:none en el canvas
    const onMoveWin = (e) => onHoverMove(e);
    const onLeaveWin = () => onLeave();

    // hold (por si lo quieres más tarde)
    const onDown = (e) => {
      downRef.current = true;
      window.addEventListener("pointermove", onMoveHold);
      window.addEventListener("pointerup", onUp);
      onMoveHold(e);
    };
    const onMoveHold = (e) => {
      if (!downRef.current) return;
      const { x, y } = getPosCanvas(e);
      cursorRef.current.x = x;
      cursorRef.current.y = y;
    };
    const onUp = () => {
      downRef.current = false;
      window.removeEventListener("pointermove", onMoveHold);
      window.removeEventListener("pointerup", onUp);
      onLeave();
    };

    let cleanup = () => {};
    if (activation === "hover") {
      canvas.addEventListener("pointermove", onHoverMove);
      canvas.addEventListener("pointerleave", onLeave);
      cleanup = () => {
        canvas.removeEventListener("pointermove", onHoverMove);
        canvas.removeEventListener("pointerleave", onLeave);
      };
    } else if (activation === "hoverWindow") {
      window.addEventListener("pointermove", onMoveWin);
      window.addEventListener("pointerleave", onLeaveWin);
      cleanup = () => {
        window.removeEventListener("pointermove", onMoveWin);
        window.removeEventListener("pointerleave", onLeaveWin);
      };
    } else if (activation === "hold") {
      canvas.addEventListener("pointerdown", onDown);
      cleanup = () => {
        canvas.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMoveHold);
        window.removeEventListener("pointerup", onUp);
      };
    }

    return cleanup;
  }, [activation]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", ...style }}
      aria-hidden="true"
    />
  );
}
