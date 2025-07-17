import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import LazyLoad from "react-lazy-load";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectContext } from "../Context/ProjectContext";
import ProjectCard from "./ProjectCard";
import ProjectsCircles from "./ProjectsCircles";
import WaveBackground from "./WaveBackground";
import {
  ProjectsContainer,
  SquareContainer,
  ProjectCardContainer,
  AnimatedLetter,
  StyledText
} from "./styles/Projects.styles";

const Projects = () => {
  const { projectList, setSelectedProject } = useContext(ProjectContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectsCircles />
      <ProjectsContainer>
        <StyledText>
          <AnimatedLetter>P</AnimatedLetter>rojects .
        </StyledText>
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          {projectList.map((project, index) => {
            const [ref, inView] = useInView({
              triggerOnce: false,
              threshold: 0.1,
            });

            const controls = useAnimation();

            useEffect(() => {
              const isMobile = window.innerWidth <= 768;
              const isIPad = window.innerWidth > 768 && window.innerWidth <= 1024;

              if (isMobile || isIPad) {
                controls.start({ scale: 1, opacity: 1, transition: { duration: 0 } });
              } else if (inView) {
                controls.start({ scale: 1, opacity: 1, transition: { duration: 1 } });
              } else {
                controls.start({ scale: 0.2, opacity: 0, transition: { duration: 1 } });
              }
            }, [inView, controls]);

            return (
              <Grid item key={index}>
                <LazyLoad>
                  <motion.div
                    ref={ref}
                    initial={{
                      scale: window.innerWidth <= 768 ? 1 : 0.2,
                      opacity: window.innerWidth <= 768 ? 1 : 0,
                    }}
                    animate={controls}
                    onClick={() => {
                      if (project.demoLink) {
                        setSelectedProject(project);
                        navigate(`/demopage/${project.title}`);
                      } else if (project.web) {
                        window.open(project.web, "_blank");
                      }
                    }}
                  >
                    <SquareContainer>
                      <WaveBackground />
                      <ProjectCardContainer>
                        <ProjectCard
                          title={project.title}
                          comment={project.comment}
                          subtitle={project.subtitle}
                          description={project.description}
                          technologies={project.technologies}
                          githubLink={project.githubLink}
                          demoLink={project.demoLink}
                          videoSrc={project.videoSrc}
                          web={project.web}
                        />
                      </ProjectCardContainer>
                    </SquareContainer>
                  </motion.div>
                </LazyLoad>
              </Grid>
            );
          })}
        </Grid>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

