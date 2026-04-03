import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { palette } from "../CustomWeb/travelLuxury.theme";
import { images } from "../CustomWeb/travelLuxury.data";
import FakeCursor from "../CustomWeb/Sections/FakeCursor";
const MotionBox = motion(Box);

function BrowserBarMobile() {
  return (
    <Box
      sx={{
        height: 16,
        px: 0.75,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: palette.browserBg,
        borderBottom: `1px solid ${palette.browserBorder}`,
      }}
    >
      <Box sx={{ display: "flex", gap: 0.3 }}>
        {[0, 1, 2].map((dot) => (
          <Box
            key={dot}
            sx={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: dot === 0 ? palette.accent : "rgba(96,76,48,0.22)",
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          width: 22,
          height: 3,
          borderRadius: "999px",
          background: "rgba(96,76,48,0.12)",
        }}
      />
    </Box>
  );
}

function HeroSectionMobile() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: `linear-gradient(180deg, ${palette.sectionTop} 0%, ${palette.sectionBottom} 100%)`,
        border: `1px solid ${palette.cardBorder}`,
        p: 0.6,
        mb: 0.55,
      }}
    >
      {/* mini nav */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 0.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.35 }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(212,176,114,0.98), rgba(255,248,239,0.98))",
              border: "1px solid rgba(191,163,112,0.10)",
            }}
          />
          <Typography
            sx={{
              fontSize: "0.32rem",
              color: palette.navText,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.10em",
            }}
          >
            Nomad Stay
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 0.35 }}>
          {["Explore", "Book"].map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: "0.24rem",
                color: palette.bodyText,
                fontWeight: 600,
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* hero */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 0.95fr",
          gap: 0.45,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "0.24rem",
              color: palette.softText,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 600,
              mb: 0.2,
            }}
          >
            curated travel
          </Typography>

          <Typography
            sx={{
              fontSize: "0.48rem",
              lineHeight: 1.08,
              fontWeight: 700,
              color: palette.navText,
              mb: 0.2,
            }}
          >
            Escape beautifully
          </Typography>

          <Typography
            sx={{
              fontSize: "0.3rem",
              lineHeight: 1.25,
              color: palette.bodyText,
              fontWeight: 500,
              mb: 0.35,
            }}
          >
            Premium stays with smooth booking.
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "fit-content",
            }}
          >
            <FakeCursor />

            <MotionBox
              animate={{
                y: [0, 0, 1.5, 0, 0],
                scale: [1, 1, 0.965, 1, 1],
                boxShadow: [
                  "0 4px 10px rgba(0,0,0,0.06)",
                  "0 8px 14px rgba(212,176,114,0.18)",
                  "0 3px 6px rgba(0,0,0,0.10)",
                  "0 4px 10px rgba(0,0,0,0.06)",
                  "0 4px 10px rgba(0,0,0,0.06)",
                ],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                repeatDelay: 1.4,
                ease: "easeInOut",
              }}
              sx={{
                px: 0.55,
                py: 0.28,
                borderRadius: "999px",
                background: palette.buttonBg,
                border: "1px solid rgba(191,163,112,0.18)",
                position: "relative",
                zIndex: 2,
                width: "fit-content",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.28rem",
                  color: palette.buttonText,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Book now
              </Typography>
            </MotionBox>
          </Box>
        </Box>

        <Box
          sx={{
            borderRadius: "18px",
            overflow: "hidden",
            height: 78,
          }}
        >
          <Box
            component="img"
            src={images.hero}
            alt="Luxury travel destination"
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

function FeaturedRowMobile() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: `linear-gradient(180deg, ${palette.sectionTop} 0%, ${palette.sectionBottom} 100%)`,
        border: `1px solid ${palette.cardBorder}`,
        p: 0.55,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.34rem",
          color: palette.navText,
          fontWeight: 700,
          mb: 0.4,
        }}
      >
        Featured stays
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 0.3,
        }}
      >
        {[images.gallery1, images.gallery2, images.gallery3].map((src, i) => (
          <MotionBox
            key={src}
            animate={{ y: [0, -1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
            sx={{
              height: 42,
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
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
              }}
            />
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}

export default function TravelLuxuryPreviewMobile() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 220,
        borderRadius: "24px",
        overflow: "hidden",
        background: `
          linear-gradient(
            180deg,
            ${palette.shellTop} 0%,
            ${palette.shellBottom} 100%
          )
        `,
        border: `1px solid ${palette.shellBorder}`,
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.42),
          0 10px 24px ${palette.shadow}
        `,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: "5% 5% 6% 5%",
          borderRadius: "16px",
          background: `linear-gradient(180deg, ${palette.frameBgTop} 0%, ${palette.frameBgBottom} 100%)`,
          border: `1px solid ${palette.frameBorder}`,
          boxShadow: `
            0 8px 16px rgba(0,0,0,0.05),
            inset 0 1px 0 rgba(255,255,255,0.8)
          `,
          overflow: "hidden",
        }}
      >
        <BrowserBarMobile />

        <Box
          sx={{
            p: 0.55,
            height: "calc(100% - 16px)",
            display: "flex",
            flexDirection: "column",
            gap: 0.45,
          }}
        >
          <HeroSectionMobile />
          <FeaturedRowMobile />
        </Box>
      </Box>
    </Box>
  );
}
