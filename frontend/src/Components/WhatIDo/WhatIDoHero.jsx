import { Box, Container, Typography } from "@mui/material";

const items = [
  {
    title: "Attract the right clients",
    text: "A strong digital presence that captures attention and makes the right first impression.",
  },
  {
    title: "Build trust through design",
    text: "Thoughtful, refined websites that make your brand feel professional, credible and memorable.",
  },
  {
    title: "Turn visits into real interest",
    text: "A clear experience designed to guide your audience and support the growth of your business.",
  },
];

export default function WhatIDoHero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        pt: { xs: 10, md: 14 },

        background: `
  radial-gradient(
    circle at 50% 10%,
    rgba(232, 201, 143, 0.16) 0%,
    rgba(232, 201, 143, 0.10) 20%,
    rgba(232, 201, 143, 0.04) 38%,
    transparent 60%
  ),
  linear-gradient(
    to bottom,
    #060606 0%,
    #0c0c0c 45%,
    #121212 100%
  )
`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          transform: {
            xs: "translateY(-10px)",
            md: "translateY(-20px)",
            lg: "translateY(-30px)",
          },
        }}
      >
        <Typography
          sx={{
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontSize: "0.65rem",
            color: "#c9b07a",
            opacity: 0.78,
            mb: 2,
          }}
        >
          What I help you achieve
        </Typography>

        <Typography
          component="h2"
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

        <Box
          sx={{
            width: 60,
            height: 1,
            background: "rgba(232,201,143,0.4)",
            mx: "auto",
            mb: { xs: 5, md: 7 },
          }}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4, lg: 5 },
            maxWidth: 1100,
            mx: "auto",
          }}
        >
          {items.map((item) => (
            <Box
              key={item.title}
              sx={{
                px: { xs: 1, md: 2 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: { xs: "1.2rem", md: "1.45rem" },
                  color: "#f4f0e8",
                  mb: 1.5,
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.92rem", md: "1rem" },
                  color: "rgba(255,255,255,0.68)",
                  lineHeight: 1.8,
                  maxWidth: 320,
                  mx: "auto",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
