import { Box } from "@mui/material";
import { useState } from "react";
import HeroScene from "./HeroScene";
import HeroOverlay from "./HeroOverlay";
import UniverseOverlay from "./Portal/UniverseOverlay";

export default function HeroSection() {
  const [enterStage, setEnterStage] = useState("idle");

  const handleEnter = () => {
    setEnterStage("zoom");
  };

  const handleArriveUniverse = () => {
    setEnterStage("universe");
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
      <UniverseOverlay enterStage={enterStage} />
    </Box>
  );
}