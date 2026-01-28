import { Box, Typography } from "@mui/material";
import FeaturedWork from "./FeaturedWork";
import LivingWireSphere from "./LivingWireSphere";

export default function WorkSection() {
  return (
    <Box
      id="work"
      sx={{
        position: "relative",
        background: "#000",
        overflow: "hidden",
        pt: { xs: 18, md: 22 },
        pb: { xs: 22, md: 28 },
      }}
    >
      {/* 🧩 BACKGROUND */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          pointerEvents: "none",
        }}
      >
        <LivingWireSphere />
      </Box>

      {/* 🧠 HEADER */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          mb: { xs: 10, md: 10 },
          mt: { xs: 4, md: 20 },

          /* 🌟 HALO GLOBAL */
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            width: { xs: "140%", md: "80%" },
            height: { xs: "160%", md: "140%" },
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(201,184,138,0.18), transparent 70%)",
            filter: "blur(45px)",
            zIndex: -1,
            pointerEvents: "none",
            animation: "pulseGlow 6s ease-in-out infinite",
          },

          /* 🎞️ ANIMACIÓN */
          "@keyframes pulseGlow": {
            "0%": {
              opacity: 0.55,
              transform: "translate(-50%, -50%) scale(1)",
            },
            "50%": {
              opacity: 0.85,
              transform: "translate(-50%, -50%) scale(1.04)",
            },
            "100%": {
              opacity: 0.55,
              transform: "translate(-50%, -50%) scale(1)",
            },
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "0.8rem",
            letterSpacing: "0.45em",
            color: "rgba(240,201,123,0.9)",
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Work
        </Typography>

        <Typography
          sx={{
            fontSize: "clamp(2.4rem, 6vw, 3.2rem)",
            color: "#F4F2ED",
            lineHeight: 1.1,
            mb: 2,
          }}
        >
          Selected work
        </Typography>

        <Typography
          sx={{
            maxWidth: 520,
            mx: "auto",
            color: "rgba(220,215,205,0.65)",
            lineHeight: 1.7,
          }}
        >
          A selection of projects where design, clarity and purpose come
          together.
        </Typography>
      </Box>

      {/* 🎯 PROJECT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 0,
          px: { xs: 2, md: 0 },
          mt: { xs: 4, md: -10 },
        }}
      >
        <FeaturedWork />
      </Box>
    </Box>
  );
}
