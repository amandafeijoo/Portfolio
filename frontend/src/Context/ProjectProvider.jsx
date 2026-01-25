import React, { useState } from "react";
import { ProjectContext } from "./ProjectContext";

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectList = [
    {
      id: 1,
      type: "real",
      variant: "hero",
      videoSrc:
        "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:good,w_1200/v1769342666/arrazola_psicologa_tdynnx.mp4",
      title: "Arrazola Psicología",
      tagline:
        "Booking + Stripe payments + admin dashboard for a licensed therapist.",
      comment:
        "Professional Website for a licensed psychologist with online booking, payments, testimonial system, and admin dashboard.",
      subtitle: "Psychology clinic website",
      description:
        "Platform for a licensed psychologist with online booking and Stripe payments...",
      technologies: "React, Django, PostgreSQL",
      githubLink:
        "https://github.com/amandafeijoo/Portfolio-Daniela-Arrazola.git",
      web: "https://www.arrazolapsicologia.com",
    },
    {
      id: 2,
      type: "real",
      variant: "featured",
      videoSrc:
        "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:good,w_1400/v1749129568/webcode-art_mrleft.mp4",
      title: "Webcode-Art Portfolio",
      tagline:
        "Interactive studio site with performance-first visuals and crafted UX.",
      comment: "Personal portfolio and freelance site.",
      subtitle: "Developer showcase & contact platform",
      description: "This portfolio site presents my projects...",
      technologies: "React, styled-components, Vite, Cloudinary, Framer Motion",
      githubLink: "https://github.com/amandafeijoo/Portfolio-Personal",
      web: "https://webcode-art.com",
    },
    {
      id: 3,
      type: "demo",
      variant: "featured",
      videoSrc:
        "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:good,w_1200/v1748814073/dinebookergiphy_tlwmjs.mov",
      title: "DineBooker",
      tagline:
        "Restaurant reservations + loyalty points with owner management tools.",
      comment:
        "Final thesis project, graded 10/10.\nMaster´s Degree at Universidad Europea de Madrid",
      subtitle: "Restaurant reservation platform.",
      description: "DineBooker enables users to book tables...",
      technologies: "React, Django, PostgreSQL, Node.js",
      githubLink: "https://github.com/amandafeijoo/DineBookerTFM.git",
      demoLink: "/static/images/demo_dinebooker_small.mp4",
    },
    {
      id: 4,
      type: "demo",
      variant: "concept",
      videoSrc:
        "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:good,w_1200/v1748814437/fitlifegiphy_njxqtl.mov",
      title: "FitLife",
      tagline:
        "Gym platform concept exploring flows, schedules, and admin control.",
      comment:
        "Preliminary project for my master's thesis, graded 8.6/10.\n Universidad Europea de Madrid",
      subtitle: "Gym management platform",
      description: "FitLife enables users to book and manage classes...",
      technologies: "React, Node.js, Express, MongoDB",
      githubLink: "https://github.com/amandafeijoo/FitLife-Project.git",
      demoLink: "/static/images/demo_fitlife_small.mp4",
    },
  ];

  return (
    <ProjectContext.Provider
      value={{ projectList, selectedProject, setSelectedProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
