import SphereScene from "./Sphere3D/SphereScene";
import HeroText from "./HeroText";
import { Box } from "@mui/material";

export default function HeroSphere() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: 520,
          sm: 640,
          md: 820,
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          top: {
            xs: 120,
            sm: 0,
            md: 0,
          },
        }}
      >
        <SphereScene />
      </Box>
      <HeroText />
    </Box>
  );
}
