import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function MiniTopBar() {
  return (
    <Box
      sx={{
        height: 20,
        px: 1,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid rgba(122,92,52,0.16)",
        fontFamily: "Inter, sans-serif",
        background: "#b8aa95",
      }}
    >
      <Box sx={{ display: "flex", gap: 0.45 }}>
        {[0, 1, 2].map((dot) => (
          <Box
            key={dot}
            sx={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: dot === 0 ? "#9c7244" : "#7c6244",
            }}
          />
        ))}
      </Box>

      <Typography
        sx={{
          fontSize: "0.62rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#5c4630",
          fontWeight: 600,
          ml: 2.5,
        }}
      >
        Full-stack
      </Typography>
    </Box>
  );
}

function FrontendPanel() {
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
        background: "#efe5d6",
        border: "1px solid #c9b28a",
        p: 1.1,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.64rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#7a5a34",
          mb: 0.8,
          fontWeight: 600,
        }}
      >
        Front-end
      </Typography>

      {/* MINI WEBSITE */}
      <Box
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid #d5c1a1",
          background: "#f7f0e6",
        }}
      >
        {/* nav */}
        <Box
          sx={{
            height: 18,
            px: 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#dfcfb7",
            borderBottom: "1px solid #ccb089",
          }}
        >
          <Box
            sx={{
              width: 18,
              height: 4,
              borderRadius: "999px",
              background: "#9c7244",
            }}
          />
          <Box sx={{ display: "flex", gap: 0.4 }}>
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                sx={{
                  width: 12,
                  height: 3,
                  borderRadius: "999px",
                  background: "#b28d5c",
                }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ p: 0.8 }}>
          {/* hero */}
          <Box
            sx={{
              height: 42,
              borderRadius: "10px",
              background: "#eadac1",
              border: "1px solid #d3b58a",
              mb: 0.7,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "8%",
                top: "20%",
                width: "38%",
                height: 6,
                borderRadius: "999px",
                background: "#8d6940",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: "8%",
                top: "40%",
                width: "54%",
                height: 4,
                borderRadius: "999px",
                background: "#b28d5c",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: "8%",
                top: "20%",
                width: 22,
                height: 22,
                borderRadius: "8px",
                background: "#d5b88e",
                border: "1px solid #c19c66",
              }}
            />
          </Box>

          {/* content cards */}
          <Box
            sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0.55 }}
          >
            <Box
              sx={{
                height: 20,
                borderRadius: "8px",
                background: "#f2e7d7",
                border: "1px solid #dbc3a0",
              }}
            />
            <Box
              sx={{
                height: 20,
                borderRadius: "8px",
                background: "#efe0ca",
                border: "1px solid #d7bb91",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          mt: 0.8,
          fontSize: "0.72rem",
          color: "#5e4930",
          lineHeight: 1.45,
        }}
      >
        What your clients see and interact with.
      </Typography>
    </MotionBox>
  );
}

function Connector() {
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
          background: "linear-gradient(90deg, #c6a572, #8fa8c9, #c6a572)",
        }}
      />

      <MotionBox
        animate={{
          x: ["-140%", "140%"],
        }}
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
          background: "#8fa8c9",
          boxShadow: "0 0 0 3px rgba(143,168,201,0.18)",
        }}
      />
    </Box>
  );
}

function BackendPanel() {
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
        background: "#dfe7f0",
        border: "1px solid #aabbd2",
        p: 1.1,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.64rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#5f7698",
          mb: 0.8,
          fontWeight: 600,
        }}
      >
        Back-end
      </Typography>

      <Box
        sx={{
          borderRadius: "12px",
          background: "#2f3135",
          border: "1px solid #5f7698",
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
                  background: i === 1 ? "#8fa8c9" : "#d3b275",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Source Code Pro, monospace",
                  fontSize: "0.72rem",
                  color: "#f0ebe4",
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
          color: "#4e617d",
          lineHeight: 1.45,
        }}
      >
        The system that keeps everything running.
      </Typography>
    </MotionBox>
  );
}

export default function FullStackPreview() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "26px",
        overflow: "hidden",
        background: "linear-gradient(180deg, #e4dccf 0%, #cdc0ab 100%)",
        border: "1px solid #c9b28a",
        boxShadow: "0 14px 28px rgba(0,0,0,0.16)",
      }}
    >
      <MiniTopBar />

      <Box
        sx={{
          p: 1.2,
          display: "flex",
          flexDirection: "column",
          gap: 0.95,
          height: "calc(100% - 20px)",
        }}
      >
        <FrontendPanel />
        <Connector />
        <BackendPanel />
      </Box>
    </Box>
  );
}
