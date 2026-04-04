import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { palette } from "./ResponsivePreview.constants";
import {
  DesktopMiniSite,
  TabletMiniSite,
  MobileMiniSite,
} from "./ResponsivePreview.parts";

const MotionBox = motion(Box);

export default function ResponsivePreview() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "26px",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${palette.shellBgTop} 0%, ${palette.shellBgBottom} 100%)`,
        border: `2px solid ${palette.shellBorder}`,
        boxShadow: `0 16px 34px ${palette.shadow}`,
      }}
    >
      <MotionBox
        animate={{ scale: [1, 1.02, 1], y: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "5%",
          left: "10%",
          width: "82%",
          height: "56%",
        }}
      >
        <DesktopMiniSite />
      </MotionBox>

      <MotionBox
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "50%",
          left: "48%",
          width: "46%",
          height: "38%",
        }}
      >
        <TabletMiniSite />
      </MotionBox>

      <MotionBox
        animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          bottom: "14%",
          left: "11%",
          width: "38%",
          height: "50%",
        }}
      >
        <MobileMiniSite />
      </MotionBox>
    </Box>
  );
}
