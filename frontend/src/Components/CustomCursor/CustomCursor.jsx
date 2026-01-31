import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useCursor } from "../../Context/CursorContext";

/* 🔵 HALO */
const Ring = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9998;
`;

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { cursorMode } = useCursor();

  // ✅ DETECTAR TOUCH / MOBILE
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  // ❌ NO cursor en móvil / tablet
  if (isTouchDevice) return null;

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const isDrag = cursorMode === "drag";

  return (
    <Ring
      animate={{
        x: mouse.x - (isDrag ? 18 : 15),
        y: mouse.y - (isDrag ? 18 : 15),
        width: isDrag ? 42 : 12,
        height: isDrag ? 42 : 12,
        borderRadius: "50%",
        boxShadow: isDrag
          ? "0 0 0 2px rgba(255,255,255,0.35)"
          : `
              0 0 0 6px rgba(255,255,255,0.18),
              0 0 22px rgba(255,255,255,0.25)
            `,
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 18,
        mass: 0.35,
      }}
    >
      {isDrag && (
        <motion.span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            color: "rgba(255,255,255,0.75)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.05 }}
        >
          ↔
        </motion.span>
      )}
    </Ring>
  );
}
