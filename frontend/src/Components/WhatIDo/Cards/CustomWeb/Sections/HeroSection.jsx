import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { palette } from "../travelLuxury.theme";
import { images } from "../travelLuxury.data";
import NavRow from "./NavRow";
import FakeCursor from "./FakeCursor";

const MotionBox = motion(Box);

export default function HeroSection() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: `linear-gradient(180deg, ${palette.sectionTop} 0%, ${palette.sectionBottom} 100%)`,
        border: `1px solid ${palette.cardBorder}`,
        p: 0.7,
        mb: 0.65,
        display: "flex",
        flexDirection: "column",
        gap: 0.65,
        minHeight: 140,
      }}
    >
      <NavRow />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 0.9fr",
          gap: 0.55,
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "0.38rem",
                color: palette.softText,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                mb: 0.25,
              }}
            >
              curated travel
            </Typography>

            <Typography
              sx={{
                fontSize: "0.76rem",
                lineHeight: 1.08,
                fontWeight: 700,
                color: palette.navText,
                mb: 0.3,
              }}
            >
              Escape beautifully
            </Typography>

            <Typography
              sx={{
                fontSize: "0.54rem",
                lineHeight: 1.3,
                color: palette.bodyText,
                fontWeight: 500,
                mb: 0.42,
              }}
            >
              Premium stays with smooth booking.
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: "fit-content",
              mt: "10px",
              mb: 0.35,
            }}
          >
            <FakeCursor />

            <MotionBox
              animate={{
                y: [0, 0, 1.5, 0, 0],
                scale: [1, 1, 0.965, 1, 1],
                boxShadow: [
                  "0 6px 12px rgba(0,0,0,0.08)",
                  "0 10px 18px rgba(212,176,114,0.18)",
                  "0 3px 6px rgba(0,0,0,0.12)",
                  "0 6px 12px rgba(0,0,0,0.08)",
                  "0 6px 12px rgba(0,0,0,0.08)",
                ],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                repeatDelay: 1.4,
                ease: "easeInOut",
              }}
              whileTap={{
                scale: 0.96,
                y: 1,
                boxShadow: "0 2px 4px rgba(0,0,0,0.10)",
              }}
              sx={{
                width: "fit-content",
                px: 0.7,
                py: 0.34,
                borderRadius: "999px",
                background: palette.buttonBg,
                border: "1px solid rgba(191,163,112,0.18)",
                cursor: "pointer",
                userSelect: "none",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.5rem",
                  color: palette.buttonText,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Book now
              </Typography>
            </MotionBox>
          </Box>
        </Box>

        <Box
          sx={{
            borderRadius: "28px",
            overflow: "hidden",
            minHeight: 100,
            border: "none",
            boxShadow: "none",
            background: "transparent",
          }}
        >
          <Box
            component="img"
            src={images.hero}
            alt="Luxury beach destination"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              borderRadius: "inherit",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
