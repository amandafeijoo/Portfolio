import React from "react";
import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import styled, { keyframes } from "styled-components";
import Wavify from "react-wavify";
import TypingEffect from "./TypingEffect";
import LazyLoad from "react-lazy-load";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectsContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 125vh;

  @media (max-width: 1024px) {
    margin-top: 50px;
    margin-bottom: 50px;
    height: auto;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    margin-top: 200px;
    margin-bottom: 40px;
    height: auto;
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    /* iPad Air */
    margin-top: 180px;
    margin-bottom: 60px;
    height: auto;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    /* iPad Pro */
    margin-top: 90px;
    margin-bottom: 70px;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 10px;
    height: auto;
  }
`;

const SquareContainer = styled.div`
  position: relative;
  width: 600px;
  height: 740px;
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
  margin-top: 33px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 4em;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    font-size: 3.5em;
    margin-top: 100px;
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    /* iPad Air */
    font-size: 4em;
    margin-top: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    /* iPad Pro */
    font-size: 4.5em;
    margin-top: 150px;
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-top: 220px;
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
  top: -1%;
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

  const projectList = [
    {
      videoSrc: "/images/fitlifegiphy.mp4",
      title: "FitLife",
      comment: "Preliminary project for my master's thesis, graded 8.6/10.",
      subtitle: "Gym management platform",
      description:
        "FitLife enables users to book and manage classes and view trainer profiles. Admins can oversee schedules, reservations, and view key participation stats.",
      technologies: "React, Node.js, Express, MongoDB",
      githubLink: "https://github.com/amandafeijoo/FitLife-Project.git",
      demoLink: "https://fitlife-demo.com",
    },
    {
      videoSrc: "/images/dinebookergiphy.mp4",
      title: "DineBooker",
      comment: "Final thesis project, graded 10/10.",
      subtitle: "Restaurant reservation platform.",
      description:
        "DineBooker enables users to book tables, review restaurants, and earn loyalty points. Restaurant owners can manage bookings, update menus, and engage with guests, all in one platform.",
      technologies: "React, Django, PostrgeSQL, node.js",
      githubLink: "https://github.com/amandafeijoo/DineBookerTFM.git",
      demoLink: "https://otro-proyecto-demo.com",
    },
  ];

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
        <Grid container spacing={2} justifyContent="center">
          {projectList.map((project, index) => (
            <Grid item key={index}>
              <LazyLoad>
                <motion.div
                  ref={ref}
                  initial={{
                    scale: window.innerWidth <= 768 ? 1 : 0.2,
                    opacity: window.innerWidth <= 768 ? 1 : 0,
                  }}
                  animate={controls}
                >
                  <SquareContainer>
                    <WaveBackground>
                      <Wavify
                        fill="rgba(255, 105, 180, 0.5)"
                        paused={false}
                        options={{
                          height: 80,
                          amplitude: 30,
                          speed: 0.15,
                          points: 3,
                        }}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "50%",
                        }}
                      />
                      <Wavify
                        fill="rgba(152, 224, 152, 0.5)"
                        paused={false}
                        options={{
                          height: 200,
                          amplitude: 100,
                          speed: 0.15,
                          points: 3,
                        }}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "50%",
                        }}
                      />
                      <Wavify
                        fill="rgba(153, 170, 255, 0.5)"
                        paused={false}
                        options={{
                          height: 200,
                          amplitude: 100,
                          speed: 0.15,
                          points: 3,
                        }}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "50%",
                        }}
                      />
                      <Wavify
                        fill="rgba(255, 105, 180, 0.5)"
                        paused={false}
                        options={{
                          height: 200,
                          amplitude: 30,
                          speed: 0.15,
                          points: 3,
                        }}
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "50%",
                          transform: "rotate(180deg)",
                        }}
                      />
                      <Wavify
                        fill="rgba(152, 224, 152, 0.5)"
                        paused={false}
                        options={{
                          height: 100,
                          amplitude: 100,
                          speed: 0.15,
                          points: 3,
                        }}
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "50%",
                          transform: "rotate(180deg)",
                        }}
                      />
                      <Wavify
                        fill="rgba(153, 170, 255, 0.5)"
                        paused={false}
                        options={{
                          height: 200,
                          amplitude: 100,
                          speed: 0.15,
                          points: 3,
                        }}
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "50%",
                          transform: "rotate(180deg)",
                        }}
                      />
                    </WaveBackground>
                    <ProjectCardContainer>
                      <ProjectCard {...project} />
                    </ProjectCardContainer>
                  </SquareContainer>
                </motion.div>
              </LazyLoad>
            </Grid>
          ))}
        </Grid>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
