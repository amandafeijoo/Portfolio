import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { palette } from "../travelLuxury.theme";

const MotionBox = motion(Box);

export default function ContactBlock() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: `linear-gradient(180deg, ${palette.sectionTop} 0%, ${palette.sectionBottom} 100%)`,
        border: `1px solid ${palette.cardBorder}`,
        p: 0.65,
        mb: 0.65,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.62rem",
          color: palette.navText,
          fontWeight: 700,
          mb: 0.2,
        }}
      >
        Contact us
      </Typography>

      <Typography
        sx={{
          fontSize: "0.42rem",
          color: palette.bodyText,
          lineHeight: 1.35,
          fontWeight: 500,
          maxWidth: "88%",
          mx: "auto",
          mb: 0.4,
        }}
      >
        Let us help you find the perfect stay for your next unforgettable trip.
      </Typography>

      <MotionBox
        whileTap={{ scale: 0.97, y: 1 }}
        sx={{
          mx: "auto",
          width: "fit-content",
          px: 0.82,
          py: 0.34,
          borderRadius: "999px",
          background: palette.buttonBg,
          border: "1px solid rgba(191,163,112,0.12)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.35rem",
            color: palette.buttonText,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Get in touch
        </Typography>
      </MotionBox>
    </Box>
  );
}
