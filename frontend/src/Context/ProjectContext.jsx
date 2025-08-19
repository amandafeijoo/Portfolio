import React, { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: 1,
      videoSrc: "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:eco,w_800/v1748816240/danielaarrazolawebsite_sfuxjm.mp4",
      title: "Arrazola Psicología",
      comment: "Professional Website for a licensed psychologist with online booking, payments, testimonial system, and admin dashboard.",
      subtitle: "Psychology clinic website",
description: "Platform for a licensed psychologist with online booking and Stripe payments, testimonial submissions, and an admin dashboard to manage appointments. Includes automated email notifications.",
          technologies: "React, Django, PostgreSQL",
      githubLink: "https://github.com/amandafeijoo/Portfolio-Daniela-Arrazola.git",
      web: "https://www.arrazolapsicologia.com" 
    },
    {
      id: 2,
      videoSrc: "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:eco,w_800/v1749129568/webcode-art_mrleft.mp4",
      title: "Webcode-Art Portfolio",
      comment: "Personal portfolio and freelance site.",
      subtitle: "Developer showcase & contact platform",
      description:
        "This portfolio site presents my projects, background, and skills as a Full-Stack Web Developer. It includes interactive sections, animations, contact form with email integration, and a downloadable CV. Built for performance and aesthetics, and deployed on a custom domain.",
      technologies: "React, styled-components, Vite, Cloudinary, Framer Motion",
      githubLink: "https://github.com/amandafeijoo/Portfolio-Personal",
      web: "https://webcode-art.com"
    },
    {
      id: 3,
      videoSrc: "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:eco,w_800/v1748814073/dinebookergiphy_tlwmjs.mov",
      title: "DineBooker",
comment: "Final thesis project, graded 10/10.\nMaster´s  Degree at Universidad Europea de Madrid",
      subtitle: "Restaurant reservation platform.",
      description:
        "DineBooker enables users to book tables, review restaurants, and earn loyalty points. Restaurant owners can manage bookings, update menus, and engage with guests, all in one platform.",
      technologies: "React, Django, PostrgeSQL, node.js",
      githubLink: "https://github.com/amandafeijoo/DineBookerTFM.git",
      demoLink: "/static/images/demo_dinebooker_small.mp4"
    },
    {
      id: 4,
      videoSrc: "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:eco,w_800/v1748814437/fitlifegiphy_njxqtl.mov",
      title: "FitLife",
      comment: "Preliminary project for my master's thesis, graded 8.6/10.\n Universidad Europea de Madrid",
      subtitle: "Gym management platform",
      description:
        "FitLife enables users to book and manage classes and view trainer profiles. Admins can oversee schedules, reservations, and view key participation stats.",
      technologies: "React, Node.js, Express, MongoDB",
      githubLink: "https://github.com/amandafeijoo/FitLife-Project.git",
      demoLink: "/static/images/demo_fitlife_small.mp4"
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
