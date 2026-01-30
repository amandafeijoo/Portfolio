import { Box, Typography, Button } from "@mui/material";
import TypingWords from "../Hero/TypingWords";

const sideStyle = {
  fontFamily: "Source Code Pro, monospace",
  fontSize: "0.7rem",
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: "rgba(214, 211, 204, 0.75)",
  lineHeight: 1.8,
  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
};
const bodyStyle = {
  fontFamily: "Source Code Pro, monospace",
  fontSize: "0.95rem",
  letterSpacing: "0.08em",
  color: "rgba(220,215,205,0.7)",
  lineHeight: 2.1,
  maxWidth: 260,
};

export default function HeroOverlay({ onEnter, enter }) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      {/* =========================
    ARRIBA IZQUIERDA
========================= */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 32, sm: 80, md: 120 },
          left: { xs: 20, sm: 36, md: 48 },
          display: { xs: "none", sm: "block" },
          textAlign: "left",
        }}
      >
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

      {/* =========================
          CENTRO
      ========================= */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: 720 }}>
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(3rem, 6vw, 4.2rem)",
              color: "rgba(241, 238, 232, 0.75)",
              mb: 2,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: "-60%",
                background:
                  "radial-gradient(circle, rgba(201,184,138,0.15), transparent 70%)",
                filter: "blur(60px)",
                zIndex: -1,
              },
            }}
          >
            Webcode-Art
          </Typography>

          <Typography
            sx={{
              color: "rgba(214, 211, 204, 0.75)",
              fontSize: "1rem",
              mb: 4,
            }}
          >
            Design & development for web experiences that feel alive.
          </Typography>

          <Button
            onClick={onEnter}
            sx={{
              pointerEvents: "auto",
              px: 4,
              py: 1.4,
              borderRadius: "999px",
              border: "1px solid rgba(200,164,106,0.6)",
              color: "#f5f0e8",
              letterSpacing: "0.14em",
                backdropFilter: "blur(6px)",
                "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(200,164,106,0.6)",
                    },
            }}
          >
            LET’S CREATE
          </Button>
        </Box>
      </Box>

      {/* =========================
          ABAJO DERECHA
      ========================= */}
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
    </Box>
  );
}
