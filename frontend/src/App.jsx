import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { ProjectProvider } from "./Context/ProjectContext";
import { CursorProvider } from "./Context/CursorContext";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor";

/* =========================
   PAGES
========================= */
import Home from "./Components/Home";
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
  ${"" /* font-family: 'Source Code Pro', monospace; */}
  font-family: "Inter", sans-serif;
  background: #000;
  ${
    "" /* background-image: 
    linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent); */
  }
  background-size: 200px 200px;
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

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

function App() {
  return (
    <CursorProvider>
      <AppContainer>
        <ProjectProvider>
          <Router basename={isLocalhost ? "/static" : undefined}>
            <GlobalStyle />
            <CustomCursor />
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
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
          </Router>
        </ProjectProvider>
      </AppContainer>
    </CursorProvider>
  );
}

export default App;
