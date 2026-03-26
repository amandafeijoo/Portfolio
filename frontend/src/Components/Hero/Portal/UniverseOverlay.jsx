import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UniverseOverlay({ enterStage }) {
  const navigate = useNavigate();

  const isVisible = enterStage === "universe";

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 40,
        mt: { xs: 0, sm: -12 },

        pointerEvents: isVisible ? "auto" : "none",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(40px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      <Box
        sx={{
          width: "min(720px, 92vw)",
          textAlign: "center",
        }}
      >
        {/* SUBTITLE */}
        <Typography
          sx={{
            fontFamily: "Inter, system-ui",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontSize: "0.68rem",
            color: "rgba(241, 214, 145, 0.85)",
            mb: 1.5,
            mt: { xs: 0, sm: 15 },

          }}
        >
          THE PORTAL
        </Typography>

        {/* MAIN TITLE */}
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 500,
            fontSize: {
              xs: "clamp(2rem, 8vw, 2.8rem)",
              sm: "clamp(2.8rem, 6vw, 3.9rem)",
            },
            color: "rgba(248, 230, 181, 0.92)",
            lineHeight: 1.05,
            textShadow: "0 0 28px rgba(201,184,138,0.22)",
            mb: 1,
            mt: { xs: 0, sm: 1 },
          }}
        >
          Let’s build something together.
        </Typography>

        <Button
  disableRipple
  onClick={() => navigate("/contact")}
  sx={{
    position: "relative",
    isolation: "isolate",
    overflow: "visible",

    mt: 5,
    px: { xs: "24px", sm: "35px" },
    py: { xs: "10px", sm: "15px" },

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

    transition:
      "transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",

    /* 🌕 HALO EXTERNO */
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

    /* ✨ HALO INTERNO */
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

    /* 🔥 remove blue focus */
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
  LET’S CREATE
</Button>
      </Box>
    </Box>
  );
}
