import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import { createGlobalStyle } from "styled-components";
import Home from "./Components/Home";
import styled from "styled-components";
import TechStack from "./Components/TechStack";
import ProfileInfoBox from "./Components/ProfileInfoBox";
import Projects from "./Components/Projects";
import ProjectCard from "./Components/ProjectCard";
import TypingEffect from "./Components/TypingEffect";
import RotatingTypingEffect from "./Components/RotatingTypingEffect";
import ContactForm from "./Components/ContactForm";
import ContactPage from "./Components/ContactPage";
import Circles from "./Components/Circles";
import AboutSummary from "./Components/AboutSummary";
import SummaryProjects from "./Components/SummaryProjects";
import ContactSummary from "./Components/ContactSummary";
import Footer from "./Components/Footer";
import { ProjectProvider } from "./Context/ProjectContext";
import DemoPage from "./Components/DemoPage";
import PrivacyPolicy from "./Components/PrivacyPolicy";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

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
  font-family: 'Source Code Pro', monospace;
  background: #000;
  background-image: 
    linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent);
  background-size: 200px 200px;
  border: 2px solid rgba(200, 162, 200, 0.5);
  min-height: 100vh;
  transition: background-position 0.1s;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <ProjectProvider>
        <Router>
          <Header />
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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/circles" element={<Circles />} />
            <Route path="/about-summary" element={<AboutSummary />} />
            <Route path="/summary-projects" element={<SummaryProjects />} />
            <Route path="/contact-summary" element={<ContactSummary />} />
            <Route path="/demopage/:projectId" element={<DemoPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          <Footer />
        </Router>
      </ProjectProvider>
    </AppContainer>
  );
}

export default App;
