import { Box, Container, Typography } from "@mui/material";

export default function WhatIDoHero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        px: 3,
        mt: { xs: 7, md: -10 },
        mb: { xs: 5, md: 25 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
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
            mb: 2,
          }}
        >
          What I Do
        </Typography>

        {/* HEADLINE */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 500,
            fontSize: {
              xs: "clamp(2rem, 8vw, 2.8rem)",
              sm: "clamp(3rem, 6vw, 4rem)",
              md: "clamp(3.8rem, 5vw, 4.8rem)",
            },
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#f4f0e8",
            mb: 3,
          }}
        >
          Websites designed
          <br />
          <Box component="span" sx={{ color: "#e8c98f" }}>
            to work for your business.
          </Box>
        </Typography>

        {/* DIVIDER */}
        <Box
          sx={{
            width: 60,
            height: 1,
            background: "rgba(232,201,143,0.4)",
            mx: "auto",
            mb: 4,
          }}
        />

        {/* SUBLINE */}
        <Typography
          sx={{
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          I design and build complete websites from start to finish.
        </Typography>

        {/* STATEMENT */}
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.8,
            maxWidth: 580,
            mx: "auto",
            mb: 2,
          }}
        >
          From how your website looks, to how it works behind the scenes — and
          how it helps you attract the right clients.
        </Typography>

        {/* SUPPORTING */}
        <Typography
          sx={{
            fontSize: { xs: "0.85rem", md: "0.95rem" },
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.8,
            maxWidth: 520,
            mx: "auto",
          }}
        >
          You don’t need to worry about the technical side. I take care of it,
          so you can focus on your business.
        </Typography>
      </Container>
    </Box>
  );
}
