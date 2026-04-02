import { Box, Container, Typography } from "@mui/material";
import ProcessHeroBackground from "./ProcessHeroBackground";

export default function ProcessHero({ embedded = false }) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: embedded ? "100%" : "100svh",
        height: embedded ? "100%" : "auto",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        mt: embedded ? 0 : { xs: 7, md: -10 },
        background: "#000",
      }}
    >
      {/* BACKGROUND */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          transform: embedded
            ? { xs: "scale(1.35)", md: "scale(1.1)" }
            : "scale(1)",
          transformOrigin: "center",
        }}
      >
        <ProcessHeroBackground />
      </Box>

      {/* CENTER DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: embedded
            ? `
              radial-gradient(
                circle at center,
                rgba(0,0,0,0.05) 0%,
                rgba(0,0,0,0.42) 38%,
                rgba(0,0,0,0.84) 100%
              )
            `
            : `
              radial-gradient(
                circle at center,
                rgba(0,0,0,0.03) 0%,
                rgba(0,0,0,0.28) 42%,
                rgba(0,0,0,0.74) 100%
              )
            `,
        }}
      />

      {/* TOP FLOATING LINE */}
      <Box
        sx={{
          position: "absolute",
          top: embedded ? { xs: "14%", md: "12%" } : { xs: "15%", md: "14%" },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "76%", sm: "68%", md: "56%" },
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,176,122,0.18), rgba(232,201,143,0.42), rgba(201,176,122,0.18), transparent)",
          opacity: 0.85,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* FLOATING TOP HALO */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: embedded ? { xs: "18%", md: "15%" } : { xs: "20%", md: "17%" },
          transform: "translate(-50%, -50%)",
          width: { xs: 260, sm: 360, md: 420, lg: 520 },
          height: { xs: 90, sm: 110, md: 130, lg: 150 },
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse at center,
              rgba(232, 201, 143, 0.13) 0%,
              rgba(201, 176, 122, 0.06) 36%,
              rgba(0,0,0,0) 76%
            )
          `,
          filter: "blur(28px)",
          opacity: 0.95,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* CONTENT */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          marginTop: embedded ? { xs: 0, md: "20vh" } : { xs: 0, md: "38vh" },
          px: { xs: 3, md: 4 },
        }}
      >
        <Typography
          sx={{
            letterSpacing: "0.35em",
            fontSize: "0.7rem",
            color: "#c9b07a",
            opacity: 0.82,
            mb: 2,
            textTransform: "uppercase",
            textShadow: "0 0 18px rgba(201,176,122,0.14)",
          }}
        >
          Process
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            mb: 3,
            px: { xs: 1, md: 2 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              position: "relative",
              fontFamily: "Playfair Display, serif",
              fontSize: {
                xs: "2.4rem",
                sm: "3.4rem",
                md: "4.6rem",
              },
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#f4f0e8",
              mb: 0,
              textShadow: `
                0 0 20px rgba(232, 201, 143, 0.05),
                0 0 44px rgba(232, 201, 143, 0.03)
              `,
            }}
          >
            A clear process,
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
              from idea to launch.
            </Box>
          </Typography>

          {/* BOTTOM ACCENT LINE */}
          <Box
            sx={{
              width: { xs: 90, md: 140 },
              height: "1px",
              mx: "auto",
              mt: 2.2,
              background:
                "linear-gradient(90deg, transparent, rgba(201,176,122,0.7), transparent)",
              opacity: 0.7,
            }}
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <Typography
            sx={{
              position: "relative",
              fontSize: {
                xs: "0.95rem",
                md: "1.05rem",
              },
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Each step is designed to keep the project clear, collaborative and
            focused on building the right website for your business.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
