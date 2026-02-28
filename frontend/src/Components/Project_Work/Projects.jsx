import { useEffect } from "react";
import SelectedWorkSection from "./SelectedWorkSection";
import WorkHeroIntro from "./WorkHeroIntro";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <WorkHeroIntro />
      <SelectedWorkSection />
    </>
  );
}
