import { Box } from "@mui/material";
import OrbitThree from "../Services_Hero/Sphere/OrbitThree";
import ServicesOverview from "./ServicesOverview";
import ServicesPackages from "./ServicesPackages";
import ServicesProcess from "./ServicesProcess";
import ServicesFAQ from "./ServicesFAQ";
import ServicesCTA from "./ServicesCTA";

export default function ServicesPage() {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#f4efe6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: { xs: 0.58, sm: 0.24, md: 0.3, lg: 0.54, xl: 0.34 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: {
              xs: "90vw",
              sm: "135vw",
              md: "110vw",
              lg: "60vw",
              xl: "100vw",
            },
            height: {
              xs: "90vw",
              sm: "135vw",
              md: "110vw",
              lg: "60vw",
              xl: "100vw",
            },
            top: {
              xs: "32%",
              sm: "28%",
              md: "14%",
              lg: "12%",
              xl: "10%",
            },
            left: {
              xs: "22%",
              sm: "50%",
              md: "50%",
              lg: "30%",
              xl: "50%",
            },
          }}
        >
          <OrbitThree />
        </Box>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(circle at center,
                rgba(0,0,0,0.08) 0%,
                rgba(0,0,0,0.24) 50%,
                rgba(0,0,0,0.46) 100%)
            `,
          }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          pb: { xs: 10, md: 16 },
        }}
      >
        <ServicesOverview />
        <ServicesPackages />
        <ServicesProcess />
        <ServicesFAQ />
        <ServicesCTA />
      </Box>
    </Box>
  );
}
