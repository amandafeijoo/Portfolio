import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { ProjectProvider } from "./Context/ProjectProvider";
import { CursorProvider } from "./Context/CursorContext";

import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import IntroLoader from "./Components/IntroLoader";
import MainLayout from "./Components/Layout/MainLayout";

/* =========================
   PAGES
========================= */
import Home from "./Components/Home";
import OrbitPage from "./Components/Services/OrbitPage";
import ProcessSection from "./Components/Process/ProcessSection";
import AboutMe from "./Components/About/AboutMe";
import TechStack from "./Components/About/TechStack";
import ProfileInfoBox from "./Components/About/ProfileInfoBox";
import Projects from "./Components/Project_Work/Projects";
import ContactPage from "./Components/Contact/ContactPage";
import ContactForm from "./Components/Portfolio/ContactForm";
import DemoPage from "./Components/DemoPage";
import PrivacyPage from "./Components/Privacy_Terms/PrivacyPage";
import LegalPage from "./Components/LegalNotice/LegalPage";

/* =========================
   GLOBAL STYLE
========================= */
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden; 
    margin: 0;
    padding: 0;
    background: #000;
    color-scheme: dark;
    font-family: "Inter", sans-serif;
  }

  body {
    position: relative;
  }

  #root {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  input, textarea, button, select {
    cursor: auto;
  }
`;

const AppContainer = styled.div`
  min-height: 100dvh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

/* =========================
   APP CONTENT (CON RUTA)
========================= */
function AppContent() {
  const location = useLocation();

  // const [showIntro, setShowIntro] = useState(location.pathname === "/");

  return (
    <>
      {/* 🔥 INTRO LOADER SOLO EN HOME
      {location.pathname === "/" && showIntro && (
        <IntroLoader onFinish={() => setShowIntro(false)} />
      )} */}

      <AppContainer>
        <Header />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orbit-section" element={<OrbitPage />} />
            <Route path="/process-section" element={<ProcessSection />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/profile-info-box" element={<ProfileInfoBox />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/demopage/:projectId" element={<DemoPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/legal-notice" element={<LegalPage />} />
          </Routes>
        </MainLayout>
        <Footer />
      </AppContainer>
    </>
  );
}

/* =========================
   APP ROOT
========================= */
function App() {
  return (
    <CursorProvider>
      <ProjectProvider>
        <Router basename={isLocalhost ? "/static" : undefined}>
          <GlobalStyle />
          <CustomCursor />
          <AppContent />
        </Router>
      </ProjectProvider>
    </CursorProvider>
  );
}

export default App;
