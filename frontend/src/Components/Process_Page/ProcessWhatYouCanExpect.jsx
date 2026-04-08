import { Box, Grid, Typography } from "@mui/material";
import { expectations } from "./processData";

export default function ProcessWhatYouCanExpect() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 860, mb: 6 }}>
        <Typography
          sx={{
            color: "#c9b07a",
            fontSize: "0.76rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          What you can expect
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.08,
            color: "#f4efe6",
            mb: 2,
          }}
        >
          Clarity, collaboration
          <Box component="span" sx={{ color: "#e6d3a8" }}>
            {" "}
            and thoughtful decisions.
          </Box>
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {expectations.map((item) => (
          <Grid item xs={12} md={6} key={item}>
            <Box
              sx={{
                height: "100%",
                p: { xs: 2.5, md: 3 },
                borderRadius: "24px",
                border: "1px solid rgba(180,188,202,0.12)",
                background:
                  "linear-gradient(180deg, rgba(12,12,12,0.95) 0%, rgba(7,7,7,0.98) 100%)",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(244,239,230,0.76)",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                }}
              >
                {item}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
