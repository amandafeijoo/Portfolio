import { Box, Typography } from "@mui/material";
import { palette } from "../travelLuxury.theme";
import { navItems } from "../travelLuxury.data";

export default function NavRow() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 0.55,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.45 }}>
        <Box
          sx={{
            width: 13,
            height: 13,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(212,176,114,0.98), rgba(255,248,239,0.98))",
            border: "1px solid rgba(191,163,112,0.10)",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        />
        <Typography
          sx={{
            fontSize: "0.4rem",
            color: palette.navText,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.10em",
          }}
        >
          Nomad Stay
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 0.45 }}>
        {navItems.map((item) => (
          <Typography
            key={item}
            sx={{
              fontSize: "0.32rem",
              color: palette.bodyText,
              fontWeight: 600,
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
