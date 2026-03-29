import { Box, Typography, Button } from "@mui/material";
import SwipeIcon from "@mui/icons-material/Swipe";
export default function ServiceCard({
  label,
  title,
  subtitle,
  features = [],
  price,
  timeline,
  cta,
  isActive = false,
  showSwipeHint = true,
}) {
  return (
    <Box
      sx={{
        width: { xs: 325, sm: 340, md: 390 },
        minHeight: { xs: 520, md: 500 },
        borderRadius: "30px",
        px: { xs: 3, md: 4 },
        py: { xs: 3.5, md: 4.5 },
        mt: { xs: -6, md: 30, xl: 28 },
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        background: isActive
          ? `
            radial-gradient(
              circle at top center,
              rgba(232, 201, 143, 0.16),
              rgba(18, 19, 20, 0.96) 38%,
              rgba(10, 10, 10, 0.98) 100%
            )
          `
          : `
            linear-gradient(
              180deg,
              rgba(22, 22, 22, 0.92) 0%,
              rgba(10, 10, 10, 0.96) 100%
            )
          `,

        border: isActive
          ? "1px solid rgba(232, 201, 143, 0.34)"
          : "1px solid rgba(255,255,255,0.08)",

        boxShadow: isActive
          ? `
            0 24px 80px rgba(0,0,0,0.55),
            0 0 0 1px rgba(232, 201, 143, 0.08),
            0 0 38px rgba(232, 201, 143, 0.08)
          `
          : `
            0 18px 48px rgba(0,0,0,0.42)
          `,

        backdropFilter: "blur(12px)",
        transition:
          "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* TOP */}
      <Box>
        {/* SWIPE HINT - SOLO MÓVIL Y SOLO SI VIENE ACTIVADO */}
        {showSwipeHint && (
          <Box
            sx={{
              display: { xs: "inline-flex", md: "none" },
              mt: 0,
              mb: 2.5,
              px: 1.6,
              py: 0.75,
              borderRadius: "999px",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              border: "1px dashed rgba(232, 201, 143, 0.72)",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.9,
              pointerEvents: "none",
              backdropFilter: "blur(6px)",
            }}
          >
            <SwipeIcon
              sx={{
                fontSize: 12,
                color: "rgba(232, 201, 143, 0.62)",
              }}
            />
            Swipe to explore
          </Box>
        )}

        {/* LABEL */}
        <Typography
          sx={{
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(201, 176, 122, 0.78)",
            mb: 1.5,
            minHeight: "1.2em",
          }}
        >
          {label}
        </Typography>

        {/* TITLE */}
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
            fontSize: { xs: "1.55rem", md: "1.85rem" },
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#f4f0e8",
            mb: 1.5,
          }}
        >
          {title}
        </Typography>

        {/* SUBTITLE */}
        <Typography
          sx={{
            fontSize: { xs: "0.92rem", md: "0.98rem" },
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.72)",
            mb: 3.2,
            maxWidth: 300,
          }}
        >
          {subtitle}
        </Typography>

        {/* FEATURES */}
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            p: 0,
            m: 0,
            display: "flex",
            flexDirection: "column",
            gap: 1.25,
          }}
        >
          {features.map((feature) => (
            <Box
              component="li"
              key={feature}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  mt: "0.55rem",
                  flexShrink: 0,
                  background: isActive
                    ? "#e8c98f"
                    : "rgba(232, 201, 143, 0.58)",
                  boxShadow: isActive
                    ? "0 0 10px rgba(232, 201, 143, 0.35)"
                    : "none",
                }}
              />

              <Typography
                sx={{
                  fontSize: { xs: "0.88rem", md: "0.94rem" },
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* BOTTOM */}
      <Box sx={{ mt: 4 }}>
        {/* DIVIDER */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            mb: 2.5,
            background:
              "linear-gradient(90deg, transparent, rgba(232,201,143,0.35), transparent)",
          }}
        />

        {/* PRICE / TIMELINE */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.8,
            mb: 2.8,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(201,176,122,0.72)",
            }}
          >
            {price}
          </Typography>

          <Typography
            sx={{
              fontSize: "0.84rem",
              color: "rgba(255,255,255,0.52)",
              lineHeight: 1.6,
            }}
          >
            {timeline}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
