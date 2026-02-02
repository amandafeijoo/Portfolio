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
              position: "relative",
              isolation: "isolate",
              pointerEvents: "auto",
              overflow: "visible",

              /* 📐 SIZE */
              px: { xs: 3.2, sm: 3.6, md: 4.2 },
              py: { xs: 1.1, sm: 1.2, md: 1.4 },

              /* 🔤 TEXT */
              fontSize: { xs: "0.68rem", sm: "0.72rem", md: "0.8rem" },
              letterSpacing: { xs: "0.12em", md: "0.14em" },
              textTransform: "uppercase",
              fontFamily: '"Source Code Pro", monospace',

              /* 🎨 COLORS */
              color: "#f5f0e8",
              borderRadius: "999px",
              border: "1px solid rgba(200,164,106,0.6)",

              background: "rgba(18,19,20,0.55)",
              backdropFilter: "blur(10px)",

              /* 🌕 DEPTH */
              boxShadow: `
      0 0 14px rgba(200,164,106,0.25),
      0 0 40px rgba(200,164,106,0.15)
    `,

              cursor: "pointer",

              transition:
                "transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",

              /* 🌕 HALO EXTERNO */
              "&::before": {
                content: '""',
                position: "absolute",
                inset: { xs: -8, md: -12 },
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(200,164,106,0.35), transparent 70%)",
                filter: { xs: "blur(16px)", md: "blur(24px)" },
                opacity: 0.85,
                zIndex: -1,
                pointerEvents: "none",
                transition: "opacity 0.35s ease, filter 0.35s ease",
              },

              /* ✨ HALO INTERNO */
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "999px",
                background:
                  "radial-gradient(60% 60% at 50% 0%, rgba(200,164,106,0.22), transparent 70%)",
                opacity: 0.6,
                pointerEvents: "none",
              },

              /* ✨ HOVER */
              "&:hover": {
                transform: "translateY(-2px)",
                background: "rgba(200,164,106,0.18)",
                border: "1px solid rgba(200,164,106,0.75)",
                color: "#fdf9f0",

                boxShadow: `
        0 0 26px rgba(200,164,106,0.45),
        0 0 70px rgba(200,164,106,0.25)
      `,

                "&::before": {
                  opacity: 1,
                  filter: { xs: "blur(20px)", md: "blur(28px)" },
                },
              },

              /* 🖱 ACTIVE */
              "&:active": {
                transform: "translateY(0)",
              },

              /* 🚫 QUITAR BORDE AZUL iOS */
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
              "&:focus-visible": {
                outline: "none",
                boxShadow: "none",
              },
              "&:active:focus": {
                outline: "none",
              },
              WebkitTapHighlightColor: "transparent",

              /* 📱 MOBILE – botón más corto */
              "@media (max-width: 520px)": {
                width: "auto",
                maxWidth: 220,
                px: 2.6,
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
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
