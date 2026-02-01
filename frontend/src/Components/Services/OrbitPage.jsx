import { Box } from "@mui/material";
import OrbitSection from "./OrbitSection";

export default function OrbitPage() {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: { xs: 0, md: 6 },
        mb: { xs: 0, md: 20 },
        px: { xs: 0, md: 2 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        <OrbitSection />
      </Box>
    </Box>
  );
}
