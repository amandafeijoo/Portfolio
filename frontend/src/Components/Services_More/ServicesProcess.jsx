import { Box, Grid, Typography } from "@mui/material";

const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "We start with a conversation about your business, goals, priorities and what the website needs to achieve.",
  },
  {
    number: "02",
    title: "Direction & design",
    text: "I define the structure, visual direction and overall experience so everything feels aligned before development begins.",
  },
  {
    number: "03",
    title: "Build",
    text: "I develop the website with attention to responsiveness, performance and smooth interactions across devices.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Once everything is ready, I help prepare the final version so you can launch with confidence.",
  },
];

export default function ServicesProcess() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 760, mb: 6 }}>
        <Typography
          sx={{
            color: "#c9b07a",
            fontSize: "0.76rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Process
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
          A clear and thoughtful
          <Box component="span" sx={{ color: "#e7c98f" }}>
            {" "}
            way of working.
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "rgba(244,239,230,0.72)",
            lineHeight: 1.8,
          }}
        >
          I keep the process simple, collaborative and focused, so you always
          know what is happening and what comes next.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {steps.map((step) => (
          <Grid item xs={12} md={6} key={step.number}>
            <Box
              sx={{
                height: "100%",
                p: { xs: 2.5, md: 3.2 },
                borderRadius: "28px",
                border: "1px solid rgba(214,183,122,0.12)",
                background:
                  "linear-gradient(180deg, rgba(12,12,12,0.95) 0%, rgba(6,6,6,0.98) 100%)",
              }}
            >
              <Typography
                sx={{
                  color: "#c9b07a",
                  fontSize: "0.9rem",
                  letterSpacing: "0.18em",
                  mb: 1.3,
                }}
              >
                {step.number}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.55rem",
                  color: "#f4efe6",
                  mb: 1.2,
                }}
              >
                {step.title}
              </Typography>

              <Typography
                sx={{
                  color: "rgba(244,239,230,0.74)",
                  lineHeight: 1.8,
                }}
              >
                {step.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
