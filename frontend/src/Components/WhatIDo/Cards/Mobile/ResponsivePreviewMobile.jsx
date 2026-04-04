import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { palette } from "../Responsive/ResponsivePreview.constants";
import {
  DesktopMiniSite,
  MobileMiniSite,
} from "../Responsive/ResponsivePreview.parts";

const MotionBox = motion(Box);

export default function ResponsivePreviewMobile() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 220,
        borderRadius: "24px",
        overflow: "hidden",
        background: `
          linear-gradient(
            180deg,
            ${palette.shellBgTop} 0%,
            ${palette.shellBgBottom} 100%
          )
        `,
        border: `1px solid ${palette.shellBorder}`,
        boxShadow: `
          inset 0 1px 0 ${palette.shellInset},
          0 10px 24px ${palette.shadow}
        `,
      }}
    >
      {/* DESKTOP BACK */}
      <MotionBox
        animate={{
          y: [0, -4, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "14%",
          left: "10%",
          transform: "translateX(-50%)",
          width: "78%",
          height: "74%",
          zIndex: 1,
        }}
      >
        <DesktopMiniSite />
      </MotionBox>

      {/* MOBILE FRONT */}
      <MotionBox
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "30%",
          height: "59%",
          zIndex: 2,
        }}
      >
        <MobileMiniSite />
      </MotionBox>
    </Box>
  );
}
