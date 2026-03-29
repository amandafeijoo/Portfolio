import { Box, Typography, Button } from "@mui/material";

/* =========================
   SHARED STYLES
========================= */

const sideStyle = {
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: "#e6d3a8",
  lineHeight: 1.8,
};

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
            px: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: {
                xs: "clamp(2.2rem, 11vw, 3.2rem)",
                sm: "clamp(4rem, 8vw, 5rem)",
              },
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textAlign: "center",
              textShadow:
                "0 0 10px rgba(0,0,0,0.35), 0 0 22px rgba(200,164,106,0.18)",
            }}
          >
            <Box component="span" sx={{ color: "#f4efe6" }}>
              Webcode-
            </Box>

            <Box
              component="span"
              sx={{
                color: "#e7c98f",
                textShadow: `
        0 1px 0 rgba(0,0,0,0.28),
        0 0 10px rgba(20,20,20,0.22)
      `,
              }}
            >
              Art
            </Box>
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
          {/* ================= MOBILE TOP ================= */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 0, sm: 24 },
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
                fontSize: "0.56rem",
                opacity: 0.92,
                mt: 9,
                textShadow: "0 0 10px rgba(0,0,0,0.38)",
              }}
            >
              WEB DESIGN · DEVELOPMENT · CREATIVE
            </Typography>
          </Box>

          {/* ================= DESKTOP SIDE TEXT ================= */}
          <Box
            sx={{
              position: "absolute",
              top: { sm: 90, md: 50, xl: 40 },
              left: { sm: 48 },
              display: { xs: "none", sm: "block" },
              maxWidth: 240,
              opacity: 0.88,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.73rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#e6d3a8",
                lineHeight: 1.9,
                textShadow: "0 0 10px rgba(0,0,0,0.32)",
              }}
            >
              Websites designed
              <br />
              to connect,
              <br />
              to engage and grow.
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
                xs: "31vh",
                sm: "18vh",
                md: 0,
              },
              px: { xs: 2.5, sm: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                width: "100%",
                maxWidth: {
                  xs: 320,
                  sm: 520,
                  md: 760,
                },
                position: "relative",
                zIndex: 2,

                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  top: { xs: "52%", sm: "54%" },
                  transform: "translate(-50%, -50%)",
                  width: { xs: "118%", sm: "120%", md: "125%" },
                  height: { xs: "108%", sm: "118%", md: "125%" },
                  background: `
                    radial-gradient(
                      circle,
                      rgba(8, 8, 8, 0.40) 0%,
                      rgba(8, 8, 8, 0.24) 34%,
                      rgba(8, 8, 8, 0.10) 58%,
                      rgba(8, 8, 8, 0) 80%
                    )
                  `,
                  filter: { xs: "blur(8px)", sm: "blur(10px)" },
                  zIndex: -1,
                  pointerEvents: "none",
                },
              }}
            >
              {/* KICKER */}
              <Typography
                sx={{
                  letterSpacing: { xs: "0.24em", sm: "0.35em" },
                  textTransform: "uppercase",
                  fontSize: { xs: "0.52rem", sm: "0.65rem" },
                  color: "#d5ba86",
                  opacity: 0.92,
                  display: { xs: "none", sm: "block" },
                  mb: { xs: 3.5, sm: 2 },
                  textShadow: "0 0 10px rgba(0,0,0,0.45)",
                  px: { xs: 1, sm: 0 },
                }}
              >
                STRATEGY · DESIGN · DEVELOPMENT
              </Typography>

              {/* MAIN TITLE */}
              <Typography
                component="h1"
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 500,
                  fontSize: {
                    xs: "1.7rem",
                    sm: "3rem",
                    lg: "3.2rem",
                    xl: "4rem",
                  },
                  lineHeight: {
                    xs: 1.07,
                    sm: 1.06,
                    md: 1.04,
                    lg: 1.02,
                  },
                  letterSpacing: "-0.03em",
                  mb: { xs: 3, sm: 2.5, lg: 3 },
                  mt: { xs: 1, sm: 5, lg: 6 },
                  textShadow: `
      0 1px 0 rgba(0,0,0,0.35),
      0 0 12px rgba(0,0,0,0.28),
      0 0 26px rgba(0,0,0,0.22)
    `,
                  px: { xs: 0.5, sm: 0 },
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#f7f2ea",
                  }}
                >
                  Bringing ideas to life through
                </Box>

                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#e7c98f",
                    textShadow: `
        0 1px 0 rgba(0,0,0,0.28),
        0 0 10px rgba(20,20,20,0.22)
      `,
                  }}
                >
                  thoughtful design{" "}
                  <Box
                    component="br"
                    sx={{
                      display: { xs: "none", lg: "block", xl: "none" },
                    }}
                  />
                  and development.
                </Box>
              </Typography>
              {/* SUBLINE */}
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: { xs: "0.84rem", sm: "1rem", md: "1.08rem" },
                  lineHeight: { xs: 1.7, sm: 1.8, md: 1.9, xl: 4.2 },
                  maxWidth: { xs: 300, sm: 560, md: 660 },
                  mx: "auto",
                  mt: { xs: -1, sm: 5.5 },
                  mb: { xs: 1, sm: 4 },
                  letterSpacing: "0.01em",
                  textShadow: "0 0 12px rgba(0,0,0,0.38)",
                  px: { xs: 0.3, sm: 0 },
                }}
              >
                I design and build websites that help brands connect with their
                audience and grow.
              </Typography>

              {/* BUTTON */}
              <Button
                onClick={onEnter}
                sx={{
                  pointerEvents: "auto",
                  position: "relative",
                  isolation: "isolate",
                  overflow: "visible",

                  px: { xs: "12px", sm: "25px", xl: "32px" },
                  py: { xs: "8px", sm: "16px", xl: "14px" },

                  fontFamily: '"Source Code Pro", monospace',
                  fontSize: { xs: "0.54rem", sm: "0.7rem" },
                  letterSpacing: { xs: "0.14em", sm: "0.25em" },
                  textTransform: "uppercase",

                  color: "#e6d5bc",
                  border: "1px solid rgba(230, 213, 188, 0.45)",
                  borderRadius: "999px",

                  background: "rgba(18, 19, 20, 0.62)",
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
                    inset: { xs: -6, sm: -8 },
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle, rgba(230, 213, 188, 0.16), transparent 70%)",
                    filter: { xs: "blur(12px)", sm: "blur(14px)" },
                    opacity: 0.55,
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
                    background: "rgba(230, 213, 188, 0.10)",
                    border: "1px solid rgba(230, 213, 188, 0.55)",
                    boxShadow: `
                      0 0 14px rgba(230, 213, 188, 0.22),
                      0 0 34px rgba(230, 213, 188, 0.12)
                    `,
                    "&::before": {
                      opacity: 0.7,
                      filter: { xs: "blur(14px)", sm: "blur(16px)" },
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
                Let’s Create
              </Button>
            </Box>
          </Box>
          {/* DESKTOP BOTTOM RIGHT */}
          <Box
            sx={{
              position: "absolute",
              bottom: { sm: 60, md: 120, xl: 165 },
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
                textShadow: "0 0 10px rgba(0,0,0,0.32)",
              }}
            >
              IDEA.
              <br />
              DESIGN.
              <br />
              BUILD.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
