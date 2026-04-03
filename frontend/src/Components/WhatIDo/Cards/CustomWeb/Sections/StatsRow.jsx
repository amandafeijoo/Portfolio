import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { palette } from "../travelLuxury.theme";
import { stats } from "../travelLuxury.data";

const MotionBox = motion(Box);

export default function StatsRow() {
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
          mb: 0.45,
        }}
      >
        Travel details
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 0.35,
        }}
      >
        {stats.map(([label, value, src], i) => (
          <MotionBox
            key={label}
            animate={{ y: [0, -1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
            sx={{
              borderRadius: "4px",
              overflow: "hidden",
              background: "#fff",
              border: "2px solid rgba(191,163,112,0.05)",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                height: 48,
                overflow: "hidden",
                borderBottom: "none",
              }}
            >
              <Box
                component="img"
                src={src}
                alt={label}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>

            <Box
              sx={{
                px: 0.3,
                py: 0.28,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.24rem",
                  color: palette.softText,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  mb: 0.04,
                  fontWeight: 600,
                }}
              >
                {label}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.32rem",
                  color: palette.navText,
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                {value}
              </Typography>
            </Box>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}
