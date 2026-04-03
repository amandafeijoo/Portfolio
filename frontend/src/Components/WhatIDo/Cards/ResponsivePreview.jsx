import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const palette = {
  shellBgTop: "#c8ab76",
  shellBgBottom: "rgba(254, 254, 254, 0.42)",
  shellBorder: "rgba(181,153,104,0.22)",
  shellInset: "rgba(255,255,255,0.42)",

  deviceBg: "#d8cec0",
  deviceBorder: "rgba(181,153,104,0.18)",
  deviceInset: "rgba(255,255,255,0.44)",

  topBarBg: "#d6ccbd",
  topBarBorder: "rgba(181,153,104,0.10)",

  dotActive: "#d3b275",
  dotIdle: "rgba(78, 60, 34, 0.18)",
  pill: "rgba(181,153,104,0.22)",

  sidebarBg: "#cec0ad",
  sidebarBorder: "rgba(181,153,104,0.12)",
  sidebarItem: "#f3ece2",
  sidebarItemActive: "#ead7b5",

  heroBg: "#efe4d3",
  heroBorder: "rgba(181,153,104,0.10)",
  heroLineStrong: "#c8ab76",
  heroLineSoft: "#d8c3a0",
  heroCard: "#e7d5b8",
  heroCardBorder: "rgba(181,153,104,0.14)",

  contentCardA: "#f4ece1",
  contentCardB: "#ede3d6",
  contentBorder: "rgba(181,153,104,0.10)",

  shadow: "rgba(0,0,0,0.16)",
};

function MiniTopBar({ mobile = false }) {
  return (
    <Box
      sx={{
        height: mobile ? 18 : 20,
        px: mobile ? 0.8 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `1px solid ${palette.topBarBorder}`,
        background: palette.topBarBg,
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
              background: dot === 0 ? palette.dotActive : palette.dotIdle,
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          width: mobile ? 18 : 34,
          height: 4,
          borderRadius: "999px",
          background: palette.pill,
        }}
      />
    </Box>
  );
}

function DeviceHero({ mobile = false }) {
  return (
    <Box
      sx={{
        height: mobile ? "24%" : "28%",
        borderRadius: "8px",
        background: palette.heroBg,
        border: `1px solid ${palette.heroBorder}`,
        mb: mobile ? 0.6 : 0.8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "8%",
          top: "18%",
          width: mobile ? "48%" : "38%",
          height: mobile ? 5 : 6,
          borderRadius: "999px",
          background: palette.heroLineStrong,
          opacity: 0.28,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: "8%",
          top: mobile ? "35%" : "38%",
          width: mobile ? "62%" : "48%",
          height: mobile ? 4 : 5,
          borderRadius: "999px",
          background: palette.heroLineSoft,
          opacity: 0.42,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: "8%",
          top: "14%",
          width: mobile ? 26 : 42,
          height: mobile ? 26 : 42,
          borderRadius: "10px",
          background: palette.heroCard,
          border: `1px solid ${palette.heroCardBorder}`,
        }}
      />
    </Box>
  );
}

function DeviceContent({ mobile = false }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        gap: mobile ? 0.55 : 0.7,
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <Box
          key={i}
          sx={{
            height: mobile ? 20 : 28,
            borderRadius: "7px",
            background:
              i % 2 === 0 ? palette.contentCardA : palette.contentCardB,
            border: `1px solid ${palette.contentBorder}`,
          }}
        />
      ))}
    </Box>
  );
}

export default function ResponsivePreview() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "26px",
        overflow: "hidden",
        background: `
          linear-gradient(
            180deg,
            ${palette.shellBgTop} 0%,
            ${palette.shellBgBottom} 100%
          )
        `,
        border: `1px solid ${palette.shellBorder}`,
        boxShadow: `
          inset 0 1px 0 ${palette.shellInset},
          0 14px 28px ${palette.shadow}
        `,
      }}
    >
      {/* DESKTOP */}
      <MotionBox
        animate={{
          scale: [1, 1.02, 1],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "5%",
          left: "10%",
          width: "82%",
          height: "56%",
          borderRadius: "14px",
          background: palette.deviceBg,
          border: `2px solid ${palette.deviceBorder}`,
          boxShadow: `
            0 18px 44px rgba(0,0,0,0.16),
            inset 0 1px 0 ${palette.deviceInset}
          `,
          overflow: "hidden",
        }}
      >
        <MiniTopBar />

        <Box sx={{ display: "flex", height: "calc(100% - 20px)" }}>
          <Box
            sx={{
              width: "24%",
              background: palette.sidebarBg,
              borderRight: `1px solid ${palette.sidebarBorder}`,
              p: 0.8,
              display: "flex",
              flexDirection: "column",
              gap: 0.55,
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <Box
                key={i}
                sx={{
                  height: 10,
                  borderRadius: "999px",
                  background:
                    i === 0 ? palette.sidebarItemActive : palette.sidebarItem,
                  border:
                    i === 0
                      ? "1px solid rgba(181,153,104,0.10)"
                      : "1px solid rgba(181,153,104,0.06)",
                }}
              />
            ))}
          </Box>

          <Box sx={{ flex: 1, p: 1 }}>
            <DeviceHero />
            <DeviceContent />
          </Box>
        </Box>
      </MotionBox>

      {/* TABLET */}
      <MotionBox
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "50%",
          left: "48%",
          width: "46%",
          height: "38%",
          borderRadius: "18px",
          background: palette.deviceBg,
          border: `2px solid ${palette.deviceBorder}`,
          boxShadow: `
            0 14px 34px rgba(0,0,0,0.16),
            inset 0 1px 0 ${palette.deviceInset}
          `,
          overflow: "hidden",
        }}
      >
        <MiniTopBar />

        <Box sx={{ p: 1 }}>
          <DeviceHero />
          <DeviceContent />
        </Box>
      </MotionBox>

      {/* MOBILE */}
      <MotionBox
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          bottom: "14%",
          left: "11%",
          width: "38%",
          height: "50%",
          borderRadius: "16px",
          background: palette.deviceBg,
          border: `1px solid ${palette.deviceBorder}`,
          boxShadow: `
            0 14px 34px rgba(0,0,0,0.16),
            inset 0 1px 0 ${palette.deviceInset}
          `,
          overflow: "hidden",
        }}
      >
        <MiniTopBar mobile />

        <Box sx={{ p: 0.8 }}>
          <DeviceHero mobile />
          <DeviceContent mobile />
        </Box>
      </MotionBox>
    </Box>
  );
}
