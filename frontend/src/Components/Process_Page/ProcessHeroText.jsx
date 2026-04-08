import { Box, Container, Typography } from "@mui/material";

export default function ProcessHeroText() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="md">
        {/* LABEL */}
        <Typography
          sx={{
            letterSpacing: "0.35em",
            fontSize: "0.7rem",
            color: "#c9b07a",
            opacity: 0.75,
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          Process
        </Typography>

        {/* TITLE */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: {
              xs: "2.3rem",
              sm: "3.2rem",
              md: "4.4rem",
            },
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#f4f0e8",
            mb: 3,
          }}
        >
          A clear process,
          <br />
          <Box component="span" sx={{ color: "#e8c98f" }}>
            from idea to launch.
          </Box>
        </Typography>

        {/* SUBTEXT */}
        <Typography
          sx={{
            fontSize: {
              xs: "0.95rem",
              md: "1.05rem",
            },
            maxWidth: "680px",
            mx: "auto",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Each step is designed to keep the project clear, collaborative and
          focused on building the right website for your business.
        </Typography>
      </Container>
    </Box>
  );
}
