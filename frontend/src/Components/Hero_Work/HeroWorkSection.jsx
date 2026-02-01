import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import WorkHeroScene from "./WorkHeroScene";
import WorkOverlay from "./WorkOverlay";
import WorkProjectsLayer from "./WorkProjectsLayer";
import { m } from "framer-motion";

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
        height: "100vh",
        overflow: "hidden",
        background: "#000",
        mt: -9,
        mb: -20,
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

              /* 🔤 TEXTO */
              fontSize: {
                xs: "0.6rem",
                sm: "0.65rem",
                md: "0.7rem",
              },
              letterSpacing: "0.18em",
              color: "#f4f2ed",

              /* 📐 ESPACIADO */
              px: { xs: 2, sm: 2.3, md: 2.5 },
              py: { xs: 0.8, sm: 0.9, md: 1 },

              /* ⬇️ MARGEN TOP RESPONSIVE */
              mt: { xs: 10, sm: 10, md: 16 },

              borderRadius: 999,
              border: "1px solid rgba(201,184,138,0.45)",
              background: "rgba(18,19,20,0.55)",
              backdropFilter: "blur(8px)",

              boxShadow: `
      0 0 14px rgba(201,184,138,0.18),
      0 0 34px rgba(201,184,138,0.12)
    `,

              /* 🌕 HALO */
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

              /* ✨ HOVER */
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
