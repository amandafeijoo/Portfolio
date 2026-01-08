import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ProjectProvider } from "./Context/ProjectContext";
import { CursorProvider } from "./Context/CursorContext";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Home from "./Components/Home";
import TechStack from "./Components/TechStack";
import ProfileInfoBox from "./Components/ProfileInfoBox";
import Projects from "./Components/Projects";
import ProjectCard from "./Components/ProjectCard";
import TypingEffect from "./Components/TypingEffect";
import RotatingTypingEffect from "./Components/RotatingTypingEffect";
import ContactForm from "./Components/ContactForm";
import ContactPage from "./Components/ContactPage";
import ContactInfoItem from "./Components/ContactInfoItem";
import Circles from "./Components/Circles";
import AboutSummary from "./Components/AboutSummary";
import SummaryProjects from "./Components/SummaryProjects";
import ContactSummary from "./Components/ContactSummary";
import Footer from "./Components/Footer";
import DemoPage from "./Components/DemoPage";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import LegalNotice from "./Components/LegalNotice";
// import HeroPro from "./Components/HeroPro";
import WhatIDo from "./Components/WhatIDo";
import FloatingHintMenu from "./Components/FloatingHintMenu";
import CustomCursor from "./Components/CustomCursor";
import WhatIDoText from "./Components/WhatIDoText";
import OrbitSection from "./Components/OrbitSection";
import ProcessSection from "./Components/ProcessSection";
import WorkSection from "./Components/WorkSection";
import HeroSphere from "./Components/HeroSphere";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  width: 100%;
  margin: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: env(safe-area-inset-bottom);

  @media (max-width: 480px) {
    padding: 5px; /* Móviles pequeños */
  }

  @media (max-width: 768px) {
    padding: 10px; /* Móviles */
  }

  @media (max-width: 1024px) {
    padding: 15px; /* Tabletas */
  }

  @media (max-width: 1200px) {
    padding: 20px; /* Pantallas pequeñas */
  }

  @media (min-width: 1201px) {
    padding: 25px; /* Pantallas grandes */
  }
`;

const GlobalStyle = createGlobalStyle`
body {
  ${"" /* font-family: 'Source Code Pro', monospace; */}
  font-family: "Inter", sans-serif;
  background: #000;
  ${
    "" /* background-image: 
    linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent); */
  }
  background-size: 200px 200px;
  border: 2px solid rgba(201,169,106,0.35);  
  min-height: 100vh;
  transition: background-position 0.1s;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color-scheme: dark;
  }

  /* 👇 Mantener cursor normal en inputs */
  input, textarea, button, select {
    cursor: auto;
  }
`;

function App() {
  return (
    <CursorProvider>
      <AppContainer>
        <GlobalStyle />
        <CustomCursor />
        <ProjectProvider>
          <Router>
            <Header />
            <HeroSphere />
            {/* <HeroPro /> */}
            <WhatIDoText />
            <WhatIDo />
            <FloatingHintMenu />
            <OrbitSection />
            <ProcessSection />
            <WorkSection />
            <ContactSummary />
            <div style={{ height: "40px" }} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutMe" element={<AboutMe />} />
              <Route path="/tech-stack" element={<TechStack />} />
              <Route path="/profile-info-box" element={<ProfileInfoBox />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project-card" element={<ProjectCard />} />
              <Route path="/typing-effect" element={<TypingEffect />} />
              <Route
                path="/rotating-typing-effect"
                element={<RotatingTypingEffect />}
              />
              <Route path="/contactform" element={<ContactForm />} />
              <Route path="/contactpage" element={<ContactPage />} />
              <Route path="/contactinfoitem " element={<ContactInfoItem />} />
              <Route path="/circles" element={<Circles />} />
              <Route path="/about-summary" element={<AboutSummary />} />
              <Route path="/summary-projects" element={<SummaryProjects />} />
              {/* <Route path="/contact-summary" element={<ContactSummary />} /> */}
              <Route path="/demopage/:projectId" element={<DemoPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal-notice" element={<LegalNotice />} />
            </Routes>
            <Footer />
          </Router>
        </ProjectProvider>
      </AppContainer>
    </CursorProvider>
  );
}

export default App;
