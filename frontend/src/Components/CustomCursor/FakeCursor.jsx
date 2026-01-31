import { motion } from "framer-motion";
import styled from "styled-components";

const Cursor = styled(motion.div)`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(32, 32, 32, 0.95);
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.25);
  pointer-events: none;
  z-index: 2000;
`;

const ClickRing = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
`;

export default function FakeCursor({ phase = 0 }) {
  const positions = {
    0: { x: -60, y: 10, scale: 1, opacity: 0 },
    1: { x: -60, y: 10, scale: 1, opacity: 1 },
    2: { x: -60, y: 10, scale: 0.7, opacity: 1 },

    // 👉 CTA más a la derecha y más arriba
    3: { x: 95, y: 185, scale: 1, opacity: 1 },
    4: { x: 95, y: 185, scale: 0.75, opacity: 1 },
  };

  return (
    <Cursor
      initial={positions[0]}
      animate={positions[phase]}
      transition={{
        duration: phase === 3 ? 0.9 : 0.25,
        ease: "easeInOut",
      }}
    >
      {(phase === 2 || phase === 4) && (
        <ClickRing
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}
    </Cursor>
  );
}
