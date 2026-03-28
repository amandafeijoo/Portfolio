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
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontSize: "0.68rem",
            color: "rgba(244, 231, 200, 0.72)",
            mb: 1.5,
            mt: { xs: 0, sm: 15 },
            textShadow: `
              0 0 14px rgba(233, 200, 106, 0.28),
              0 0 26px rgba(231, 166, 60, 0.16),
              0 0 42px rgba(47, 168, 143, 0.08)
            `,
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
            color: "#f4e7c8",
            lineHeight: 1.05,
            mb: 1,
            mt: { xs: 0, sm: 1 },
            textShadow: `
              0 0 18px rgba(244, 231, 200, 0.22),
              0 0 38px rgba(233, 200, 106, 0.24),
              0 0 70px rgba(155, 89, 182, 0.12),
              0 0 110px rgba(47, 168, 143, 0.08)
            `,
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

            mt: 2,
            px: { xs: "22px", sm: "28px" },
            py: { xs: "7px", sm: "10px" },

            fontFamily: '"Source Code Pro", monospace',
            fontSize: { xs: "0.62rem", sm: "0.7rem" },
            letterSpacing: { xs: "0.16em", sm: "0.25em" },
            textTransform: "uppercase",

            color: "#f4e7c8",
            border: "1px solid rgba(244, 230, 191, 0.52)",
            borderRadius: "999px",

            background:
              "linear-gradient(180deg, rgba(24,22,20,0.82), rgba(10,10,12,0.72))",
            backdropFilter: "blur(12px)",

            boxShadow: `
              0 0 42px rgba(231, 166, 60, 0.16),
              0 0 72px rgba(47, 168, 143, 0.10),
              0 0 110px rgba(155, 89, 182, 0.08)
            `,

            transition:
              "transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease, border-color 0.35s ease",

            "&::before": {
              content: '""',
              position: "absolute",
              inset: { xs: -12, sm: -16 },
              borderRadius: "999px",
              background: `
                radial-gradient(circle,
                  rgba(233, 200, 106, 0.30) 0%,
                  rgba(231, 166, 60, 0.18) 24%,
                  rgba(47, 168, 143, 0.12) 48%,
                  rgba(155, 89, 182, 0.10) 68%,
                  transparent 82%)
              `,
              filter: { xs: "blur(24px)", sm: "blur(30px)" },
              opacity: 0.95,
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
                "radial-gradient(60% 60% at 50% 0%, rgba(244, 231, 200, 0.18), transparent 70%)",
              opacity: 0.7,
              pointerEvents: "none",
            },

            "&:hover": {
              transform: "translateY(-2px)",
              background:
                "linear-gradient(180deg, rgba(36,30,22,0.86), rgba(14,12,14,0.78))",
              border: "1px solid rgba(244, 231, 200, 0.72)",
              boxShadow: `
                0 0 26px rgba(233, 200, 106, 0.34),
                0 0 58px rgba(231, 166, 60, 0.24),
                0 0 94px rgba(47, 168, 143, 0.14),
                0 0 140px rgba(155, 89, 182, 0.10)
              `,
              "&::before": {
                opacity: 1,
                filter: { xs: "blur(28px)", sm: "blur(34px)" },
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
          Let’s talk
        </Button>
      </Box>
    </Box>
  );
}
