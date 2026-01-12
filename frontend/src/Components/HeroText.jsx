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
      {/* Arriba derecha */}
      <Box
        sx={{ position: "absolute", top: 120, right: 48, textAlign: "right" }}
      >
        <Typography sx={sideStyle}>
          WEB EXPERIENCES
          <br />
          THAT FEEL ALIVE.
        </Typography>
      </Box>

      {/* Abajo derecha */}
      <Box
        sx={{ position: "absolute", bottom: 80, right: 48, textAlign: "right" }}
      >
        <Typography sx={sideStyle}>
          STRATEGY.
          <br />
          DESIGN.
          <br />
          DEVELOPMENT.
        </Typography>
      </Box>

      {/* Texto principal */}
      <Box sx={{ position: "absolute", left: 64, top: 100 }}>
        <Typography sx={titleStyle}>WEBCODE-ART</Typography>

        <Typography sx={bodyStyle}>
          I DESIGN AND BUILD WEBSITES FOR
          <br />
          <TypingWords
            words={["BRANDS", "STARTUPS", "FOUNDERS", "BUSINESSES"]}
            speed={85}
            pause={1200}
          />
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
  fontSize: "clamp(2.2rem, 4vw, 1.7rem)",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  background: "rgb(148, 123, 86) ",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  mb: 2,
  textShadow: `
      0 12px 40px rgba(200,164,106,0.35)
    `,
  "&:hover": {
    textShadow: `
    0 0 2px rgba(255,255,255,0.6),
    0 0 28px rgba(200,164,106,0.55),
    0 0 60px rgba(200,164,106,0.35)
  `,
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
  fontSize: "0.76rem",
  letterSpacing: "0.14em",
  color: "#d6cbb8",
  lineHeight: 1.6,
  opacity: 0.6,
};
