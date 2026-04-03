import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const palette = {
  shellBgTop: "#c8ab76",
  shellBgBottom: "rgba(148, 146, 146, 0.42)",
  shellBorder: "rgba(181,153,104,0.22)",
  shellInset: "rgba(255,255,255,0.42)",

  deviceBg: "#d8cec0",
  deviceBorder: "rgba(46, 39, 28, 0.18)",
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
        height: mobile ? 14 : 16,
        px: mobile ? 0.55 : 0.7,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `1px solid ${palette.topBarBorder}`,
        background: palette.topBarBg,
      }}
    >
      <Box sx={{ display: "flex", gap: 0.28 }}>
        {[0, 1, 2].map((dot) => (
          <Box
            key={dot}
            sx={{
              width: mobile ? 3 : 3.5,
              height: mobile ? 3 : 3.5,
              borderRadius: "50%",
              background: dot === 0 ? palette.dotActive : palette.dotIdle,
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          width: mobile ? 14 : 22,
          height: 3,
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
        height: mobile ? 28 : 34,
        borderRadius: mobile ? "6px" : "7px",
        background: palette.heroBg,
        border: `1px solid ${palette.heroBorder}`,
        mb: mobile ? 0.45 : 0.55,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "8%",
          top: "20%",
          width: mobile ? "48%" : "40%",
          height: mobile ? 3 : 4,
          borderRadius: "999px",
          background: palette.heroLineStrong,
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: "8%",
          top: "42%",
          width: mobile ? "62%" : "54%",
          height: mobile ? 2.5 : 3,
          borderRadius: "999px",
          background: palette.heroLineSoft,
          opacity: 0.42,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: "8%",
          top: "18%",
          width: mobile ? 14 : 18,
          height: mobile ? 14 : 18,
          borderRadius: mobile ? "5px" : "6px",
          background: palette.heroCard,
          border: `1px solid ${palette.heroCardBorder}`,
        }}
      />
    </Box>
  );
}

function DesktopContent() {
  return (
    <Box sx={{ display: "flex", height: "calc(100% - 16px)" }}>
      <Box
        sx={{
          width: "22%",
          background: palette.sidebarBg,
          borderRight: `1px solid ${palette.sidebarBorder}`,
          p: 0.5,
          display: "flex",
          flexDirection: "column",
          gap: 0.35,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <Box
            key={i}
            sx={{
              height: 7,
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

      <Box sx={{ flex: 1, p: 0.55 }}>
        <DeviceHero />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0.35,
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <Box
              key={i}
              sx={{
                height: 14,
                borderRadius: "6px",
                background:
                  i % 2 === 0 ? palette.contentCardA : palette.contentCardB,
                border: `1px solid ${palette.contentBorder}`,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function MobileContent() {
  return (
    <Box sx={{ p: 0.5 }}>
      <DeviceHero mobile />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 0.32,
        }}
      >
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              height: 12,
              borderRadius: "5px",
              background:
                i % 2 === 0 ? palette.contentCardA : palette.contentCardB,
              border: `1px solid ${palette.contentBorder}`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function ResponsivePreviewMobile() {
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
            ${palette.shellBgTop} 0%,
            ${palette.shellBgBottom} 100%
          )
        `,
        border: `1px solid ${palette.shellBorder}`,
        boxShadow: `
          inset 0 1px 0 ${palette.shellInset},
          0 10px 24px ${palette.shadow}
        `,
      }}
    >
      {/* DESKTOP BACK */}
      <MotionBox
        animate={{
          y: [0, -4, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "16%",
          left: "15%",
          transform: "translateX(-50%)",
          width: "72%",
          height: "57%",
          borderRadius: "14px",
          background: palette.deviceBg,
          border: `3px solid ${palette.deviceBorder}`,
          boxShadow: `
            0 12px 24px rgba(0,0,0,0.14),
            inset 0 1px 0 ${palette.deviceInset}
          `,
          overflow: "hidden",
        }}
      >
        <MiniTopBar />
        <DesktopContent />
      </MotionBox>

      {/* MOBILE FRONT */}
      <MotionBox
        animate={{
          y: [0, -8, 0],
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
          left: "53%",
          transform: "translateX(-50%)",
          width: "28%",
          height: "58%",
          borderRadius: "14px",
          background: palette.deviceBg,
          border: `3px solid ${palette.deviceBorder}`,
          boxShadow: `
            0 12px 22px rgba(0,0,0,0.16),
            inset 0 1px 0 ${palette.deviceInset}
          `,
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <MiniTopBar mobile />
        <MobileContent />
      </MotionBox>
    </Box>
  );
}
