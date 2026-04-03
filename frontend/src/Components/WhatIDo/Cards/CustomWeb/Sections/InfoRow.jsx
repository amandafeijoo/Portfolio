import { Box, Typography } from "@mui/material";
import { palette } from "../travelLuxury.theme";
import { benefits } from "../travelLuxury.data";

export default function InfoRow() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: `linear-gradient(180deg, ${palette.sectionTop} 0%, ${palette.sectionBottom} 100%)`,
        border: `1px solid ${palette.cardBorder}`,
        p: 0.65,
        mb: 0.65,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.52rem",
          color: palette.navText,
          fontWeight: 700,
          mb: 0.5,
        }}
      >
        Why choose us
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 0.35,
        }}
      >
        {benefits.map(([label, text, tone]) => (
          <Box
            key={label}
            sx={{
              textAlign: "center",
              px: 0.15,
            }}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                mx: "auto",
                mb: 0.28,
                background:
                  tone === "success" ? palette.success : palette.accentSoft,
                border: "1px solid rgba(191,163,112,0.08)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
              }}
            />

            <Typography
              sx={{
                fontSize: "0.38rem",
                color: palette.navText,
                fontWeight: 700,
                mb: 0.08,
              }}
            >
              {label}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.34rem",
                color: palette.bodyText,
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
