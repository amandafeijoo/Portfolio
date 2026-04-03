import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { palette } from "../travelLuxury.theme";
import { galleryItems } from "../travelLuxury.data";

const MotionBox = motion(Box);

export default function GalleryRow() {
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
      {/* TITLE */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.6rem",
          color: palette.navText,
          fontWeight: 700,
          mb: 0.45,
        }}
      >
        Featured stays
      </Typography>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 0.35,
        }}
      >
        {galleryItems.map((src, i) => (
          <MotionBox
            key={src}
            animate={{ y: [0, -1, 0] }}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
            sx={{
              position: "relative",
              height: 56,
              borderRadius: "28px",
              overflow: "hidden",

              // 🔥 IMPORTANTE → elimina sombras feas
              border: "none",
              boxShadow: "none",
              background: "transparent",

              cursor: "pointer",
            }}
          >
            {/* IMAGE */}
            <Box
              component="img"
              src={src}
              alt={`Travel destination ${i + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                borderRadius: "inherit",

                // 🔥 mejora nitidez
                imageRendering: "auto",
              }}
            />

            {/* 🔥 overlay luxury (hover) */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.25))",
                opacity: 0,
                transition: "0.3s ease",
                borderRadius: "inherit",

                "&:hover": {
                  opacity: 1,
                },
              }}
            />
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}
