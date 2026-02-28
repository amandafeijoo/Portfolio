import { Box, Container, Typography } from "@mui/material";
import ProcessHeroBackground from "./ProcessHeroBackground";

export default function ProcessHero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        mt: { xs: 7, md: -10 },
      }}
    >
      {/* BACKGROUND */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <ProcessHeroBackground />
      </Box>

      {/* CENTER DARK OVERLAY  */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          marginTop: { xs: 0, md: "38vh" },
        }}
      >
        {/* KICKER */}
        <Typography
          sx={{
            letterSpacing: "0.35em",
            fontSize: "0.7rem",
            color: "#c9b07a",
            opacity: 0.8,
            mb: 2,
          }}
        >
          PROCESS
        </Typography>

        {/* HEADLINE */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: {
              xs: "2.6rem",
              sm: "3.5rem",
              md: "4.8rem",
            },
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#f4f0e8",
            mb: 3,
            textShadow: "0 0 40px rgba(232, 201, 143, 0.08)",
          }}
        >
          Designed with{" "}
          <Box component="span" sx={{ color: "#e8c98f" }}>
            proportion
          </Box>
        </Typography>

        {/* SUBLINE */}
        <Typography
          sx={{
            fontSize: {
              xs: "0.95rem",
              md: "1.1rem",
            },
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          A structured method where each phase builds naturally on the previous
          — creating clarity, balance and refined digital experiences.
        </Typography>
      </Container>
    </Box>
  );
}
