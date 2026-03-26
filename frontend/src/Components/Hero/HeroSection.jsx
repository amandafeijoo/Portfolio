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
        height: {
          xs: "110svh",
          sm: "110vh",
          md: "120vh",
        },
        width: "100%",
        overflow: "hidden",
        marginTop: { xs: "-11vh", sm: -1 },
        marginBottom: { xs: "-6vh", sm: 20 },
        background:
          "radial-gradient(circle at 50% 42%, rgba(231, 217, 188, 0.18), #000 70%)",
        transform: {
          xs: "translateY(2vh)",
          sm: "none",
        },
      }}
    >
      {/* THREE */}
      <HeroScene
        enter={enterStage !== "idle"}
        enterStage={enterStage}
        onArriveUniverse={handleArriveUniverse}
      />

      {/* HERO UI (idle + zoom states) */}
      <HeroOverlay onEnter={handleEnter} enterStage={enterStage} />

      {/* UNIVERSE UI */}
      <UniverseOverlay enterStage={enterStage} />
    </Box>
  );
}
