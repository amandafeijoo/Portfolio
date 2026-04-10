import { useMediaQuery } from "@mui/material";
import HeroSectionDesktop from "./HeroSectionDesktop";
import HeroSectionMobile from "./HeroSectionMobile";

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />;
}