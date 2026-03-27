import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import WorkHeroScene from "./WorkHeroScene";
import WorkOverlay from "./WorkOverlay";
import WorkProjectsLayer from "./WorkProjectsLayer";

export default function HeroWorkSection() {
  const [enterWork, setEnterWork] = useState(false);
  const [workProgress, setWorkProgress] = useState(0);
  const [projectsVisible, setProjectsVisible] = useState(false);

  const showProjects = projectsVisible;

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

  useEffect(() => {
    if (enterWork && workProgress > 0.6) {
      setProjectsVisible(true);
    }

    if (!enterWork) {
      setProjectsVisible(false);
    }
  }, [enterWork, workProgress]);

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
      <WorkHeroScene enter={enterWork} onProgress={setWorkProgress} />

      <WorkOverlay onEnter={() => setEnterWork(true)} enter={enterWork} />
      {showProjects && (
  <Box
    sx={{
      position: "fixed",
      top: { xs: 88, sm: 96, md: 104 },
      left: { xs: 16, sm: 24, md: 32 },
      zIndex: 9999,
    }}
  >
    <Button
      onClick={() => setEnterWork(false)}
      sx={{
        position: "relative",
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

      {showProjects && <WorkProjectsLayer />}
    </Box>
  );
}