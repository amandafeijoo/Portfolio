import { Box, Typography } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export default function ServicesHero() {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        maxWidth: 760,
        mx: "auto",
        px: { xs: 3, md: 3 },
        mt: { xs: -20, md: -10 },
      }}
    >
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
        Website Solutions
      </Typography>

      {/* ===== TITLE ===== */}
      <Typography
        component="h1"
        sx={{
          fontFamily: `"Playfair Display", serif`,
          fontWeight: 500,
          lineHeight: 1.08,
          fontSize: {
            xs: "clamp(1.8rem, 6vw, 2.3rem)",
            sm: "clamp(2.4rem, 5vw, 2.8rem)",
            md: "clamp(2.8rem, 4vw, 3.2rem)",
          },
          letterSpacing: "-0.02em",
          color: "#f4f0e8",
          mb: 3,
        }}
      >
        What I can build
        <br />
        <Box component="span" sx={{ color: "#e8c98f" }}>
          for your business.
        </Box>
      </Typography>

      {/* ===== SUBTITLE ===== */}
      <Typography
        sx={{
          maxWidth: 600,
          mx: "auto",
          mb: 4,
          fontSize: { xs: "0.9rem", md: "1rem" },
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        From elegant starter websites to more custom solutions, each build is
        designed around your goals, your audience and the way your business
        works.
      </Typography>

      {/* ===== PILLS (DESKTOP) ===== */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: 1.5,
          mb: 6,
          flexWrap: "wrap",
        }}
      >
        {["Starter", "Growth", "Custom"].map((label) => (
          <Box
            key={label}
            sx={{
              px: 2.5,
              py: 1,
              borderRadius: "999px",
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(249, 231, 189, 0.85)",
              background: "rgba(18,19,20,0.55)",
              border: "1px solid rgba(201,169,106,0.35)",
              backdropFilter: "blur(8px)",
            }}
          >
            {label}
          </Box>
        ))}
      </Box>

      {/* ===== DRAG HINT ===== */}
      <Box
        sx={{
          mt: { xs: 2, md: -1 },
          px: 1.5,
          py: 0.75,
          borderRadius: "999px",
          fontSize: "0.55rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          opacity: { md: 2, xl: 2 },
          color: "#f4efe6",
          border: "1px dashed rgba(253, 237, 192, 0.6)",
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
          gap: 1,
        }}
      >
        <SwapHorizIcon sx={{ fontSize: 20, color: "#e8c98f" }} />
        Drag to explore packages
      </Box>
    </Box>
  );
}
