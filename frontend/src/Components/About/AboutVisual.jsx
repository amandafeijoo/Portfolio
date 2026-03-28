import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import AboutVisualScene from "./AboutVisualScene";

export default function AboutVisual() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: 320, sm: 420, md: 560, lg: 680, xl: 680 },
        height: { xs: 300, sm: 360, md: 460, lg: 520, xl: 520 },

        mx: "auto",
        my: { xs: 3, md: 5 },
        mt: { xs: 2, md: 10 },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        position: "relative",

        left: {
          xs: 20,
          sm: 12,
          md: 0,
          lg: 390,
          xl: 640,
        },
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.6], fov: 48 }}
        style={{ width: "100%", height: "100%" }}
      >
        <group position={[0, 0, 0]}>
          <AboutVisualScene />
        </group>
      </Canvas>
    </Box>
  );
}
