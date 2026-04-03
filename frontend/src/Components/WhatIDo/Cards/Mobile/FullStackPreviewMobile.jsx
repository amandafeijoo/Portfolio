import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const palette = {
  shellTop: "#ded4c6",
  shellBottom: "#cdbfa9",
  shellBorder: "rgba(191,163,112,0.20)",

  topBarBg: "#c8b8a1",
  topBarBorder: "rgba(122,92,52,0.16)",

  frontPanelBg: "#f1e8da",
  frontPanelBorder: "#ccb089",

  frontMiniBg: "#f8f2e9",
  frontMiniBorder: "#dbc3a0",

  heroBg: "#eadac1",
  heroBorder: "#d3b58a",

  accentDark: "#8d6940",
  accentMid: "#b28d5c",
  accentSoft: "#d5b88e",

  connectorGold: "#c6a572",
  connectorBlue: "#8fa8c9",

  backPanelBg: "#dfe7f0",
  backPanelBorder: "#aabbd2",
  backendCodeBg: "#2f3135",
  backendCodeBorder: "#5f7698",
  backendText: "#f0ebe4",

  textDark: "#5e4930",
  textBlue: "#4e617d",
};

function MiniTopBarMobile() {
  return (
    <Box
      sx={{
        height: 18,
        px: 1,
        display: "flex",
        alignItems: "center",
        borderBottom: `1px solid ${palette.topBarBorder}`,
        background: palette.topBarBg,
      }}
    >
      <Box sx={{ display: "flex", gap: 0.35 }}>
        {[0, 1, 2].map((dot) => (
          <Box
            key={dot}
            sx={{
              width: 4,
              height: 4,
              ml: dot === 0.6 ? 0.5 : 0.65,
              borderRadius: "50%",
              background: dot === 0 ? "#9c7244" : "#7c6244",
            }}
          />
        ))}
      </Box>

      <Typography
        sx={{
          fontSize: "0.52rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#5c4630",
          fontWeight: 700,
          ml: 2.6,
        }}
      >
        Full-stack
      </Typography>
    </Box>
  );
}

function FrontendPanelMobile() {
  return (
    <MotionBox
      animate={{ y: [0, -1.5, 0] }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      sx={{
        borderRadius: "14px",
        background: palette.frontPanelBg,
        border: `1px solid ${palette.frontPanelBorder}`,
        p: 0.75,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.52rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#7a5a34",
          mb: 0.55,
          fontWeight: 700,
        }}
      >
        Front-end
      </Typography>

      <Box
        sx={{
          borderRadius: "10px",
          overflow: "hidden",
          border: `1px solid ${palette.frontMiniBorder}`,
          background: palette.frontMiniBg,
        }}
      >
        {/* mini nav */}
        <Box
          sx={{
            height: 14,
            px: 0.6,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#dfcfb7",
            borderBottom: "1px solid #ccb089",
          }}
        >
          <Box
            sx={{
              width: 14,
              height: 3,
              borderRadius: "999px",
              background: palette.accentDark,
            }}
          />
          <Box sx={{ display: "flex", gap: 0.25 }}>
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                sx={{
                  width: 9,
                  height: 2.5,
                  borderRadius: "999px",
                  background: palette.accentMid,
                }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ p: 0.65 }}>
          <Box
            sx={{
              height: 34,
              borderRadius: "8px",
              background: palette.heroBg,
              border: `1px solid ${palette.heroBorder}`,
              mb: 0.55,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "8%",
                top: "22%",
                width: "42%",
                height: 5,
                borderRadius: "999px",
                background: palette.accentDark,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: "8%",
                top: "42%",
                width: "58%",
                height: 3,
                borderRadius: "999px",
                background: palette.accentMid,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: "8%",
                top: "22%",
                width: 18,
                height: 18,
                borderRadius: "7px",
                background: palette.accentSoft,
                border: "1px solid #c19c66",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0.4,
            }}
          >
            <Box
              sx={{
                height: 14,
                borderRadius: "7px",
                background: "#f2e7d7",
                border: "1px solid #dbc3a0",
              }}
            />
            <Box
              sx={{
                height: 14,
                borderRadius: "7px",
                background: "#efe0ca",
                border: "1px solid #d7bb91",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          mt: 0.55,
          fontSize: "0.54rem",
          color: palette.textDark,
          lineHeight: 1.35,
        }}
      >
        What your clients see.
      </Typography>
    </MotionBox>
  );
}

function ConnectorMobile() {
  return (
    <Box
      sx={{
        position: "relative",
        height: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "56%",
          height: "2px",
          background: `linear-gradient(90deg, ${palette.connectorGold}, ${palette.connectorBlue}, ${palette.connectorGold})`,
        }}
      />

      <MotionBox
        animate={{
          x: ["-90%", "90%"],
        }}
        transition={{
          duration: 2.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: palette.connectorBlue,
          boxShadow: "0 0 0 2px rgba(143,168,201,0.18)",
        }}
      />
    </Box>
  );
}

function BackendPanelMobile() {
  return (
    <MotionBox
      animate={{ y: [0, -1.5, 0] }}
      transition={{
        duration: 3.6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.2,
      }}
      sx={{
        borderRadius: "14px",
        background: palette.backPanelBg,
        border: `1px solid ${palette.backPanelBorder}`,
        p: 0.75,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.52rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#5f7698",
          mb: 0.55,
          fontWeight: 700,
        }}
      >
        Back-end
      </Typography>

      <Box
        sx={{
          borderRadius: "10px",
          background: palette.backendCodeBg,
          border: `1px solid ${palette.backendCodeBorder}`,
          px: 0.75,
          py: 0.7,
          display: "flex",
          flexDirection: "column",
          gap: 0.4,
        }}
      >
        {["Forms & bookings", "Payments & logic", "Database & automation"].map(
          (line, i) => (
            <Box
              key={line}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.45,
              }}
            >
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: i === 1 ? "#8fa8c9" : "#d3b275",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Source Code Pro, monospace",
                  fontSize: "0.52rem",
                  color: palette.backendText,
                  lineHeight: 1.35,
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
          mt: 0.55,
          fontSize: "0.54rem",
          color: palette.textBlue,
          lineHeight: 1.35,
        }}
      >
        The system behind the experience.
      </Typography>
    </MotionBox>
  );
}

export default function FullStackPreviewMobile() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 220,
        borderRadius: "24px",
        overflow: "hidden",
        background: "linear-gradient(180deg, #e4dccf 0%, #cdc0ab 100%)",
        border: "1px solid #c9b28a",
        boxShadow: "0 10px 24px rgba(0,0,0,0.14)",
      }}
    >
      <MiniTopBarMobile />

      <Box
        sx={{
          p: 0.8,
          display: "flex",
          flexDirection: "column",
          gap: 0.6,
          height: "calc(100% - 18px)",
        }}
      >
        <FrontendPanelMobile />
        <ConnectorMobile />
        <BackendPanelMobile />
      </Box>
    </Box>
  );
}
