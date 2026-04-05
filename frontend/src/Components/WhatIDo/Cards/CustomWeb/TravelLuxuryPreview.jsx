import { Box } from "@mui/material";
import { palette } from "./travelLuxury.theme";
import BrowserBar from "./Sections/BrowserBar";
import HeroSection from "./Sections/HeroSection";
import IntroBlock from "./Sections/IntroBlock";
import GalleryRow from "./Sections/GalleryRow";
import InfoRow from "./Sections/InfoRow";
import StatsRow from "./Sections/StatsRow";
import ContactBlock from "./Sections/ContactBlock";
import FooterBlock from "./Sections/FooterBlock";

export default function TravelLuxuryPreview() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 640,
        borderRadius: "26px",
        overflow: "hidden",
        background: `
          linear-gradient(
            180deg,
            ${palette.shellTop} 0%,
            ${palette.shellBottom} 100%
          )
        `,
        border: `1px solid ${palette.shellBorder}`,
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.42),
          0 16px 30px ${palette.shadow}
        `,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: "3% 3% 3% 3%",
          borderRadius: "16px",
          background: `linear-gradient(180deg, ${palette.frameBgTop} 0%, ${palette.frameBgBottom} 100%)`,
          border: `1px solid ${palette.frameBorder}`,
          boxShadow: `
            0 10px 22px rgba(0,0,0,0.06),
            inset 0 1px 0 rgba(255,255,255,0.85)
          `,
          overflow: "hidden",
        }}
      >
        <BrowserBar />

        <Box
          sx={{
            p: 0.75,
            height: "calc(100% - 18px)",
            overflow: "hidden",
          }}
        >
          <HeroSection />
          <IntroBlock />
          <GalleryRow />
          <InfoRow />
          <StatsRow />
          <ContactBlock />
          <FooterBlock />
        </Box>
      </Box>
    </Box>
  );
}
