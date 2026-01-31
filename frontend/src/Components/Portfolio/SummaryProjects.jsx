import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { isMobile } from "react-device-detect";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { ProjectContext } from "../Context/ProjectContext";
import Wavify from "react-wavify";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import {
  SummaryContainer,
  SummaryTitle,
  ProjectCardContainer,
  ProjectVideo,
  ProjectTitle,
  ProjectComment,
  ProjectTechnologies,
  WaveBackground,
} from "./styles/SummaryProjects.styles";

const SummaryProjects = () => {
  const { projectList } = useContext(ProjectContext);
  const [visibleCards, setVisibleCards] = useState(
    new Array(projectList.length).fill(false)
  );

  const navigate = useNavigate();

  const handleDemoClick = (event, title) => {
    event.preventDefault();
    navigate(`/demopage/${title}`);
  };

  const handleInViewChange = (inView, index) => {
    setVisibleCards((prev) => {
      const newVisibleCards = [...prev];
      newVisibleCards[index] = inView;
      return newVisibleCards;
    });
  };

  return (
    <SummaryContainer>
      <SummaryTitle>My Projects</SummaryTitle>
      {projectList.map((project, index) => {
        const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.5,
          onChange: (inView) => handleInViewChange(inView, index),
        });

        return (
          <ProjectCardContainer key={index} ref={ref} inView={inView}>
            <WaveBackground
              fill="rgba(200, 162, 200, 0.5)"
              paused={false}
              options={{
                height: 10,
                amplitude: 10,
                speed: 0.15,
                points: 3,
              }}
            />
            <LazyLoad height={200} offset={100}>
              <ProjectVideo autoPlay muted loop playsInline>
                <source src={project.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </ProjectVideo>
            </LazyLoad>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectComment>{project.comment}</ProjectComment>
            <ProjectTechnologies>{project.technologies}</ProjectTechnologies>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Button
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontFamily: "'Source Code Pro', monospace",
                  padding: "12px 22px",
                  backgroundColor: "rgba(200, 162, 200, 0.3)",
                  borderRadius: "12px",
                  color: "#d8bfd8",
                  display: "flex",
                  textDecoration: "none",
                  boxSizing: "border-box",
                  transition:
                    "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(200, 162, 200, 0.5)",
                    color: "#d8bfd8",
                  },
                  "& svg": {
                    color: "white",
                    marginRight: "8px",
                  },
                }}
              >
                <GitHubIcon />
                View on GitHub
              </Button>
              {project.web ? (
                <Button
                  href={project.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontFamily: "'Source Code Pro', monospace",
                    padding: "12px 22px",
                    backgroundColor: "rgba(200, 162, 200, 0.3)",
                    borderRadius: "12px",
                    color: "#d8bfd8",
                    display: "flex",
                    textDecoration: "none",
                    boxSizing: "border-box",
                    transition:
                      "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(200, 162, 200, 0.5)",
                      color: "#d8bfd8",
                    },
                    "& svg": {
                      color: "white",
                      marginRight: "8px",
                    },
                  }}
                >
                  <LinkIcon sx={{ marginRight: "8px" }} />
                  Visit Website
                </Button>
              ) : (
                <Button
                  component="a"
                  onClick={(event) => handleDemoClick(event, project.title)}
                  sx={{
                    fontFamily: "'Source Code Pro', monospace",
                    padding: "12px 22px",
                    backgroundColor: "rgba(200, 162, 200, 0.3)",
                    borderRadius: "12px",
                    color: "#d8bfd8",
                    display: "flex",
                    textDecoration: "none",
                    boxSizing: "border-box",
                    transition:
                      "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(200, 162, 200, 0.5)",
                      color: "#d8bfd8",
                    },
                    "& svg": {
                      color: "white",
                      marginRight: "8px",
                    },
                  }}
                >
                  <LinkIcon sx={{ marginRight: "8px" }} />
                  View Demo
                </Button>
              )}
            </div>
          </ProjectCardContainer>
        );
      })}
    </SummaryContainer>
  );
};

export default SummaryProjects;
