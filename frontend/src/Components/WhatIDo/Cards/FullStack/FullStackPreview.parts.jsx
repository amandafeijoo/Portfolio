import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { palette } from "./FullStackPreview.constants";
import { images } from "./FullStackPreview.images";

const MotionBox = motion(Box);

function SiteTopBar() {
  return (
    <Box
      sx={{
        height: 18,
        px: 0.8,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: palette.siteNavBg,
        borderBottom: `1px solid ${palette.siteNavBorder}`,
      }}
    >
      <Box
        sx={{
          width: 18,
          height: 4,
          borderRadius: "999px",
          background: palette.siteNavLogo,
        }}
      />

      <Box sx={{ display: "flex", gap: 0.4 }}>
        {["Home", "Work", "Contact"].map((item) => (
          <Typography
            key={item}
            sx={{
              fontSize: "0.26rem",
              color: palette.siteNavItem,
              fontWeight: 700,
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

function FrontHero() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: palette.heroBg,
        border: `1px solid ${palette.heroBorder}`,
        mb: 0.7,
        p: 0.7,
        display: "flex",
        justifyContent: "space-between",
        gap: 0.7,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: "0.42rem",
            fontWeight: 700,
            color: palette.heroTitle,
            lineHeight: 1.2,
          }}
        >
          Elegant digital experiences
        </Typography>

        <Typography
          sx={{
            mt: 0.28,
            fontSize: "0.28rem",
            color: palette.heroText,
            lineHeight: 1.3,
          }}
        >
          Design and functionality working together.
        </Typography>

        <Box
          sx={{
            mt: 0.6,
            px: 0.55,
            py: 0.22,
            borderRadius: "999px",
            background: palette.buttonBg,
            color: palette.buttonText,
            fontSize: "0.26rem",
            fontWeight: 700,
            width: "fit-content",
          }}
        >
          Get started
        </Box>
      </Box>

      <Box
        sx={{
          width: 26,
          minWidth: 26,
          height: 26,
          borderRadius: "8px",
          overflow: "hidden",
          border: `1px solid ${palette.heroImageBorder}`,
        }}
      >
        <Box
          component="img"
          src={images.hero}
          alt="Hero preview"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}

function FrontCard({ title, text, image, tone = "a" }) {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        overflow: "hidden",
        background: tone === "a" ? palette.cardA : palette.cardB,
        border: `1px solid ${
          tone === "a" ? palette.cardBorderA : palette.cardBorderB
        }`,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: 20,
          objectFit: "cover",
          display: "block",
        }}
      />

      <Box sx={{ p: 0.4 }}>
        <Typography
          sx={{
            fontSize: "0.28rem",
            fontWeight: 700,
            color: palette.heroTitle,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 0.2,
            fontSize: "0.24rem",
            color: palette.heroText,
            lineHeight: 1.3,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export function FrontendPanel() {
  return (
    <MotionBox
      animate={{ y: [0, -2, 0] }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      sx={{
        borderRadius: "16px",
        background: palette.frontBg,
        border: `1px solid ${palette.frontBorder}`,
        p: 1.1,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.64rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: palette.frontTitle,
          mb: 0.8,
          fontWeight: 600,
        }}
      >
        Front-end
      </Typography>

      <Box
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          border: `1px solid ${palette.siteShellBorder}`,
          background: palette.siteShell,
        }}
      >
        <SiteTopBar />

        <Box sx={{ p: 0.8 }}>
          <FrontHero />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0.55,
            }}
          >
            <FrontCard
              title="Booking flow"
              text="Simple journey for your client."
              image={images.card1}
              tone="a"
            />
            <FrontCard
              title="Secure payments"
              text="Clear and trusted checkout."
              image={images.card2}
              tone="b"
            />
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          mt: 0.8,
          fontSize: "0.72rem",
          color: palette.frontText,
          lineHeight: 1.45,
        }}
      >
        What your clients see and interact with.
      </Typography>
    </MotionBox>
  );
}

export function Connector() {
  return (
    <Box
      sx={{
        position: "relative",
        height: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "68%",
          height: "2px",
          background: `linear-gradient(90deg, ${palette.connectorLineA}, ${palette.connectorLineB}, ${palette.connectorLineA})`,
        }}
      />

      <MotionBox
        animate={{ x: ["-140%", "140%"] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: palette.connectorDot,
          boxShadow: "0 0 0 3px rgba(143,168,201,0.18)",
        }}
      />
    </Box>
  );
}

export function BackendPanel() {
  return (
    <MotionBox
      animate={{ y: [0, -2, 0] }}
      transition={{
        duration: 3.6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.2,
      }}
      sx={{
        borderRadius: "16px",
        background: palette.backBg,
        border: `1px solid ${palette.backBorder}`,
        p: 1.1,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.64rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: palette.backTitle,
          mb: 0.8,
          fontWeight: 600,
        }}
      >
        Back-end
      </Typography>

      <Box
        sx={{
          borderRadius: "12px",
          background: palette.codeBg,
          border: `1px solid ${palette.codeBorder}`,
          px: 1,
          py: 0.9,
          display: "flex",
          flexDirection: "column",
          gap: 0.55,
        }}
      >
        {["Forms & bookings", "Payments & logic", "Database & automation"].map(
          (line, i) => (
            <Box
              key={line}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.55,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: i === 1 ? palette.codeDotB : palette.codeDotA,
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Source Code Pro, monospace",
                  fontSize: "0.72rem",
                  color: palette.codeText,
                  lineHeight: 1.4,
                }}
              >
                {line}
              </Typography>
            </Box>
          )
        )}
      </Box>

      <Typography
        sx={{
          mt: 0.8,
          fontSize: "0.72rem",
          color: palette.backText,
          lineHeight: 1.45,
        }}
      >
        The system that keeps everything running.
      </Typography>
    </MotionBox>
  );
}
