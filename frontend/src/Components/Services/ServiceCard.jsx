import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ServiceCard({
  title,
  subtitle,
  features,
  price,
  timeline,
  featured = false,
}) {
  return (
    <Box
      component={motion.div}
      whileHover={{ y: -6, scale: featured ? 1.03 : 1.015 }}
      sx={{
        position: "relative",

        width: "100%",
        maxWidth: { xs: "90%", sm: 360, md: 370 },
        minHeight: { xs: 400, sm: 560, md: 400 },

        mx: "auto",
        mt: { xs: 20, md: 28 },

        px: { xs: 2.5, md: 3.5 },
        py: { xs: 3.5, md: 4.5 },

        borderRadius: "28px",
        border: "1px solid transparent",

        background: `
          linear-gradient(rgba(15,15,15,0.92), rgba(15,15,15,0.92)) padding-box,
          radial-gradient(
            120% 140% at 50% 30%,
            rgba(201,169,106,${featured ? 0.75 : 0.45}),
            rgba(201,169,106,0.25) 40%,
            rgba(255,255,255,0.14) 60%,
            transparent 100%
          ) border-box
        `,

        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        boxShadow: featured
          ? "0 60px 140px rgba(0,0,0,0.75)"
          : "0 40px 90px rgba(0,0,0,0.55)",

        textAlign: "center",
        color: "rgba(255,255,255,0.92)",

        transition: "all .45s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* ===== TITLE ===== */}
      <Typography
        sx={{
          fontFamily: `"Playfair Display", serif`,
          fontSize: { xs: "1.2rem", md: "1.45rem" },
          letterSpacing: "0.04em",
          mb: 1.5,
          textShadow: `
            0 0 1px rgba(255,255,255,0.35),
            0 0 14px rgba(201,169,106,0.25)
          `,
        }}
      >
        {title}
      </Typography>

      {/* ===== SUBTITLE ===== */}
      <Typography
        sx={{
          fontSize: { xs: "0.78rem", md: "0.85rem" },
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.6,
          mb: 3,
        }}
      >
        {subtitle}
      </Typography>

      {/* ===== FEATURES ===== */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.75 }}>
        {features.map((feature, i) => (
          <Typography
            key={i}
            sx={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "0.02em",
              pb: 1.2,
              borderBottom:
                i === features.length - 1
                  ? "none"
                  : "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {feature}
          </Typography>
        ))}
      </Box>

      {/* ===== PRICE DIVIDER ===== */}
      <Box
        sx={{
          width: 48,
          height: "1px",
          mx: "auto",
          my: 3,
          background:
            "linear-gradient(to right, transparent, rgba(201,169,106,0.65), transparent)",
          boxShadow: "0 0 10px rgba(201,169,106,0.45)",
        }}
      />

      {/* ===== PRICE ===== */}
      <Box>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            mb: 0.5,
          }}
        >
          {price}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          {timeline}
        </Typography>
      </Box>

      {/* ===== FEATURED BADGE ===== */}
      {featured && (
        <Box
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            px: 1.5,
            py: 0.5,
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.9)",
            borderRadius: "999px",
            background:
              "linear-gradient(135deg, rgba(201,169,106,0.85), rgba(255,236,190,0.85))",
            boxShadow: "0 0 16px rgba(201,169,106,0.6)",
          }}
        >
          Most popular
        </Box>
      )}
    </Box>
  );
}
