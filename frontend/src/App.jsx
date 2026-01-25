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
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor";
import IntroLoader from "./Components/IntroLoader";

/* =========================
   PAGES
========================= */
import Home from "./Components/Home";
import OrbitPage from "./Components/OrbitPage";
import ProcessSection from "./Components/ProcessSection";
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import ProfileInfoBox from "./Components/ProfileInfoBox";
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactForm";
import ContactPage from "./Components/ContactPage";
import DemoPage from "./Components/DemoPage";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import LegalNotice from "./Components/LegalNotice";

/* =========================
   GLOBAL STYLE
========================= */
const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
    background: #000;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color-scheme: dark;
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

  // 👉 solo mostrar loader si estamos en "/"
  const [showIntro, setShowIntro] = useState(location.pathname === "/");

  return (
    <>
      {/* 🔥 INTRO LOADER SOLO EN HOME */}
      {location.pathname === "/" && showIntro && (
        <IntroLoader onFinish={() => setShowIntro(false)} />
      )}

      {/* 👇 APP REAL (SE VE DETRÁS DEL LOADER) */}
      <AppContainer>
        <Header />

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
        </Routes>

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
