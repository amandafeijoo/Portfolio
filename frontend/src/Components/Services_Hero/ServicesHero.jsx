import { Box, Typography } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export default function ServicesHero() {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        maxWidth: "720px",
        mx: "auto",
        px: { xs: 2, md: 3 },
        mt: { xs: -22, md: -10 },
      }}
    >
      {/* ===== KICKER ===== */}
      <Typography
        sx={{
          mb: { xs: 2.5, md: 2 },
          fontSize: { xs: "0.6rem", md: "0.8rem" },
          letterSpacing: { xs: "0.22em", md: "0.32em" },
          textTransform: "uppercase",
          color: "rgba(201,184,138,0.9)",
        }}
      >
        SERVICES
      </Typography>

      {/* ===== TITLE ===== */}
      <Typography
        component="h1"
        sx={{
          fontFamily: `"Playfair Display", serif`,
          fontWeight: 400,
          lineHeight: { xs: 1.15, md: 1.05 },
          fontSize: {
            xs: "1.3rem",
            sm: "2.2rem",
            md: "2.6rem",
          },
          letterSpacing: { xs: "0.04em", md: "0.08em" },
          color: "rgba(243, 226, 179, 0.9)",
          textShadow: `
            0 0 1px rgba(255,255,255,0.4),
            0 0 10px rgba(255,255,255,0.25),
            0 0 28px rgba(201,169,106,0.25),
            0 0 60px rgba(201,169,106,0.18)
          `,
        }}
      >
        Design-led development
        <br />
        for meaningful digital products.
      </Typography>

      {/* ===== DIVIDER ===== */}
      <Box
        sx={{
          width: { xs: 64, md: 96 },
          height: "1px",
          mx: "auto",
          my: { xs: 2.5, md: 3 },
          background: `linear-gradient(
            to right,
            transparent,
            rgba(201,169,106,0.85),
            transparent
          )`,
          boxShadow: "0 0 14px rgba(201,169,106,0.55)",
        }}
      />

      {/* ===== SUBTITLE ===== */}
      <Typography
        sx={{
          maxWidth: "520px",
          mx: "auto",
          mb: { xs: 3, md: 4 },
          fontSize: { xs: "0.5rem", md: "0.75rem" },
          letterSpacing: { xs: "0.12em", md: "0.14em" },
          lineHeight: 1.7,
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        I design and build fast, scalable and elegant web platforms — focused on
        real business needs and long-term value.
      </Typography>

      {/* ===== PILLS ROW (SOLO DESKTOP) ===== */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1.5,
        }}
      >
        {["Design & Development", "Custom Solutions", "Ongoing Support"].map(
          (label) => (
            <Box
              key={label}
              sx={{
                px: 2,
                py: 1,
                borderRadius: "999px",
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(237,231,217,0.85)",
                background: "rgba(15,15,15,0.55)",
                border: "1px solid rgba(201,169,106,0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              {label}
            </Box>
          )
        )}
      </Box>

      {/* ===== DRAG / SWIPE HINT ===== */}
      <Box
        sx={{
          mt: { xs: 2, md: 4.5 },
          px: 1.2,
          py: 0.65,
          borderRadius: "999px",
          fontSize: { xs: "0.6rem", md: "0.50rem" },
          letterSpacing: { xs: "0.19em", md: "0.16em" },
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
          border: "1px dashed rgba(253, 237, 192, 0.9)",
          pointerEvents: "none",
          display: { xs: "none", md: "inline-flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* ===== DESKTOP ===== */}
        <Box
          sx={{
            display: { xs: "none", md: "inline-flex" },
            alignItems: "center",
            gap: 0.75,
          }}
        >
          <SwapHorizIcon
            sx={{ fontSize: 26, color: "rgba(238, 218, 163, 0.9)" }}
          />
          Drag to explore
        </Box>
      </Box>
    </Box>
  );
}
