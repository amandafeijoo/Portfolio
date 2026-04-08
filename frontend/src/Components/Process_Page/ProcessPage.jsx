import { Box } from "@mui/material";
import HeroScene from "../Hero/HeroScene";
import ProcessHeroText from "./ProcessHeroText";
import ProcessIntro from "./ProcessIntro";
import ProcessStepsDetailed from "./ProcessStepsDetailed";
import ProcessWhatYouCanExpect from "./ProcessWhatYouCanExpect";
import ProcessCollaboration from "./ProcessCollaboration";
import ProcessFAQ from "./ProcessFAQ";
import ProcessCTA from "./ProcessCTA";

export default function ProcessPage() {
  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#f4efe6",
        overflow: "hidden",
      }}
    >
      {/* FIXED 3D BACKGROUND */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: { xs: 0.18, sm: 0.22, md: 0.28, lg: 0.42, xl: 0.34 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: {
              xs: "140vw",
              sm: "120vw",
              md: "95vw",
              lg: "82vw",
              xl: "76vw",
            },
            height: {
              xs: "140vw",
              sm: "120vw",
              md: "95vw",
              lg: "82vw",
              xl: "76vw",
            },
            left: "50%",
            top: {
              xs: "52%",
              sm: "50%",
              md: "50%",
              lg: "50%",
              xl: "48%",
            },
            transform: "translate(-50%, -50%)",
          }}
        >
          <HeroScene />
        </Box>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(circle at center,
                rgba(0,0,0,0.06) 0%,
                rgba(0,0,0,0.26) 40%,
                rgba(0,0,0,0.52) 72%,
                rgba(0,0,0,0.72) 100%)
            `,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.18) 0%,
                rgba(0,0,0,0.08) 18%,
                rgba(0,0,0,0.12) 42%,
                rgba(0,0,0,0.24) 70%,
                rgba(0,0,0,0.38) 100%
              )
            `,
          }}
        />
      </Box>

      {/* PAGE CONTENT */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <ProcessHeroText />
        <Box
          sx={{
            width: "100%",
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
            pb: { xs: 10, md: 16 },
          }}
        >
          <ProcessIntro />
          <ProcessStepsDetailed />
          <ProcessWhatYouCanExpect />
          <ProcessCollaboration />
          <ProcessFAQ />
          <ProcessCTA />
        </Box>
      </Box>
    </Box>
  );
}
