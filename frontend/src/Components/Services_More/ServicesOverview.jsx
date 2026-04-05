import { Box, Grid, Typography } from "@mui/material";

const items = [
  {
    title: "Strategy & structure",
    text: "Every project starts with clarity. I help shape the right structure, flow and priorities before development begins.",
  },
  {
    title: "Custom design",
    text: "No generic templates. Each website is designed to reflect your brand, your audience and the feeling you want to create.",
  },
  {
    title: "Development",
    text: "From elegant front-end experiences to more advanced builds with bookings, payments, dashboards or custom logic.",
  },
  {
    title: "Performance & responsiveness",
    text: "Your website should feel smooth, look premium and work beautifully across desktop, tablet and mobile.",
  },
];

export default function ServicesOverview() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        borderTop: "1px solid rgba(214,183,122,0.10)",
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center", mb: 6 }}>
        <Typography
          sx={{
            color: "#c9b07a",
            fontSize: "0.76rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          What you actually get
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "2rem", md: "3.2rem" },
            lineHeight: 1.08,
            mb: 2,
            color: "#f4efe6",
          }}
        >
          More than a website —
          <Box component="span" sx={{ color: "#e7c98f" }}>
            {" "}
            a thoughtful digital experience.
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "rgba(244,239,230,0.72)",
            fontSize: { xs: "1rem", md: "1.08rem" },
            lineHeight: 1.8,
          }}
        >
          Each project is built with strategy, custom design and development, so
          your website not only looks refined, but also supports your goals and
          feels aligned with your business.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <Box
              sx={{
                height: "100%",
                p: { xs: 2.5, md: 3.5 },
                borderRadius: "28px",
                border: "1px solid rgba(214,183,122,0.14)",
                background:
                  "linear-gradient(180deg, rgba(18,18,18,0.95) 0%, rgba(8,8,8,0.98) 100%)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: { xs: "1.35rem", md: "1.55rem" },
                  color: "#f4efe6",
                  mb: 1.4,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "rgba(244,239,230,0.72)",
                  lineHeight: 1.8,
                  fontSize: "0.98rem",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
