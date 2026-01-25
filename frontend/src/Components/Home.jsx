import React, { lazy, Suspense, useEffect, useState } from "react";

/* =========================
   LAZY SECTIONS
========================= */
const HeroSphere = lazy(() => import("./HeroSphere"));
const WhatIDoText = lazy(() => import("./WhatIDoText"));
const WhatIDo = lazy(() => import("./WhatIDo"));
const FloatingHintMenu = lazy(() => import("./FloatingHintMenu"));
const OrbitSection = lazy(() => import("./Services/OrbitSection"));
const ProcessSection = lazy(() => import("./ProcessSection"));
const WorkSection = lazy(() => import("./WorkSection"));
const WorkFolders = lazy(() => import("./WorkFolders"));
const HomeContactInvite = lazy(() =>
  import("./HomeContactInvite/HomeContactInvite")
);

export default function Home() {
  const [showHero, setShowHero] = useState(false);

  /* =========================
     DEFER HERO (SEGURO)
  ========================= */
  useEffect(() => {
    const id =
      "requestIdleCallback" in window
        ? requestIdleCallback(() => setShowHero(true))
        : setTimeout(() => setShowHero(true), 100);

    return () => {
      if ("cancelIdleCallback" in window) cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  return (
    <>
      {/* =========================
          HERO (SIEMPRE VISIBLE)
      ========================= */}
      <Suspense fallback={null}>{showHero && <HeroSphere />}</Suspense>

      {/* =========================
          CONTENIDO
      ========================= */}
      <Suspense fallback={null}>
        <WhatIDoText />
        <WhatIDo />
        <FloatingHintMenu />
      </Suspense>

      <Suspense fallback={null}>
        <OrbitSection />
        <ProcessSection />
      </Suspense>

      <Suspense fallback={null}>
        <WorkSection />
        <WorkFolders />
      </Suspense>
      <Suspense fallback={null}>
        <HomeContactInvite />
      </Suspense>
    </>
  );
}

// import React from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AnimatedBackground from "./AnimatedBackground";
// import AboutSummary from "./AboutSummary";
// import SummaryProjects from "./SummaryProjects";
// import ContactSummary from "./ContactSummary";
// import StyledCtaButton from "./styles/HomeButton.styles";
// import AnimatedLetter from "./styles/HomeLetter.styles";
// import { StyledText, NameText, StyledP } from "./styles/HomeText.styles";
// import { MainContainer, TextContainer } from "./styles/HomeMainContainer.styles";
// import {Circle1,Circle2,Circle3,Circle4,Circle5,Circle6,Circle7,Circle8,Circle9,Circle10,
// Circle11,Circle12,Circle13,} from "./styles/HomeCircles.styles";

// const projects = [
//   {
//     title: "Arrazola Psicología",
//     comment:
//       "Professional website developed for a licensed health psychologist, with online booking and testimonials.",
//     technologies: "React, Django, PostgreSQL",
//     videoSrc:
//       "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:eco,w_800/v1748816240/danielaarrazolawebsite_sfuxjm.mp4",
//     githubLink:
//       "https://github.com/amandafeijoo/Portfolio-Daniela-Arrazola.git",
//     web: "https://www.arrazolapsicologia.com",
//   },
//   {
//     videoSrc:
//       "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:eco,w_800/v1748814437/fitlifegiphy_njxqtl.mov",
//     title: "FitLife",
//     comment: "Preliminary project for my master's thesis, graded 8.6/10.",
//     technologies: "React, Node.js, Express, MongoDB",
//     githubLink: "https://github.com/amandafeijoo/FitLife-Project.git",
//   },
//   {
//     videoSrc:
//       "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:eco,w_800/v1748814073/dinebookergiphy_tlwmjs.mov",
//     title: "DineBooker",
//     comment: "Final thesis project, graded 10/10.",
//     technologies: "React, Django, PostgreSQL",
//     githubLink: "https://github.com/amandafeijoo/DineBookerTFM.git",
//   },
// ];

// const Home = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const navigate = useNavigate();

//   return (
//     <>
//       <MainContainer>
//         <Circle1 />
//         <Circle2 />
//         <Circle3 />
//         <Circle4 />
//         <Circle5 />
//         <Circle6 />
//         <Circle7 />
//         <Circle8 />
//         <Circle9 />
//         <Circle10 />
//         <Circle11 />
//         <Circle12 />
//         <Circle13 />
//         <TextContainer>
//           <StyledText>
//             <AnimatedLetter>H</AnimatedLetter>ELLO,
//           </StyledText>
//           <NameText>I´m Amanda</NameText>
//           <StyledCtaButton onClick={() => navigate("/projects")}>
//             View My Projects
//           </StyledCtaButton>
//           <StyledP>
//             Full-Stack Web Developer <br />
//             Master’s Degree in Professional Web Development and Applications,
//             Universidad Europea Madrid
//           </StyledP>
//         </TextContainer>
//         <AnimatedBackground />
//       </MainContainer>
//       <AboutSummary />
//       <SummaryProjects projects={projects} />
//       <ContactSummary />
//     </>
//   );
// };

// export default Home;
