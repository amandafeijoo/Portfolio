import { useState, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import {
  MenuWrapper,
  MenuItem,
  MenuDivider,
  MenuCTA,
} from "./styles/FloatingHintMenu.styles";
import FakeCursor from "./FakeCursor";

export default function FloatingHintMenu({ scale }) {
  if (!scale) return null;

  /* ============================
     ESTADO INTERNO
  ============================ */
  const [visible, setVisible] = useState(true);
  const [cursorPhase, setCursorPhase] = useState(0);

  /* ============================
     VISIBILIDAD POR SCROLL
  ============================ */
  const opacityByScroll = useTransform(
    scale,
    [1, 0.95, 0.9, 0.82, 0.78],
    [0, 0, 1, 1, 0]
  );

  const pointerEventsByScroll = useTransform(
    scale,
    [1, 0.85],
    ["auto", "none"]
  );

  /* ============================
     SECUENCIA DEL CURSOR (🔥 NUEVO)
  ============================ */
  useEffect(() => {
    if (!visible) return;

    let step = 0;
    let timeout;

    const runSequence = () => {
      setCursorPhase(0); // reset invisible

      timeout = setTimeout(() => setCursorPhase(1), 300); // aparece
      timeout = setTimeout(() => setCursorPhase(2), 700); // click fuera
      timeout = setTimeout(() => setCursorPhase(3), 1200); // mueve a CTA
      timeout = setTimeout(() => setCursorPhase(4), 1700); // click CTA

      // 🔁 REINICIA EL CICLO
      timeout = setTimeout(runSequence, 2600);
    };

    runSequence();

    return () => clearTimeout(timeout);
  }, [visible]);

  /* ============================
     CLICK → CIERRA Y REABRE
  ============================ */
  const handleClick = () => {
    setVisible(false);

    setTimeout(() => {
      setVisible(true);
    }, 220);
  };

  return (
    <motion.div
      style={{
        opacity: visible ? opacityByScroll : 0,
        pointerEvents: visible ? pointerEventsByScroll : "none",
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <MenuWrapper onClick={handleClick}>
        {/* 🔥 Cursor con fases */}
        <FakeCursor phase={cursorPhase} />

        <MenuItem>What I design</MenuItem>
        <MenuItem>What I build</MenuItem>
        <MenuItem>My process</MenuItem>
        <MenuItem>Selected work</MenuItem>

        <MenuDivider />

        <MenuCTA
          animate={{
            color:
              cursorPhase === 4
                ? "#ffffff" // 🔥 BLANCO en el click
                : "rgba(0,0,0,0.55)", // gris el resto del tiempo
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
        >
          Start a project
        </MenuCTA>
      </MenuWrapper>
    </motion.div>
  );
}
