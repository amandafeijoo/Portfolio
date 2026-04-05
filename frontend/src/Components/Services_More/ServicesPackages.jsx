import { Box, Grid, Typography } from "@mui/material";
import { services } from "./servicesData";
import GlowButton from "../ui/GlowButton";

const palette = {
  kicker: "#c9b07a",
  label: "#c9b07a",
  price: "#c9b07a",
  headingAccent: "#e6d3a8",

  title: "#f4efe6",
  body: "rgba(244,239,230,0.74)",
  muted: "rgba(214,209,201,0.58)",

  cardBorder: "rgba(180,188,202,0.12)",
  cardBorderStrong: "rgba(176,190,214,0.22)",

  cardBg:
    "linear-gradient(180deg, rgba(14,14,14,0.94) 0%, rgba(8,8,8,0.98) 100%)",
  cardBgHighlight:
    "linear-gradient(180deg, rgba(18,20,24,0.96) 0%, rgba(8,8,8,0.99) 100%)",

  pillBorder: "rgba(170,180,200,0.24)",
  pillText: "#d7dee9",
  pillBg: "rgba(170,180,200,0.06)",

  idealFor: "#cfd7e4",
  divider: "rgba(201,176,122,0.10)",

  buttonBorder: "rgba(170,180,200,0.20)",
  buttonHoverBorder: "rgba(199,206,218,0.36)",
  buttonBg:
    "linear-gradient(180deg, rgba(20,20,20,0.94) 0%, rgba(9,9,9,0.98) 100%)",
  buttonHoverBg:
    "linear-gradient(180deg, rgba(28,30,36,0.96) 0%, rgba(10,10,10,0.99) 100%)",
};

export default function ServicesPackages() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 860, mb: 6 }}>
        <Typography
          sx={{
            color: palette.kicker,
            fontSize: "0.76rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Packages
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.1,
            color: palette.title,
            mb: 2,
          }}
        >
          Clear options,
          <Box component="span" sx={{ color: palette.headingAccent }}>
            {" "}
            depending on what your business needs.
          </Box>
        </Typography>

        <Typography
          sx={{
            color: palette.body,
            lineHeight: 1.8,
            fontSize: { xs: "1rem", md: "1.05rem" },
          }}
        >
          These packages are a helpful starting point. If your project needs
          something more tailored, I also offer custom solutions.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} md={4} key={service.title}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                p: { xs: 2.5, md: 3 },
                borderRadius: "32px",
                border: service.highlight
                  ? `1px solid ${palette.cardBorderStrong}`
                  : `1px solid ${palette.cardBorder}`,
                background: service.highlight
                  ? palette.cardBgHighlight
                  : palette.cardBg,
                boxShadow: service.highlight
                  ? "0 18px 50px rgba(0,0,0,0.36), 0 0 38px rgba(170,180,200,0.06)"
                  : "0 16px 42px rgba(0,0,0,0.26)",
                backdropFilter: "blur(10px)",
              }}
            >
              {service.highlight && (
                <Box
                  sx={{
                    display: "inline-block",
                    mb: 2,
                    px: 1.5,
                    py: 0.7,
                    borderRadius: "999px",
                    border: `1px solid ${palette.pillBorder}`,
                    color: palette.pillText,
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    background: palette.pillBg,
                  }}
                >
                  {service.highlight}
                </Box>
              )}

              <Typography
                sx={{
                  color: palette.label,
                  fontSize: "0.75rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                {service.label}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: { xs: "1.8rem", md: "2rem" },
                  color: palette.title,
                  mb: 1.2,
                  lineHeight: 1.1,
                }}
              >
                {service.title}
              </Typography>

              <Typography
                sx={{
                  color: palette.body,
                  lineHeight: 1.8,
                  mb: 2,
                  minHeight: { md: 90 },
                }}
              >
                {service.subtitle}
              </Typography>

              <Typography
                sx={{
                  color: palette.idealFor,
                  fontSize: "0.95rem",
                  mb: 2.5,
                  lineHeight: 1.7,
                }}
              >
                {service.idealFor}
              </Typography>

              <Box
                component="ul"
                sx={{
                  pl: 2.2,
                  mb: 3,
                  color: palette.body,
                }}
              >
                {service.features.map((feature) => (
                  <Typography
                    component="li"
                    key={feature}
                    sx={{
                      mb: 1.2,
                      lineHeight: 1.7,
                      fontSize: "0.97rem",
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>

              <Box
                sx={{
                  pt: 2,
                  borderTop: `1px solid ${palette.divider}`,
                }}
              >
                <Typography
                  sx={{
                    color: palette.price,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontSize: "0.8rem",
                    mb: 0.8,
                  }}
                >
                  {service.price}
                </Typography>

                <Typography
                  sx={{
                    color: palette.muted,
                    mb: 2.5,
                  }}
                >
                  {service.timeline}
                </Typography>

                <GlowButton href="/contact" fullWidth>
                  {service.cta}
                </GlowButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
