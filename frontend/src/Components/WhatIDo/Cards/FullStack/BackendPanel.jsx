import { Box, Typography } from "@mui/material";
import { MotionBox, floatTransition } from "./FullStackPreview.motion";
import { palette } from "./FullStackPreview.constants";

const backendLines = [
  "Forms & bookings",
  "Payments & logic",
  "Database & automation",
];

export function BackendPanel() {
  return (
    <MotionBox
      animate={{ y: [0, -2, 0] }}
      transition={floatTransition.back}
      sx={{
        borderRadius: "16px",
        background: palette.backBg,
        border: `1px solid ${palette.backBorder}`,
        p: 1.1,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.64rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: palette.backTitle,
          mb: 0.8,
          fontWeight: 600,
        }}
      >
        Back-end
      </Typography>

      <Box
        sx={{
          borderRadius: "12px",
          background: palette.codeBg,
          border: `1px solid ${palette.codeBorder}`,
          px: 1,
          py: 0.9,
          display: "flex",
          flexDirection: "column",
          gap: 0.55,
        }}
      >
        {backendLines.map((line, i) => (
          <Box
            key={line}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.55,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: i === 1 ? palette.codeDotB : palette.codeDotA,
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Source Code Pro, monospace",
                fontSize: "0.72rem",
                color: palette.codeText,
                lineHeight: 1.4,
              }}
            >
              {line}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography
        sx={{
          mt: 0.8,
          fontSize: "0.72rem",
          color: palette.backText,
          lineHeight: 1.45,
        }}
      >
        The system that keeps everything running.
      </Typography>
    </MotionBox>
  );
}
