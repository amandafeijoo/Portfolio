import { Box } from "@mui/material";
import HeroScene from "./HeroScene";
import { useState } from "react";
import HeroOverlay from "./HeroOverlay";
import { m } from "framer-motion";

export default function HeroSection() {
  const [enterSphere, setEnterSphere] = useState(false);

  const handleEnter = () => {
    setEnterSphere(true);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* THREE BACKGROUND */}
      <HeroScene enter={enterSphere} />

      {/* TEXT / CTA */}
      <HeroOverlay onEnter={handleEnter} enter={enterSphere} />
    </Box>
  );
}

