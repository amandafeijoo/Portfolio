import { Box } from "@mui/material";
import { palette } from "../travelLuxury.theme";

export default function BrowserBar() {
  return (
    <Box
      sx={{
        height: 18,
        px: 0.9,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: palette.browserBg,
        borderBottom: `1px solid ${palette.browserBorder}`,
      }}
    >
      <Box sx={{ display: "flex", gap: 0.35 }}>
        {[0, 1, 2].map((dot) => (
          <Box
            key={dot}
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: dot === 0 ? palette.accent : "rgba(39, 30, 18, 0.22)",
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          width: 30,
          height: 4,
          borderRadius: "999px",
          background: "rgba(33, 24, 12, 0.12)",
        }}
      />
    </Box>
  );
}
