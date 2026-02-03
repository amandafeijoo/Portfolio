import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import AboutVisualScene from "./AboutVisualScene";

export default function AboutVisual() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: 320, sm: 420, md: 560, lg: 680 },
        height: { xs: 300, sm: 360, md: 460, lg: 520 },

        mx: "auto",
        my: { xs: 3, md: 5 },
        mt: { xs: 2, md: 10 },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        position: "relative",

        /* 🎯 AJUSTE FINO DE POSICIÓN */
        transform: {
          xs: "translateX(28px)",
          sm: "translateX(12px)",
          md: "translateX(0px)",
          lg: "translateX(397px)",
        },
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.6], fov: 48 }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <AboutVisualScene />
      </Canvas>
    </Box>
  );
}
