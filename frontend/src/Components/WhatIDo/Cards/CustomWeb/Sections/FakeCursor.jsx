import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function FakeCursor() {
  return (
    <MotionBox
      animate={{
        x: [0, 18, 18, 18, 0],
        y: [0, 26, 26, 26, 0],
        scale: [1, 1, 0.92, 1, 1],
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        repeatDelay: 1.4,
        ease: "easeInOut",
      }}
      sx={{
        position: "absolute",
        left: -7,
        top: -6,
        width: 22,
        height: 22,
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      <Box
        sx={{
          width: 0,
          height: 0,
          borderLeft: "10px solid #d4b072",
          borderTop: "14px solid transparent",
          borderBottom: "4px solid transparent",
          filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.28))",
          transform: "rotate(-18deg)",
        }}
      />
    </MotionBox>
  );
}
