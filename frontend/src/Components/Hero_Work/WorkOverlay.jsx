import { Box, Typography, Button } from "@mui/material";

export default function WorkOverlay({ onEnter, enter }) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "0.8rem",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "rgba(240,201,123,0.9)",
            mb: 2,
          }}
        >
          Work
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2.8rem, 6vw, 4rem)",
            color: "#F4F2ED",
            lineHeight: 1.1,
          }}
        >
          Selected work
        </Typography>

        <Typography
          sx={{
            maxWidth: 570,
            fontSize: "1rem",
            mx: "auto",
            color: "rgba(220,215,205,0.65)",
            lineHeight: 1.7,
            textshadow: "0 0 8px rgba(220,215,205,0.65)",
            mt: 5,
            mb: 5,
          }}
        >
          A selection of projects where design, clarity and purpose come
          together.
        </Typography>

        <Button
          onClick={onEnter}
          disabled={enter}
          sx={{
            px: 5,
            py: 1.4,
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#e6d5bc",
            border: "1px solid rgba(230,213,188,0.35)",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(6px)",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(230,213,188,0.35)",
            },
          }}
        >
          Enter work
        </Button>
      </Box>
    </Box>
  );
}
