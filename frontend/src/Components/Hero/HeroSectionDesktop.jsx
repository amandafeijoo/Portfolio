import { Box } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroScene from "./HeroScene";
import HeroOverlay from "./HeroOverlay";

export default function HeroSectionDesktop() {
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

    navigate("/contact");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 42%, rgba(231, 217, 188, 0.18), #000 70%)",
      }}
    >
      <HeroScene
        enter={enterStage !== "idle"}
        enterStage={enterStage}
        onArriveUniverse={handleArriveUniverse}
      />

      <HeroOverlay onEnter={handleEnter} enterStage={enterStage} />

      {enterStage === "universe" && <UniverseOverlay enterStage={enterStage} />}
    </Box>
  );
}
