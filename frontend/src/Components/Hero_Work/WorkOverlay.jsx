import { Box, Typography, Button } from "@mui/material";

export default function WorkOverlay({ onEnter, enter }) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        px: { xs: 3, sm: 3 },
      }}
    >
      <Box sx={{ textAlign: "center", maxWidth: 760 }}>
        {/* ===== KICKER ===== */}
        <Typography
          sx={{
            mb: 2,
            fontSize: "0.65rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#c9b07a",
            opacity: 0.8,
          }}
        >
          Work
        </Typography>

        {/* ===== TITLE ===== */}
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 500,
            lineHeight: 1.08,
            fontSize: {
              xs: "clamp(1.8rem, 12vw, 2.4rem)",
              sm: "clamp(2.6rem, 6vw, 3.2rem)",
              md: "clamp(3rem, 5vw, 6rem)",
            },
            letterSpacing: "-0.02em",
            color: "#f4f0e8",
            mb: 3,
          }}
        >
          Selected{" "}
          <Box component="span" sx={{ color: "#e8c98f" }}>
            work
          </Box>
        </Typography>

        {/* ===== SUBLINE ===== */}
        <Typography
          sx={{
            maxWidth: 540,
            mx: "auto",
            mb: { xs: 3, md: 6 },
            mt: { xs: 5, md: 1 },
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Real projects built with clarity, strategy and measurable impact.
        </Typography>

        <Button
          onClick={onEnter}
          disabled={enter}
          sx={{
            position: "relative",
            isolation: "isolate",
            overflow: "visible",

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
          Explore
        </Button>
      </Box>
    </Box>
  );
}
