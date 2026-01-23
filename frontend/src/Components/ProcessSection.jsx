import { Box, Typography } from "@mui/material";
import ProcessVisual from "./ProcessVisual";
import ProcessCards from "./ProcessCards";

export default function ProcessSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#000",
        overflow: "hidden",
        width: "100%",
        marginTop: "-10px",
        marginBottom: "90px",
      }}
    >
      <ProcessVisual />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          pointerEvents: "none",
          maxWidth: "1200px",
          mx: "auto",
          pt: "clamp(220px, 35vw, 390px)",
          pb: "clamp(80px, 18vw, 120px)",
          textAlign: "center",
          px: "16px",
        }}
      >
        {/* =====================
           TITLE (ESTILO ABOUT)
        ===================== */}
        <Box
          sx={{
            textAlign: "center",
            mb: "clamp(8px, 10vw, 10px)",
          }}
        >
          {/* LABEL */}
          <Typography
            sx={{
              fontSize: "0.8rem",
              letterSpacing: "0.9em",
              ml: "-10em",
              fontWeight: 600,
              color: "rgba(240, 201, 123, 0.95)",
              textTransform: "uppercase",
              mb: "20px",
            }}
          >
            Process
          </Typography>

          {/* TITLE */}
          <Typography
            sx={{
              fontSize: "clamp(2.8rem, 6vw, 3.5rem)",
              fontWeight: 500,
              color: "#F4F2ED",
              lineHeight: 1.1,
              mb: 5,
              textShadow: `
                0 0 18px rgba(201,184,138,0.25),
                0 0 42px rgba(201,184,138,0.15)
              `,
            }}
          >
            How I work
          </Typography>
          <div
            style={{
              margin: "18px auto 0",
              width: "64px",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(201,184,138,0.6), transparent)",
            }}
          />
        </Box>

        {/* =====================
           CARDS
        ===================== */}
        <Box sx={{ pointerEvents: "auto" }}>
          <ProcessCards />
        </Box>
      </Box>
    </section>
  );
}
