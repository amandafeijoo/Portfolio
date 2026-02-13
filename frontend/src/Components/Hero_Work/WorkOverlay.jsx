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

        px: { xs: 4, sm: 2, md: 2 },
        mt: { xs: -9, md: -9 },
        mb: { xs: -20, md: -20 },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "0.65rem", sm: "0.72rem", md: "0.8rem" },
            letterSpacing: { xs: "0.32em", md: "0.45em" },
            textTransform: "uppercase",
            color: "rgba(240,201,123,0.9)",
            mb: { xs: 1.5, md: 2 },
          }}
        >
          Work
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: {
              xs: "clamp(2rem, 9vw, 2.6rem)",
              sm: "clamp(2.4rem, 7vw, 3.2rem)",
              md: "clamp(2.8rem, 6vw, 4rem)",
            },
            color: "#F4F2ED",
            lineHeight: { xs: 1.15, md: 1.1 },
          }}
        >
          Selected work
        </Typography>

        <Typography
          sx={{
            maxWidth: { xs: "100%", md: 570 },
            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
            mx: "auto",
            color: "rgba(220,215,205,0.65)",
            lineHeight: { xs: 1.6, md: 1.7 },
            mt: { xs: 6, md: 5 },
            mb: { xs: 4, md: 5 },
            textShadow: "0 0 8px rgba(220,215,205,0.25)",
          }}
        >
          A selection of projects where design, clarity and purpose come
          together.
        </Typography>

        <Button
          onClick={onEnter}
          disabled={enter}
          sx={{
            position: "relative",
            isolation: "isolate",

            /* 📐 SIZE */
            px: { xs: 3.2, sm: 4.2, md: 5 },
            py: { xs: 1.1, sm: 1.25, md: 1.4 },

            /* 🔤 TEXT */
            fontSize: { xs: "0.62rem", sm: "0.66rem", md: "0.7rem" },
            letterSpacing: { xs: "0.18em", md: "0.25em" },
            textTransform: "uppercase",

            /* 🎨 COLORS */
            color: "#e6d5bc",
            border: "1px solid rgba(230,213,188,0.45)",
            borderRadius: "999px",

            background: "rgba(18,19,20,0.55)",
            backdropFilter: "blur(10px)",

            /* 🌕 DEPTH */
            boxShadow: `
      0 0 16px rgba(230,213,188,0.25),
      0 0 48px rgba(230,213,188,0.15)
    `,

            cursor: enter ? "default" : "pointer",
            overflow: "visible",

            transition:
              "transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",

            /* 🌕 HALO EXTERNO */
            "&::before": {
              content: '""',
              position: "absolute",
              inset: { xs: -10, md: -14 },
              borderRadius: "999px",
              background:
                "radial-gradient(circle, rgba(230,213,188,0.35), transparent 70%)",
              filter: { xs: "blur(18px)", md: "blur(26px)" },
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
                "radial-gradient(60% 60% at 50% 0%, rgba(230,213,188,0.22), transparent 70%)",
              opacity: 0.6,
              pointerEvents: "none",
            },

            "&:hover": {
              transform: enter ? "none" : "translateY(-2px)",
              background: "rgba(230,213,188,0.18)",
              border: "1px solid rgba(230,213,188,0.45)",
              color: "#e6d5bc",

              boxShadow: `
        0 0 28px rgba(230,213,188,0.45),
        0 0 80px rgba(230,213,188,0.25)
      `,

              "&::before": {
                opacity: 1,
                filter: { xs: "blur(22px)", md: "blur(30px)" },
              },
            },

            "&:active": {
              transform: "translateY(0)",
            },

            /* 🚫 DISABLED */
            "&.Mui-disabled": {
              opacity: 0.4,
              boxShadow: "none",

              "&::before": {
                opacity: 0,
              },
            },
          }}
        >
          EXPLORE
        </Button>
      </Box>
    </Box>
  );
}
