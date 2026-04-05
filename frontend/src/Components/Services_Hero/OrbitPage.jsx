import { Box } from "@mui/material";
import OrbitSection from "./OrbitSection";

export default function OrbitPage() {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        mt: 0,
        mb: 0,
        px: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          backgroundColor: "#000",
        }}
      >
        <OrbitSection />
      </Box>
    </Box>
  );
}
