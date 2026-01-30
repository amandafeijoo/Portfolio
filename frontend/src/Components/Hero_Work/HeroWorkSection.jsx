import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import WorkHeroScene from "./WorkHeroScene";
import WorkOverlay from "./WorkOverlay";
import WorkProjectsLayer from "./WorkProjectsLayer";

export default function HeroWorkSection() {
  const [enterWork, setEnterWork] = useState(false);
  const [workProgress, setWorkProgress] = useState(0);

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
        minHeight: "100dvh",
        background: "#000",
        overflow: "hidden",
        mt: 0,
        pt: 0,
      }}
    >
      {/* 🌌 THREE SCENE */}
      <WorkHeroScene enter={enterWork} onProgress={setWorkProgress} />

      {/* 🧿 OVERLAY (ENTER PORTAL) */}
      <WorkOverlay onEnter={() => setEnterWork(true)} enter={enterWork} />

      {/* 🔙 EXIT PORTAL BUTTON */}
      {enterWork && workProgress > 0.4 && (
        <Box
          sx={{
            position: "absolute",
            top: 28,
            left: 28,
            zIndex: 40,
          }}
        >
          <Button
            onClick={() => setEnterWork(false)}
            sx={{
              position: "relative",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: "#f4f2ed",
              borderRadius: 999,
              px: 2.5,
              py: 1,
              mt: 20,
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
                inset: -8,
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
            }}
          >
            ← BACK
          </Button>
        </Box>
      )}

      {/* 🚀 PROJECTS PORTAL */}
      {workProgress > 0.6 && <WorkProjectsLayer />}
    </Box>
  );
}
