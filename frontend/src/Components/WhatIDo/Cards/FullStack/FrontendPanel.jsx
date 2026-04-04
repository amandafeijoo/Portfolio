import { Box, Typography } from "@mui/material";
import { MotionBox, floatTransition } from "./FullStackPreview.motion";
import { palette } from "./FullStackPreview.constants";
import { SiteTopBar, FrontHero, FrontCardGrid } from "./FrontendPanel.parts";

export function FrontendPanel() {
  return (
    <MotionBox
      animate={{ y: [0, -2, 0] }}
      transition={floatTransition.front}
      sx={{
        borderRadius: "16px",
        background: palette.frontBg,
        border: `1px solid ${palette.frontBorder}`,
        p: 1.1,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.64rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: palette.frontTitle,
          mb: 0.8,
          fontWeight: 600,
        }}
      >
        Front-end
      </Typography>

      <Box
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          border: `1px solid ${palette.siteShellBorder}`,
          background: palette.siteShell,
        }}
      >
        <SiteTopBar />

        <Box sx={{ p: 0.8 }}>
          <FrontHero />
          <FrontCardGrid />
        </Box>
      </Box>

      <Typography
        sx={{
          mt: 0.8,
          fontSize: "0.72rem",
          color: palette.frontText,
          lineHeight: 1.45,
        }}
      >
        What your clients see and interact with.
      </Typography>
    </MotionBox>
  );
}
