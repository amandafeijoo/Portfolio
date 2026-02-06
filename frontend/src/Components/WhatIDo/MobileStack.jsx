import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Divider } from "./WhatIDo.styles"; 

export default function MobileStack({ items }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const i = Math.round(v * (items.length - 1));
      setIndex(i);
    });
  }, [items.length, scrollYProgress]);

  return (
    <div
      ref={containerRef}
      style={{
        height: `${items.length * 110}vh`,
        position: "relative",
      }}
    >
      {/* PROGRESS */}
      <div
        style={{
          position: "sticky",
          top: 24,
          textAlign: "center",
          fontFamily: "Source Code Pro, monospace",
          letterSpacing: "0.22em",
          color: "rgba(201,184,138,0.8)",
          fontSize: "0.65rem",
          zIndex: 10,
        }}
      >
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(items.length).padStart(2, "0")}
      </div>

      {/* CARD */}
      <div
        style={{
          position: "sticky",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              width: "100%",
              maxWidth: 420,
              padding: 22,
              borderRadius: 22,
              background: "rgba(18,19,20,0.72)",
              border: "1px solid rgba(201,184,138,0.28)",
              boxShadow: `
                0 0 28px rgba(201,184,138,0.18),
                0 0 90px rgba(201,184,138,0.08)
              `,
            }}
          >
            <img
              src={items[index].src}
              alt={items[index].title}
              style={{
                width: "100%",
                borderRadius: 16,
                marginBottom: 18,
              }}
            />

            <h3 style={{ color: "#F4F2ED", marginBottom: 6 }}>
              {items[index].title}
            </h3>

            <Divider />

            <p
              style={{
                color: "rgba(244,242,237,0.75)",
                lineHeight: 1.5,
                marginTop: 10,
              }}
            >
              {items[index].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
