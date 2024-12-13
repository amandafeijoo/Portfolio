import React from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import AnimatedBackground from "./AnimatedBackground";
import AboutSummary from "./AboutSummary";
import SummaryProjects from "./SummaryProjects";
import ContactSummary from "./ContactSummary";

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
  animation: ${rotate} 9s infinite;
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

  @media (max-width: 1024px) {
    padding: 15px; /* Tabletas */
  }

  @media (max-width: 1200px) {
    padding: 20px; /* Pantallas pequeñas */
  }

  @media (min-width: 1201px) {
    padding: 25px; /* Pantallas grandes */
  }

  @media (max-width: 768px) {
    padding: 10px; /* Móviles */
  }

  @media (max-width: 480px) {
    padding: 5px; /* Móviles pequeños */
  }
`;

const StyledText = styled.span`
  font-size: 5.2em;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  text-shadow: 0 0 3px #fff;
  color: #fff;
  margin-top: 33px;
  margin-bottom: 20px;

  @media (max-width: 1024px) and (min-width: 768px) {
    /* iPad Pro */
    font-size: 4.5em;
    padding: 15px;
    margin-top: 260px;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    font-size: 4.2em;
    padding: 15px;
    margin-top: 10px;
  }

  @media (max-width: 820px) and (min-width: 768px) {
    /* iPad Air */
    font-size: 4.2em;
    padding: 15px;
  }

  @media (max-width: 768px) {
    /* Dispositivos móviles */
    font-size: 3em;
    padding: 10px;
  }

  @media (max-width: 480px) {
    /* Dispositivos móviles pequeños */
    font-size: 1.5em;
    margin-top: 10px;
    padding: 5px;
  }
  @media (max-width: 390px) {
    margin-top: 15px; /* Ajuste específico para iPhone 14 Pro */
  }

  @media (min-width: 1201px) {
    padding: 25px; /* Pantallas grandes */
  }
`;

const MainContainer = styled.div`
  display: flex;
  margin-top: 220px;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 80px;
    margin-bottom: 25px;
  }

  @media (max-width: 1024px) {
    margin-top: -10px;
    padding: 15px; /* Tabletas */
  }

  @media (max-width: 1200px) {
    padding: 20px; /* Pantallas pequeñas */
  }

  @media (min-width: 1201px) {
    padding: 25px; /* Pantallas grandes */
  }

  @media (min-width: 768px) and (max-width: 834px) {
    /* iPad Mini */
    margin-top: 150px;
    margin-bottom: 80px;
  }

  @media (min-width: 834px) and (max-width: 1024px) {
    /* iPad Air */
    margin-top: 100px;
    margin-bottom: 70px;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    /* iPad Pro */
    margin-top: 50px !important;
    margin-bottom: 10px !important;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 15px; /* Tabletas */
  }

  @media (max-width: 1200px) {
    padding: 20px; /* Pantallas pequeñas */
  }

  @media (min-width: 1201px) {
    padding: 25px; /* Pantallas grandes */
  }

  @media (max-width: 768px) {
    padding: 10px; /* Móviles */
    margin-top: 100px;
  }

  @media (max-width: 480px) {
    padding: 5px; /* Móviles pequeños */
    margin-top: 50px;
  }
`;

const StyledP = styled.p`
  color: #fff;
  font-size: 20px;
  margin-bottom: 100px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-bottom: 0px;
    text-align: center;
    margin-top: -30px;
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

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(200, 162, 200, 0.9);
  animation: ${float} 4s ease-in-out infinite;
  z-index: 2;
`;

const Circle1 = styled(Circle)`
  width: 550px;
  height: 550px;
  top: 30%;
  left: 52%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    top: 50%;
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

const Circle2 = styled(Circle)`
  width: 300px;
  height: 300px;
  top: 100%;
  left: -10%;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const Circle3 = styled(Circle)`
  width: 200px;
  height: 200px;
  top: 30%;
  left: 10%;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    left: 80%;
    top: 38%;
  }
`;

const Circle4 = styled(Circle)`
  width: 400px;
  height: 400px;
  top: 60%;
  left: 70%;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const Circle5 = styled(Circle)`
  width: 350px;
  height: 350px;
  top: 160%;
  left: 20%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin-top: -300px;
    left: 80%;
  }
`;

const Circle6 = styled(Circle)`
  width: 250px;
  height: 250px;
  top: 220%;
  left: 90%;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Circle7 = styled(Circle)`
  width: 550px;
  height: 550px;
  top: 220%;
  left: 90%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const Circle8 = styled(Circle)`
  width: 250px;
  height: 250px;
  top: 260%;
  left: -10%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin-top: -170px;
  }
`;

const Circle9 = styled(Circle)`
  width: 550px;
  height: 550px;
  top: 260%;
  left: -45%;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    margin-top: 50px;
  }
`;

const Circle10 = styled(Circle)`
  width: 550px;
  height: 550px;
  top: 360%;
  left: -45%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const Circle11 = styled(Circle)`
  width: 250px;
  height: 250px;
  top: 370%;
  left: -10%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Circle12 = styled(Circle)`
  width: 250px;
  height: 250px;
  top: 420%;
  left: 90%;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Circle13 = styled(Circle)`
  width: 550px;
  height: 550px;
  top: 420%;
  left: 90%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    margin-top: 100px;
  }
`;

const projects = [
  {
    videoSrc: "/images/fitlifegiphy.mp4",
    title: "FitLife",
    comment: "Preliminary project for my master's thesis, graded 8.6/10.",
    technologies: "React, Node.js, Express, MongoDB",
    githubLink: "https://github.com/amandafeijoo/FitLife-Project.git",
  },
  {
    videoSrc: "/images/dinebookergiphy.mp4",
    title: "DineBooker",
    comment: "Final thesis project, graded 10/10.",
    technologies: "React, Django, PostrgeSQL",
    githubLink: "https://github.com/amandafeijoo/DineBookerTFM.git",
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainContainer>
        <Circle1 />
        <Circle2 />
        <Circle3 />
        <Circle4 />
        <Circle5 />
        <Circle6 />
        <Circle7 />
        <Circle8 />
        <Circle9 />
        <Circle10 />
        <Circle11 />
        <Circle12 />
        <Circle13 />
        <TextContainer>
          <StyledText>
            <AnimatedLetter>A</AnimatedLetter>MANDA FLORES
          </StyledText>
          <StyledP>
            Full-Stack Web Developer <br />
            Master’s Degree in Professional Web Development and Applications,
            Universidad Europea Madrid
          </StyledP>
        </TextContainer>
        <AnimatedBackground />
      </MainContainer>
      <AboutSummary />
      <SummaryProjects projects={projects} />
      <ContactSummary />
    </>
  );
};

export default Home;
