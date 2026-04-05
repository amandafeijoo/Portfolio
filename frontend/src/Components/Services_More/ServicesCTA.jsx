import { Box, Button, Stack, Typography } from "@mui/material";

export default function ServicesCTA() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          p: { xs: 3, md: 5 },
          borderRadius: "34px",
          border: "1px solid rgba(231,201,143,0.18)",
          background:
            "radial-gradient(circle at top, rgba(231,201,143,0.08) 0%, rgba(12,12,12,0.96) 38%, rgba(5,5,5,0.99) 100%)",
          boxShadow: "0 22px 60px rgba(0,0,0,0.35)",
        }}
      >
        <Typography
          sx={{
            color: "#c9b07a",
            fontSize: "0.76rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Let’s build something meaningful
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "2rem", md: "3.2rem" },
            lineHeight: 1.08,
            color: "#f4efe6",
            mb: 2,
          }}
        >
          Have a project in mind?
        </Typography>

        <Typography
          sx={{
            maxWidth: 760,
            mx: "auto",
            color: "rgba(244,239,230,0.72)",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Whether you already know what you need or you are still defining it,
          we can start with a conversation and see what fits your business best.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            href="/contact"
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1.25,
              color: "#0b0b0b",
              background: "#e7c98f",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              "&:hover": {
                background: "#f0d8a7",
                color: "#0b0b0b",

                boxShadow: `
          0 0 16px rgba(230, 213, 188, 0.25),
          0 0 48px rgba(230, 213, 188, 0.15)
        `,
              },
            }}
          >
            Start a project
          </Button>

          <Button
            href="/projects"
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1.25,
              color: "#f4efe6",
              border: "1px solid rgba(214,183,122,0.22)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              "&:hover": {
                borderColor: "rgba(231,201,143,0.38)",
                background: "rgba(231,201,143,0.04)",
                color: "#f4efe6",

                boxShadow: `
          0 0 16px rgba(230, 213, 188, 0.25),
          0 0 48px rgba(230, 213, 188, 0.15)
        `,
              },
            }}
          >
            View selected work
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
