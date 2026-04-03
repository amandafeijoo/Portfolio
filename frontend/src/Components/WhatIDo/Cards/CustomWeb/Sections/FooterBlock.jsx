import { Box, Typography } from "@mui/material";
import { palette } from "../travelLuxury.theme";
import { footerLinks } from "../travelLuxury.data";

export default function FooterBlock() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: `linear-gradient(180deg, ${palette.sectionTop} 0%, ${palette.sectionBottom} 100%)`,
        border: `1px solid ${palette.cardBorder}`,
        px: 0.65,
        py: 0.45,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 0.4,
        }}
      >
        {/* LEFT - BRAND */}
        <Typography
          sx={{
            fontSize: "0.24rem",
            color: palette.softText,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            fontWeight: 600,
          }}
        >
          Nomad Stay
        </Typography>

        {/* RIGHT - LINKS */}
        <Box sx={{ display: "flex", gap: 0.4 }}>
          {footerLinks.map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: "0.22rem",
                color: palette.bodyText,
                fontWeight: 500,
                cursor: "pointer",

                transition: "0.2s ease",

                "&:hover": {
                  color: palette.navText,
                  opacity: 0.9,
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
