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

const titleColors = [
  "rgba(208, 188, 149, 0.68)",
  "#ecd29a",
  "rgba(208, 188, 149, 0.68)",
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
        pt: { xs: 7, md: 14 },
        overflow: "hidden",
        background: `
          linear-gradient(
            to bottom,
            #060606 0%,
            #0b0b0b 42%,
            #101010 100%
          )
        `,
      }}
    >
      {/* TOP FLOATING LINE */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "8%", md: "10%" },
          display: { xs: "none", md: "block" },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "78%", sm: "68%", md: "56%" },
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,176,122,0.16), rgba(232,201,143,0.42), rgba(201,176,122,0.16), transparent)",
          opacity: 0.9,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* FLOATING TOP HALO */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: { xs: "12%", md: "13%" },
          transform: "translate(-50%, -50%)",
          width: { xs: 280, sm: 360, md: 460, lg: 560 },
          height: { xs: 100, sm: 120, md: 150, lg: 180 },
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse at center,
              rgba(232, 201, 143, 0.13) 0%,
              rgba(201, 176, 122, 0.06) 34%,
              rgba(0,0,0,0) 76%
            )
          `,
          filter: "blur(30px)",
          opacity: 0.95,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* SOFT LIGHT BEAM */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: { xs: "16%", md: "17%" },
          transform: "translateX(-50%)",
          width: { xs: 120, sm: 150, md: 190, lg: 230 },
          height: { xs: 240, sm: 280, md: 360, lg: 430 },
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse at center,
              rgba(232, 201, 143, 0.08) 0%,
              rgba(201, 176, 122, 0.035) 30%,
              rgba(201, 176, 122, 0.012) 54%,
              rgba(0,0,0,0) 76%
            )
          `,
          filter: "blur(28px)",
          opacity: 0.75,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* MAIN HERO GLOW */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: { xs: "36%", md: "34%" },
          transform: "translate(-50%, -50%)",
          width: { xs: 420, sm: 620, md: 820, lg: 980 },
          height: { xs: 320, sm: 380, md: 460, lg: 520 },
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse at center,
              rgba(232, 201, 143, 0.09) 0%,
              rgba(232, 201, 143, 0.05) 24%,
              rgba(232, 201, 143, 0.02) 42%,
              rgba(0,0,0,0) 72%
            )
          `,
          filter: "blur(60px)",
          opacity: 0.85,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          transform: {
            xs: "translateY(-30px)",
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
            opacity: 0.8,
            mb: 2,
            textShadow: "0 0 18px rgba(201,176,122,0.12)",
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
            textShadow: `
              0 0 20px rgba(232, 201, 143, 0.05),
              0 0 46px rgba(232, 201, 143, 0.03)
            `,
          }}
        >
          Websites designed
          <br />
          <Box
            component="span"
            sx={{
              color: "#e8c98f",
              textShadow: `
                0 0 16px rgba(232, 201, 143, 0.06),
                0 0 34px rgba(232, 201, 143, 0.04)
              `,
            }}
          >
            to work for your business.
          </Box>
        </Typography>

        <Box
          sx={{
            width: 60,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(232,201,143,0.55), transparent)",
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
            gap: { xs: 3.5, md: 4, lg: 5 },
            maxWidth: 1100,
            mx: "auto",
          }}
        >
          {items.map((item, index) => (
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
                  color: titleColors[index],
                  mb: 1.5,
                  lineHeight: 1.25,

                  textShadow:
                    index === 1
                      ? "0 0 18px rgba(232,201,143,0.08)"
                      : index === 2
                      ? "0 0 14px rgba(207,216,230,0.06)"
                      : "none",
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
