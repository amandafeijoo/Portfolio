import { Box, Button, Stack, Typography } from "@mui/material";

export default function ProcessCTA() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Box
        sx={{
          textAlign: "center",
          p: { xs: 3, md: 5 },
          borderRadius: "34px",
          border: "1px solid rgba(201,176,122,0.14)",
          background:
            "radial-gradient(circle at top, rgba(201,176,122,0.06) 0%, rgba(12,12,12,0.96) 38%, rgba(5,5,5,0.99) 100%)",
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
          Ready to begin
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#f4efe6",
            lineHeight: 1.08,
            mb: 2,
          }}
        >
          Start with clarity,
          <Box component="span" sx={{ color: "#e6d3a8" }}>
            {" "}
            build with intention.
          </Box>
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
          If you already have a project in mind, or you are still defining it,
          we can begin with a conversation and shape the right direction
          together.
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
            href="/services"
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1.2,
              color: "#f4efe6",
              border: "1px solid rgba(201,176,122,0.18)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              "&:hover": {
                background: "rgba(201,176,122,0.05)",
                borderColor: "rgba(201,176,122,0.32)",
                color: "#f4efe6",
              },
            }}
          >
            View services
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
