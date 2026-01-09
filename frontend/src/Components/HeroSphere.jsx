import SphereScene from "./Sphere3D/SphereScene";
import HeroText from "./HeroText";
import { Box } from "@mui/material";

export default function HeroSphere() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: 820 }}>
      <SphereScene />
      <HeroText />
    </Box>
  );
}

