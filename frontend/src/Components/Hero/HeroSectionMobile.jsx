import { Box, Typography,Button } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSceneMobile from "./HeroSceneMobile";

export default function HeroSectionMobile() {
  const [enterStage, setEnterStage] = useState("idle");
  const navigate = useNavigate();
  const hasNavigatedRef = useRef(false);

  const handleEnter = () => {
    setEnterStage("zoom");
    hasNavigatedRef.current = false;
  };

  const handleArriveUniverse = () => {
    if (hasNavigatedRef.current) return;
    hasNavigatedRef.current = true;

    setEnterStage("universe");

    setTimeout(() => {
      navigate("/contact");
    }, 900);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 62%, rgba(231,217,188,0.06), #000 74%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <HeroSceneMobile
          enter={enterStage !== "idle"}
          enterStage={enterStage}
          onArriveUniverse={handleArriveUniverse}
        />
      </Box>

      {enterStage === "zoom" && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.4rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textShadow:
                "0 0 10px rgba(0,0,0,0.35), 0 0 22px rgba(200,164,106,0.18)",
            }}
          >
            <Box component="span" sx={{ color: "#f4efe6" }}>
              Webcode-
            </Box>
            <Box component="span" sx={{ color: "#e7c98f" }}>
              Art
            </Box>
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          position: "relative",
          zIndex: 20,
          minHeight: "100svh",
          display: enterStage === "idle" ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "center",
          px: 3,
          pt: "18svh",
          pb: "10svh",
        }}
      >
        <Typography
          sx={{
            mb: 2.5,
            color: "#c9b07a",
            fontSize: "0.62rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          Web design · development · creative
        </Typography>

        <Box sx={{ maxWidth: 340, mb: 2.5 }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.15rem",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "#f4f0e8",
              mt: 4.5,
            }}
          >
            Bringing ideas
            <Box component="span" sx={{ color: "#e8c98f", display: "block" }}>
              to life through
            </Box>
            thoughtful design
            <Box component="span" sx={{ color: "#e8c98f", display: "block" }}>
              and development.
            </Box>
          </Typography>
        </Box>

        <Typography
          sx={{
            maxWidth: 315,
            color: "rgba(255,255,255,0.78)",
            fontSize: "1rem",
            lineHeight: 1.75,
            mt: 2.5,
            mb: 4.5,
          }}
        >
          I design and build websites that help brands connect, grow and stand
          out online.
        </Typography>
<Button
  onClick={handleEnter}
  sx={{
    position: "relative",
    isolation: "isolate",
    overflow: "visible",

    display: "block",
    mx: "auto",
    width: "fit-content",

    px: { xs: "16px", sm: "18px" },
    py: { xs: "8px", sm: "10px" },

    fontFamily: '"Source Code Pro", monospace',
    fontSize: { xs: "0.60rem", sm: "0.7rem" },
    letterSpacing: { xs: "0.16em", sm: "0.25em" },
    textTransform: "uppercase",

    color: "#e6d5bc",
    border: "1px solid rgba(230, 213, 188, 0.45)",
    borderRadius: "999px",

    background: "rgba(18, 19, 20, 0.55)",
    backdropFilter: "blur(10px)",

    boxShadow: `
      0 0 16px rgba(230, 213, 188, 0.25),
      0 0 48px rgba(230, 213, 188, 0.15)
    `,

    transition:
      "transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",

    "&::before": {
      content: '""',
      position: "absolute",
      inset: { xs: -10, sm: -14 },
      borderRadius: "999px",
      background:
        "radial-gradient(circle, rgba(230, 213, 188, 0.35), transparent 70%)",
      filter: { xs: "blur(22px)", sm: "blur(26px)" },
      opacity: 0.85,
      zIndex: -1,
      pointerEvents: "none",
      transition: "opacity 0.35s ease, filter 0.35s ease",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "999px",
      background:
        "radial-gradient(60% 60% at 50% 0%, rgba(230, 213, 188, 0.22), transparent 70%)",
      opacity: 0.6,
      pointerEvents: "none",
    },

    "&:hover": {
      transform: "translateY(-2px)",
      color: "#e6d5bc",
      background: "rgba(230, 213, 188, 0.18)",
      border: "1px solid rgba(230, 213, 188, 0.45)",
      boxShadow: `
        0 0 28px rgba(230, 213, 188, 0.45),
        0 0 80px rgba(230, 213, 188, 0.25)
      `,
      "&::before": {
        opacity: 1,
        filter: { xs: "blur(26px)", sm: "blur(30px)" },
      },
    },

    "&:active": {
      transform: "translateY(0)",
    },

    "&:focus": { outline: "none" },
    "&:focus-visible": { outline: "none" },
    "&.Mui-focusVisible": { outline: "none" },

    "&.Mui-disabled": {
      opacity: 0.4,
      boxShadow: "none",
      "&::before": { opacity: 0 },
    },
  }}
>
  Let’s create
</Button>  
        
        </Box>
    </Box>
  );
}