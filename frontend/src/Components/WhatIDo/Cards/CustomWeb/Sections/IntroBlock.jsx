import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { palette } from "../travelLuxury.theme";

const MotionBox = motion(Box);

export default function IntroBlock() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: `linear-gradient(180deg, ${palette.sectionTop} 0%, ${palette.sectionBottom} 100%)`,
        border: `1px solid ${palette.cardBorder}`,
        p: 0.65,
        mt: 0.25,
        mb: 0.65,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.62rem",
          color: palette.navText,
          fontWeight: 700,
          mb: 0.22,
        }}
      >
        Stay somewhere unforgettable
      </Typography>

      <Typography
        sx={{
          fontSize: "0.58rem",
          color: palette.bodyText,
          lineHeight: 1.35,
          fontWeight: 500,
          maxWidth: "88%",
          mx: "auto",
          mb: 0.42,
        }}
      >
        Discover refined destinations and elegant spaces crafted for a memorable
        experience.
      </Typography>

      <MotionBox
        whileTap={{
          scale: 0.97,
          y: 1,
        }}
        sx={{
          mx: "auto",
          width: "fit-content",
          px: 0.78,
          py: 0.32,
          borderRadius: "999px",
          background: "#fffdf9",
          border: "1px solid rgba(191,163,112,0.12)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.48rem",
            color: palette.buttonText,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Explore stays
        </Typography>
      </MotionBox>
    </Box>
  );
}
