import { Box, Typography } from "@mui/material";

export default function ProcessIntro() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",

          p: { xs: 3, md: 4 },
          mt: { xs: 0, md: -12 },

          borderRadius: "30px",
          border: "1px solid rgba(201,176,122,0.12)",

          background:
            "radial-gradient(circle at top, rgba(201,176,122,0.05) 0%, rgba(12,12,12,0.96) 34%, rgba(5,5,5,0.99) 100%)",

          boxShadow: `
            0 20px 50px rgba(0,0,0,0.28),
            0 0 60px rgba(201,176,122,0.06)
          `,

          /* ✨ HALO GRANDE (exterior) */
          "&::before": {
            content: '""',
            position: "absolute",
            inset: -80,
            borderRadius: "40px",
            background: `
              radial-gradient(
                circle,
                rgba(201,176,122,0.12),
                transparent 65%
              )
            `,
            opacity: 0.5,
            filter: "blur(60px)",
            zIndex: 0,
            pointerEvents: "none",
          },

          /* ✨ LUZ SUPERIOR */
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "30px",
            background: `
              radial-gradient(
                ellipse at top,
                rgba(201,176,122,0.08),
                transparent 60%
              )
            `,
            opacity: 0.6,
            pointerEvents: "none",
          },

          /* contenido por encima del glow */
          "& > *": {
            position: "relative",
            zIndex: 1,
          },

          /* opcional hover ultra sutil */
          transition: "all 0.4s ease",
          "&:hover": {
            boxShadow: `
              0 24px 70px rgba(0,0,0,0.34),
              0 0 80px rgba(201,176,122,0.10)
            `,
          },
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
          Why the process matters
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
          A thoughtful process creates
          <Box component="span" sx={{ color: "#e6d3a8" }}>
            {" "}
            better results.
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "rgba(244,239,230,0.74)",
            fontSize: { xs: "1rem", md: "1.05rem" },
            lineHeight: 1.8,
            maxWidth: 760,
          }}
        >
          A clear process keeps the project focused, collaborative and aligned
          with your business goals. It reduces confusion, gives structure to
          each stage and makes the final result feel much more intentional.
        </Typography>
      </Box>
    </Box>
  );
}
