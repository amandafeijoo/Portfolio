import { Box, Typography } from "@mui/material";
import TypingWords from "./TypingWords";

export default function HeroText() {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      {/* ARRIBA DERECHA */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 32, sm: 80, md: 120 },
          right: { xs: 20, sm: 36, md: 48 },
          textAlign: "right",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography sx={sideStyle}>
          WEB EXPERIENCES
          <br />
          THAT FEEL ALIVE.
        </Typography>
      </Box>

      {/* ABAJO DERECHA */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 32, sm: 60, md: 80 },
          right: { xs: 20, sm: 36, md: 48 },
          textAlign: "right",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography sx={sideStyle}>
          STRATEGY.
          <br />
          DESIGN.
          <br />
          DEVELOPMENT.
        </Typography>
      </Box>

      {/* TEXTO PRINCIPAL */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "50%", md: 64 },
          top: { xs: 38, sm: "50%", md: 100 },
          transform: {
            xs: "translateX(-50%)",
            sm: "translate(-50%, -50%)",
            md: "none",
          },

          textAlign: { xs: "center", md: "left" },
          maxWidth: { xs: 320, sm: 420 },
        }}
      >
        <Typography sx={titleStyle}>WEBCODE-ART</Typography>

        <Typography sx={bodyStyle}>
          I design and build websites for{" "}
          <Box component="span" sx={{ display: "inline-block", minWidth: 90 }}>
            <TypingWords
              words={["brands", "startups", "founders", "businesses"]}
              speed={85}
              pause={1200}
            />
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

/* =========================
   STYLES
========================= */

const titleStyle = {
  fontFamily: "Playfair Display, serif",
  fontSize: {
    xs: "1.55rem",
    sm: "1.9rem",
    md: "2.3rem",
  },
  letterSpacing: {
    xs: "0.12em", 
    sm: "0.18em",
    md: "0.28em",
  },
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "clip",

  background: "rgb(148, 123, 86)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  mb: 1.5,
  textShadow: {
    xs: "0 6px 18px rgba(200,164,106,0.25)",
    md: "0 12px 40px rgba(200,164,106,0.35)",
  },
};

const sideStyle = {
  fontFamily: "Source Code Pro, monospace",
  fontSize: "0.72rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "#d6cbb8",
  opacity: 0.65,
  lineHeight: 1.8,
};

const bodyStyle = {
  fontFamily: "Source Code Pro, monospace",
  fontSize: { xs: "0.7rem", sm: "0.75rem" },
  letterSpacing: "0.14em",
  color: "#d6cbb8",
  lineHeight: 1.6,
  opacity: 0.65,
};
