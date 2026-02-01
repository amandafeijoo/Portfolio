import { Box, Typography, Button } from "@mui/material";
import TypingWords from "../Hero/TypingWords";

/* =========================
   SHARED STYLES
========================= */

const sideStyle = {
  fontFamily: "Source Code Pro, monospace",
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: "rgba(214, 211, 204, 0.75)",
  lineHeight: 1.8,
  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
};

const bodyStyle = {
  fontFamily: "Source Code Pro, monospace",
  letterSpacing: "0.08em",
  color: "rgba(220,215,205,0.7)",
  lineHeight: 2.1,
};

/* =========================
   COMPONENT
========================= */

export default function HeroOverlay({ onEnter }) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      {/* ======================================================
          MOBILE — TOP CENTER (above sphere)
      ====================================================== */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 24, sm: "auto" },
          left: 0,
          right: 0,
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          textAlign: "center",
          px: 3,
        }}
      >
        <Typography
          sx={{
            ...bodyStyle,
            fontSize: "0.8rem",
            maxWidth: 300,
            mt: 10,
          }}
        >
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

      {/* ======================================================
          DESKTOP / TABLET — TOP LEFT
      ====================================================== */}
      <Box
        sx={{
          position: "absolute",
          top: { sm: 80, md: 120 },
          left: { sm: 36, md: 48 },
          display: { xs: "none", sm: "block" },
          maxWidth: { sm: 220, md: 260 },
        }}
      >
        <Typography
          sx={{
            ...bodyStyle,
            fontSize: { sm: "0.85rem", md: "0.95rem" },
          }}
        >
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

      {/* ======================================================
          CENTER — TITLE + CTA (ALL DEVICES)
      ====================================================== */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 720,
            px: { xs: 2, sm: 0 },
            mt: { xs: 6, sm: 0 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: {
                xs: "clamp(2.1rem, 8vw, 2.6rem)",
                sm: "clamp(2.8rem, 6vw, 3.4rem)",
                md: "clamp(3rem, 6vw, 4.2rem)",
              },
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
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
              mb: { xs: 3, md: 4 },
              maxWidth: { xs: 280, sm: 360, md: 520 },
              mx: "auto",
            }}
          >
            Design & development for web experiences that feel alive.
          </Typography>

          <Button
            onClick={onEnter}
            sx={{
              pointerEvents: "auto",
              px: { xs: 3, md: 4 },
              py: { xs: 1.1, md: 1.4 },
              fontSize: { xs: "0.75rem", md: "0.8rem" },
              borderRadius: "999px",
              border: "1px solid rgba(200,164,106,0.6)",
              color: "#f5f0e8",
              letterSpacing: "0.14em",
              backdropFilter: "blur(6px)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.08)",
              },
            }}
          >
            LET’S CREATE
          </Button>
        </Box>
      </Box>

      {/* ======================================================
          MOBILE — BOTTOM CENTER (below sphere)
      ====================================================== */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 94, sm: "auto" },
          left: 0,
          right: 0,
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            ...sideStyle,
            fontSize: "0.6rem",
            lineHeight: 1.9,
          }}
        >
          STRATEGY · DESIGN · DEVELOPMENT
        </Typography>
      </Box>

      {/* ======================================================
          DESKTOP / TABLET — BOTTOM RIGHT
      ====================================================== */}
      <Box
        sx={{
          position: "absolute",
          bottom: { sm: 60, md: 80 },
          right: { sm: 36, md: 48 },
          display: { xs: "none", sm: "block" },
          textAlign: "right",
        }}
      >
        <Typography
          sx={{
            ...sideStyle,
            fontSize: { sm: "0.65rem", md: "0.7rem" },
          }}
        >
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
