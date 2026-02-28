import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import WorkHeroScene from "./WorkHeroScene";
import WorkOverlay from "./WorkOverlay";
import WorkProjectsLayer from "./WorkProjectsLayer";
import { m } from "framer-motion";

export default function HeroWorkSection() {
  const [enterWork, setEnterWork] = useState(false);
  const [workProgress, setWorkProgress] = useState(0);

  const showProjects = enterWork && workProgress > 0.6;

  // =========================
  //   BODY SCROLL LOCK
  // =========================

  useEffect(() => {
    if (enterWork) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [enterWork]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        overflow: "hidden",
        background: "#000",
        mt: -7,
        mb: 14,
      }}
    >
      {/* 🌌 THREE SCENE */}
      <WorkHeroScene enter={enterWork} onProgress={setWorkProgress} />
      {/* 🧿 OVERLAY (ENTER PORTAL) */}
      <WorkOverlay onEnter={() => setEnterWork(true)} enter={enterWork} />
      {/* 🔙 EXIT PORTAL BUTTON */}
      {showProjects && (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 98,
            zIndex: 9999,
          }}
        >
          <Button
            onClick={() => setEnterWork(false)}
            sx={{
              fontSize: {
                xs: "0.6rem",
                sm: "0.65rem",
                md: "0.7rem",
              },
              letterSpacing: "0.18em",
              color: "#f4f2ed",
              textTransform: "uppercase",
              fontWeight: 500,
              px: { xs: 3, sm: 2.3, md: 2.5 },
              py: { xs: 0.9, sm: 0.9, md: 1 },
              mt: { xs: -2, md: 0 },
              ml: { xs: -8, md: 0 },
              borderRadius: 999,
              border: "1px solid rgba(201,184,138,0.45)",
              background: "rgba(18,19,20,0.55)",
              backdropFilter: "blur(8px)",
              boxShadow: `
                0 0 14px rgba(201,184,138,0.18),
                0 0 34px rgba(201,184,138,0.12)
              `,
              "&::before": {
                content: '""',
                position: "absolute",
                inset: { xs: -6, md: -8 },
                borderRadius: 999,
                background:
                  "radial-gradient(circle, rgba(201,184,138,0.25), transparent 70%)",
                filter: "blur(14px)",
                opacity: 0.8,
                zIndex: -1,
                pointerEvents: "none",
              },
              "&:hover": {
                background: "rgba(201,184,138,0.25)",
                border: "1px solid rgba(201,184,138,0.6)",
                boxShadow: `
                  0 0 22px rgba(201,184,138,0.35),
                  0 0 60px rgba(201,184,138,0.22)
                `,
              },
              "&:focus": {
                outline: "none",
              },
              "&:focus-visible": {
                outline: "none",
              },
            }}
          >
            ← BACK
          </Button>
        </Box>
      )}
      {/* 🚀 PROJECTS PORTAL */}
      {showProjects && <WorkProjectsLayer />}
    </Box>
  );
}
