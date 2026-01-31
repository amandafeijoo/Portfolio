import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import AboutVisualScene from "./AboutVisualScene";

export default function AboutVisual() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: 360, sm: 480, md: 640, lg: 720 },

        height: { xs: 360, sm: 420, md: 520 },

        mx: "auto",
        my: { xs: 4, md: 6 },

        display: "flex",
        alignItems: "center", 
        justifyContent: "center",

        position: "relative",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 48 }}
        style={{
          width: "90%",
          height: "90%",
          left: 390,
          marginTop: 120,
        }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <AboutVisualScene />
      </Canvas>
    </Box>
  );
}
