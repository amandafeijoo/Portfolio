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
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 42%, rgba(231, 217, 188, 0.18), #000 70%)",
      }}
    >
      {/* THREE BACKGROUND */}
      <HeroScene enter={enterSphere} />

      {/* TEXT / CTA */}
      <HeroOverlay onEnter={handleEnter} enter={enterSphere} />
    </Box>
  );
}
