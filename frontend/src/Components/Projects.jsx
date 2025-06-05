import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "../Context/ProjectContext";
import styled, { keyframes } from "styled-components";
import Wavify from "react-wavify";
import TypingEffect from "./TypingEffect";
import LazyLoad from "react-lazy-load";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectsContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 110px;
  margin-bottom: 100px;
  min-height: 100vh;

  @media (max-width: 1024px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    margin-top: 200px;
    margin-bottom: 40px;
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    margin-top: 180px;
    margin-bottom: 60px;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 90px;
    margin-bottom: 70px;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 10px;
  }
`;


const SquareContainer = styled.div`
  position: relative;
  width: 600px;
  height: 800px;
  overflow: hidden;
  margin-top: 50px;
  border: 2px solid rgba(200, 162, 200, 0.5);
  border-radius: 10px;
  background: linear-gradient(
    45deg,
    rgba(200, 162, 200, 0.5),
    rgba(200, 162, 200, 0.5),
    rgba(200, 162, 200, 0.6)
  );

  @media (max-width: 1024px) {
    width: 450px;
    height: 600px;
  }

  @media (max-width: 768px) {
    width: 340px;
    height: 760px;
    margin-top: 0;
  }
`;

const WaveBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: 0;
  overflow: hidden;
`;

const ProjectCardContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AnimatedLetter = styled.span`
  display: inline-block;
  position: relative;
  animation: ${rotate} 20s infinite;
  border: 2px solid rgba(200, 162, 200, 0.5);
  margin-right: 13px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: 2;
  }

  &::before {
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledText = styled.span`
  font-size: 5.2em;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  text-shadow: 0 0 3px #fff;
  color: #fff;
  margin-top: 20px; /* Ajuste general */
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 4em;
    margin-top: 15px; /* Ajuste para pantallas más pequeñas */
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    font-size: 3.5em;
    margin-top: 50px; /* Ajuste para iPad Mini */
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    /* iPad Air */
    font-size: 4em;
    margin-top: 30px; /* Ajuste para iPad Air */
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    /* iPad Pro */
    font-size: 4.5em;
    margin-top: 100px; /* Ajuste para iPad Pro */
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-top: 100px; /* Ajuste para pantallas más pequeñas */
  }

  /* iPhone SE */
  @media (max-width: 375px) and (min-height: 667px) {
    font-size: 2.5em;
    margin-top: 100px;
  }

  /* iPhone 14 Pro */
  @media (max-width: 393px) and (min-height: 852px) {
    font-size: 2.9em;
    margin-top: 120px; /* Ajuste para iPhone 14 Pro */
  }
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(200, 162, 200, 0.9);
  animation: ${float} 4s ease-in-out infinite;
  z-index: 2;
`;

const Circle1 = styled(Circle)`
  width: 300px;
  height: 300px;
  top: 8%;
  left: 5%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 10%;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    top: 10%;
    left: 70%;
  }
`;

const Circle2 = styled(Circle)`
  width: 170px;
  height: 170px;
  top: 10%;
  left: 20%;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
    top: 20%;
    left: 25%;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    top: 13%;
    left: 60%;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    top: 10%;
    left: 80%;
  }
`;

const Circle3 = styled(Circle)`
  width: 150px;
  height: 150px;
  top: 80%;
  left: 82%;

  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
    top: 70%;
    left: 80%;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: 96%;
    left: 0%;
  }
`;

const Circle4 = styled(Circle)`
  width: 350px;
  height: 350px;
  top: 82%;
  left: 80%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
    top: 90%;
    left: 75%;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    top: 97%;
    left: 40%;
  }
`;

const Projects = () => {
  const { projectList, setSelectedProject } = useContext(ProjectContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Ajusta el umbral para que la animación se inicie antes
  });

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const isIPad = window.innerWidth > 768 && window.innerWidth <= 1024;

    if (isMobile) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0 }, // Sin animación en dispositivos móviles
      });
    } else if (isIPad) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0 }, // Sin animación en iPad Mini y iPad Air
      });
    } else if (inView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 1 }, // Ajusta la duración en dispositivos no móviles
      });
    } else {
      controls.start({
        scale: 0.2,
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <Circle4 />
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
                      <WaveBackground>
                        {/* Waves */}
                        <Wavify fill="rgba(255, 105, 180, 0.5)" paused={false} options={{ height: 80, amplitude: 30, speed: 0.15, points: 3 }}
                          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%" }} />
                        <Wavify fill="rgba(152, 224, 152, 0.5)" paused={false} options={{ height: 200, amplitude: 100, speed: 0.15, points: 3 }}
                          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%" }} />
                        <Wavify fill="rgba(153, 170, 255, 0.5)" paused={false} options={{ height: 200, amplitude: 100, speed: 0.15, points: 3 }}
                          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%" }} />
                        <Wavify fill="rgba(255, 105, 180, 0.5)" paused={false} options={{ height: 200, amplitude: 30, speed: 0.15, points: 3 }}
                          style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "50%", transform: "rotate(180deg)" }} />
                        <Wavify fill="rgba(152, 224, 152, 0.5)" paused={false} options={{ height: 100, amplitude: 100, speed: 0.15, points: 3 }}
                          style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "50%", transform: "rotate(180deg)" }} />
                        <Wavify fill="rgba(153, 170, 255, 0.5)" paused={false} options={{ height: 200, amplitude: 100, speed: 0.15, points: 3 }}
                          style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "50%", transform: "rotate(180deg)" }} />
                      </WaveBackground>
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
