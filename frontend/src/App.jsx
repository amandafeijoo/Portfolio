import React, { useEffect } from "react";
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

/* =========================
   PAGES
========================= */
import Home from "./Components/Home";
import OrbitPage from "./Components/Services_Hero/OrbitPage";
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
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #000;
    color-scheme: dark;
    font-family: "Inter", sans-serif;
  }

  body {
    position: relative;
  }

  #root {
    width: 100%;
    height: 100vh;
    max-width: 100%;
    overflow: hidden;
  }

  input, textarea, button, select {
    cursor: auto;
  }
`;

const HEADER_HEIGHT = 0;

const AppShell = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #000;
`;

const MainWrapper = styled.main`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: #000;
  padding-top: ${HEADER_HEIGHT}px;
  scroll-behavior: auto;
`;

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

/* =========================
   APP CONTENT
========================= */
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const main = document.getElementById("main-scroll-container");
    if (main) {
      main.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return (
    <AppShell>
      <Header />

      <MainWrapper id="main-scroll-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<OrbitPage />} />
            <Route path="/process" element={<ProcessSection />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/profile-info-box" element={<ProfileInfoBox />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demopage/:projectId" element={<DemoPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>

        <Footer />
      </MainWrapper>
    </AppShell>
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