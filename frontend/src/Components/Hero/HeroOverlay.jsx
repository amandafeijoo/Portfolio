import { Box, Typography, Button } from "@mui/material";
import TypingWords from "../Hero/TypingWords";

/* =========================
   SHARED STYLES
========================= */

const sideStyle = {
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: "rgba(214, 211, 204, 0.75)",
  lineHeight: 1.8,
};

const bodyStyle = {
  letterSpacing: "0.10em",
  color: "rgba(220,215,205,0.7)",
  lineHeight: 2.1,
};

/* =========================
   COMPONENT
========================= */

export default function HeroOverlay({ onEnter, enter }) {
  return (
    <>
      {/* ================= PORTAL MODE ================= */}
      {enter && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: {
                xs: "clamp(2rem, 10vw, 4rem)",
                sm: "clamp(4rem, 8vw, 5rem)",
              },
              letterSpacing: "0.08em",
              color: "#e6d3a8",
              textShadow:
                "0 0 10px rgba(200,164,106,0.35), 0 0 30px rgba(200,164,106,0.25)",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Webcode-Art
          </Typography>
        </Box>
      )}

      {/* ================= NORMAL HERO ================= */}
      {!enter && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          {/* MOBILE TOP */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 24 },
              left: { xs: "7%" },
              right: 0,
              display: { xs: "flex", sm: "none" },
              justifyContent: "center",
              textAlign: "center",
              px: 3,
              zIndex: 30,
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
              <Box
                component="span"
                sx={{ display: "inline-block", minWidth: 90 }}
              >
                <TypingWords
                  words={["brands", "startups", "founders", "businesses"]}
                  speed={85}
                  pause={1200}
                />
              </Box>
            </Typography>
          </Box>

          {/* DESKTOP TOP LEFT */}
          <Box
            sx={{
              position: "absolute",
              top: { sm: 80, md: 50 },
              left: { sm: 36, md: 48 },
              display: { xs: "none", sm: "block" },
              maxWidth: { sm: 220, md: 260 },
            }}
          >
            <Typography
              sx={{
                ...bodyStyle,
                fontSize: { sm: "0.85rem", md: "0.92rem" },
              }}
            >
              I design and build websites for{" "}
              <Box
                component="span"
                sx={{ display: "inline-block", minWidth: 90 }}
              >
                <TypingWords
                  words={["brands", "startups", "founders", "businesses"]}
                  speed={85}
                  pause={1200}
                />
              </Box>
            </Typography>
          </Box>

          {/* CENTER CONTENT */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: {
                    xs: "clamp(2.1rem, 8vw, 2.6rem)",
                    sm: "clamp(2.8rem, 6vw, 3.4rem)",
                    md: "clamp(3rem, 6vw, 4.2rem)",
                  },
                  color: "#e6d3a8",
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
                  color: "#f4e6d2",
                  fontSize: { xs: "0.83rem", sm: "0.95rem", md: "1rem" },
                  mt: { xs: 3, md: 5 },
                  mb: { xs: 3, md: 4 },
                  maxWidth: { xs: 280, sm: 360, md: 520 },
                  mx: "auto",
                }}
              >
                Design & development for web experiences that feel alive.
              </Typography>

              {/* 🔴 TU BOTÓN — EXACTAMENTE IGUAL */}
              <Button
                onClick={onEnter}
                sx={{
                  pointerEvents: "auto",
                  /* 🔹 MOBILE más pequeño */
                  px: { xs: 2.6, sm: 4 },
                  py: { xs: 0.9, sm: 1.4 },

                  fontSize: { xs: "0.68rem", sm: "0.8rem" },
                  letterSpacing: { xs: "0.11em", sm: "0.14em" },
                  textTransform: "uppercase",
                  color: "#f5f0e8",
                  borderRadius: "999px",
                  border: "1px solid rgba(200,164,106,0.6)",
                  background: "rgba(18,19,20,0.55)",
                  backdropFilter: "blur(10px)",
                  boxShadow:
                    "0 0 18px rgba(200,164,106,0.25), 0 0 40px rgba(200,164,106,0.15)",
                  cursor: "pointer",
                  transition:
                    "transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease, border 0.35s ease",
                  position: "relative",
                  isolation: "isolate",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: -10,
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle, rgba(200,164,106,0.35), transparent 70%)",
                    filter: "blur(20px)",
                    opacity: 0.6,
                    zIndex: -1,
                    transition: "opacity 0.35s ease, filter 0.35s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-3px)",
                    background: "rgba(200,164,106,0.18)",
                    border: "1px solid rgba(200,164,106,0.85)",
                    color: "#ffffff",
                    boxShadow:
                      "0 0 28px rgba(200,164,106,0.45), 0 0 80px rgba(200,164,106,0.3)",
                    "&::before": {
                      opacity: 1,
                      filter: "blur(28px)",
                    },
                  },
                  "&:active": {
                    transform: "translateY(0px) scale(0.98)",
                  },
                  "&:focus": { outline: "none" },
                  "&:focus-visible": { outline: "none" },
                }}
              >
                LET’S CREATE
              </Button>
            </Box>
          </Box>

          {/* MOBILE BOTTOM CENTER — FUERA DEL DESKTOP BOX */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "clamp(40px, 12vh, 100px)" },
              left: 0,
              right: 0,
              display: { xs: "flex", sm: "none" },
              justifyContent: "center",
              textAlign: "center",
              zIndex: 40,
              pointerEvents: "none",
            }}
          >
            <Typography
              sx={{
                ...sideStyle,
                fontSize: "0.6rem",
                opacity: 0.9,
              }}
            >
              STRATEGY · DESIGN · DEVELOPMENT
            </Typography>
          </Box>

          {/* DESKTOP BOTTOM RIGHT */}
          <Box
            sx={{
              position: "absolute",
              bottom: { sm: 60, md: 90 },
              right: { sm: 40, md: 30 },
              display: { xs: "none", sm: "block" },
              textAlign: "right",
              zIndex: 40,
              pointerEvents: "none",
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
      )}
    </>
  );
}
