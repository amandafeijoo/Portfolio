import { Box, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { processSteps } from "./processData";

export default function ProcessStepsDetailed() {
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
          The steps
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
          From first conversation
          <Box component="span" sx={{ color: "#e6d3a8" }}>
            {" "}
            to final launch.
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "rgba(244,239,230,0.74)",
            lineHeight: 1.8,
            maxWidth: 760,
          }}
        >
          Each phase has a clear purpose, so the project moves forward with
          structure, intention and room for the right decisions.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {processSteps.map((item) => (
          <Grid item xs={12} md={6} key={item.number}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                p: { xs: 2.5, md: 3.2 },
                borderRadius: "28px",
                border: "1px solid rgba(180,188,202,0.12)",
                background:
                  "linear-gradient(180deg, rgba(12,12,12,0.95) 0%, rgba(7,7,7,0.98) 100%)",
                boxShadow: `
                  0 16px 42px rgba(0,0,0,0.24),
                  0 0 36px rgba(201,176,122,0.06)
                `,
                transition:
                  "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: -60,
                  borderRadius: "36px",
                  background: `
                    radial-gradient(
                      circle,
                      rgba(201,176,122,0.10),
                      transparent 68%
                    )
                  `,
                  opacity: 0.42,
                  filter: "blur(52px)",
                  zIndex: 0,
                  pointerEvents: "none",
                },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "28px",
                  background: `
                    radial-gradient(
                      ellipse at top,
                      rgba(201,176,122,0.06),
                      transparent 62%
                    )
                  `,
                  opacity: 0.6,
                  pointerEvents: "none",
                  zIndex: 0,
                },

                "& > *": {
                  position: "relative",
                  zIndex: 1,
                },

                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(201,176,122,0.18)",
                  boxShadow: `
                    0 20px 60px rgba(0,0,0,0.30),
                    0 0 48px rgba(201,176,122,0.10)
                  `,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.4,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid rgba(201,176,122,0.24)",
                    background: "rgba(201,176,122,0.06)",
                    color: "#f4efe6",
                    boxShadow: "0 0 18px rgba(201,176,122,0.08)",
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </Box>

                <Typography
                  sx={{
                    color: "#c9b07a",
                    letterSpacing: "0.18em",
                    fontSize: "0.82rem",
                    textTransform: "uppercase",
                  }}
                >
                  {item.step}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "rgba(201,176,122,0.72)",
                  fontSize: "0.9rem",
                  mb: 1,
                  letterSpacing: "0.14em",
                }}
              >
                {item.label}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: { xs: "1.65rem", md: "1.9rem" },
                  lineHeight: 1.1,
                  color: "#f4efe6",
                  mb: 1.4,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "rgba(244,239,230,0.74)",
                  lineHeight: 1.8,
                  mb: 2.2,
                }}
              >
                {item.text}
              </Typography>

              <Box
                component="ul"
                sx={{
                  pl: 2.2,
                  mb: 0,
                  color: "rgba(244,239,230,0.72)",
                }}
              >
                {item.details.map((detail) => (
                  <Typography
                    component="li"
                    key={detail}
                    sx={{
                      mb: 1,
                      lineHeight: 1.7,
                      fontSize: "0.97rem",
                    }}
                  >
                    {detail}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
