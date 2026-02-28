import { Box, Typography, Button } from "@mui/material";
import TypingWords from "../Hero/TypingWords";

/* =========================
   SHARED STYLES
========================= */

const sideStyle = {
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: "#e6d3a8",
  lineHeight: 1.8,
};

const bodyStyle = {
  letterSpacing: "0.10em",
  color: "#e6d3a8",
  lineHeight: 2.1,
};

/* =========================
   COMPONENT
========================= */
export default function HeroOverlay({ onEnter, enterStage }) {
  const isZoom = enterStage === "zoom";
  const isIdle = enterStage === "idle";

  return (
    <>
      {/* ================= PORTAL MODE (solo durante zoom) ================= */}
      {isZoom && (
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
      {isIdle && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          {/* MOBILE TOP (AHORA IGUAL QUE EL BOTTOM) */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 24 },
              left: 0,
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
                ...sideStyle,
                fontSize: "0.6rem",
                opacity: 0.9,
                mt: 10,
              }}
            >
              I DESIGN & BUILD WEBSITES FOR{" "}
              <Box
                component="span"
                sx={{
                  display: { xs: "block", sm: "inline-block" },
                  minWidth: 90,
                  mt: { xs: 1, sm: 0 },
                }}
              >
                <TypingWords
                  words={["BRANDS", "STARTUPS", "FOUNDERS", "BUSINESSES"]}
                  speed={85}
                  pause={1200}
                />
              </Box>
            </Typography>
          </Box>

          {/* ================= DESKTOP SIDE TEXT ================= */}
          <Box
            sx={{
              position: "absolute",
              top: { sm: 90 },
              left: { sm: 48 },
              display: { xs: "none", sm: "block" },
              maxWidth: 240,
              opacity: 0.8,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                color: "#e6d3a8",
                lineHeight: 2,
              }}
            >
              I design & build websites for{" "}
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

          {/* ================= CENTER CONTENT ================= */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: {
                xs: "flex-start",
                md: "center",
              },
              justifyContent: "center",
              pt: {
                xs: "37vh",
                sm: "18vh",
                md: 0,
              },
              px: { xs: 3, sm: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                width: "100%",
                maxWidth: {
                  xs: 320,
                  sm: 480,
                  md: 640,
                },
              }}
            >
              {/* KICKER */}
              <Typography
                sx={{
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  fontSize: "0.65rem",
                  color: "#c9b07a",
                  opacity: 0.75,
                  display: { xs: "none", sm: "block" },
                  mb: 2,
                }}
              >
                STRATEGY · DESIGN · DEVELOPMENT
              </Typography>
              {/* MAIN TITLE */}
              <Typography
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 500,
                  fontSize: {
                    xs: "clamp(2.4rem, 9vw, 3rem)",
                    sm: "clamp(3.5rem, 6vw, 4.5rem)",
                    md: "clamp(4rem, 5vw, 5.5rem)",
                  },
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "#f4f0e8",
                  mb: 3,
                }}
              >
                <Box component="span" sx={{ opacity: 0.9 }}>
                  Webcode
                </Box>
                <Box component="span" sx={{ color: "#e8c98f" }}>
                  -Art
                </Box>
              </Typography>

              {/* SUBLINE */}
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                  maxWidth: 520,
                  mx: "auto",
                  mt: { xs: 1, sm: 8 },
                  mb: 4,
                  letterSpacing: "0.02em",
                }}
              >
                Design & development for web experiences that feel intentional,
                alive and precisely built.
              </Typography>

              <Button
                onClick={onEnter}
                sx={{
                  pointerEvents: "auto", 
                  position: "relative",
                  isolation: "isolate",
                  overflow: "visible",

                  px: { xs: "24px", sm: "27px" },
                  py: { xs: "10px", sm: "18px" },

                  fontFamily: '"Source Code Pro", monospace',
                  fontSize: { xs: "0.62rem", sm: "0.7rem" },
                  letterSpacing: { xs: "0.16em", sm: "0.25em" },
                  textTransform: "uppercase",

                  color: "#e6d5bc",
                  border: "1px solid rgba(230, 213, 188, 0.45)",
                  borderRadius: "999px",

                  background: "rgba(18, 19, 20, 0.55)",
                  backdropFilter: "blur(10px)",

                  boxShadow: `
      0 0 16px rgba(230, 213, 188, 0.25),
      0 0 48px rgba(230, 213, 188, 0.15)
    `,

                  cursor: "pointer",

                  transition:
                    "transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: { xs: -10, sm: -14 },
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle, rgba(230, 213, 188, 0.35), transparent 70%)",
                    filter: { xs: "blur(22px)", sm: "blur(26px)" },
                    opacity: 0.85,
                    zIndex: -1,
                    pointerEvents: "none",
                    transition: "opacity 0.35s ease, filter 0.35s ease",
                  },

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "999px",
                    background:
                      "radial-gradient(60% 60% at 50% 0%, rgba(230, 213, 188, 0.22), transparent 70%)",
                    opacity: 0.6,
                    pointerEvents: "none",
                  },

                  "&:hover": {
                    transform: "translateY(-2px)",
                    background: "rgba(230, 213, 188, 0.18)",
                    border: "1px solid rgba(230, 213, 188, 0.45)",
                    boxShadow: `
        0 0 28px rgba(230, 213, 188, 0.45),
        0 0 80px rgba(230, 213, 188, 0.25)
      `,
                    "&::before": {
                      opacity: 1,
                      filter: { xs: "blur(26px)", sm: "blur(30px)" },
                    },
                  },

                  "&:active": {
                    transform: "translateY(0)",
                  },

                  "&:focus": { outline: "none" },
                  "&:focus-visible": { outline: "none" },
                  "&.Mui-focusVisible": { outline: "none" },

                  "&.Mui-disabled": {
                    opacity: 0.4,
                    boxShadow: "none",
                    "&::before": { opacity: 0 },
                  },
                }}
              >
                ENTER THE PORTAL
              </Button>
            </Box>
          </Box>

          {/* MOBILE BOTTOM CENTER */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "14vh" },
              transform: "translateY(-30%)",
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
              THINK.
              <br />
              DESIGN.
              <br />
              BUID.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
