import React, { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: 1,
      videoSrc: "/images/fitlifegiphy.mp4",
      title: "FitLife",
      comment: "Preliminary project for my master's thesis, graded 8.6/10.",
      subtitle: "Gym management platform",
      description:
        "FitLife enables users to book and manage classes and view trainer profiles. Admins can oversee schedules, reservations, and view key participation stats.",
      technologies: "React, Node.js, Express, MongoDB",
      githubLink: "https://github.com/amandafeijoo/FitLife-Project.git",
      demoLink: "/demo_fitlife_portfolio.mp4",
    },
    {
      id: 2,
      videoSrc: "/images/dinebookergiphy.mp4",
      title: "DineBooker",
      comment: "Final thesis project, graded 10/10.",
      subtitle: "Restaurant reservation platform.",
      description:
        "DineBooker enables users to book tables, review restaurants, and earn loyalty points. Restaurant owners can manage bookings, update menus, and engage with guests, all in one platform.",
      technologies: "React, Django, PostrgeSQL, node.js",
      githubLink: "https://github.com/amandafeijoo/DineBookerTFM.git",
      demoLink: "/demo_dinebooker_portfolio.mp4",
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
