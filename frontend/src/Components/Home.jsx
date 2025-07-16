import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import AnimatedBackground from "./AnimatedBackground";
import AboutSummary from "./AboutSummary";
import SummaryProjects from "./SummaryProjects";
import ContactSummary from "./ContactSummary";

  /* (1) Definimos el botón CTA */
const StyledCtaButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  background-color: rgba(200, 162, 200, 0.3);
  color: rgb(235, 210, 235);
  font-family: "Source Code Pro", monospace;
  font-size: 1.1rem;
  border-radius: 12px;
  border: 2px solid rgba(200, 162, 200, 0.7);
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(200, 162, 200, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 18px;
  }
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
  animation: ${rotate} 9s infinite;
  border: 2px solid rgba(200, 162, 200, 0.5);
  margin-right: 13px;
  margin-top: 150px;

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
  font-size: 4.8em;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  text-shadow: 0 0 3px #fff;
  color: #fff;
  margin-top: 30px; /* Ajuste general */
  margin-bottom: 10px;

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
    margin-top: 140px; /* Ajuste para iPhone SE */
  }

  /* iPhone 14 Pro */
  @media (max-width: 393px) and (min-height: 852px) {
    font-size: 2.9em;
    margin-top: 220px; /* Ajuste para iPhone 14 Pro */
  }
`;

const NameText = styled.span`
  font-size: 3em;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  text-shadow: 0 0 2px #fff;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 2.5em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.8em;
  }
`;

const MainContainer = styled.div`
  display: flex;
  margin-top: 150px;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    margin-bottom: 25px;
  }

  @media (max-width: 1024px) {
    margin-top: -40px;
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
    margin-top: 120px;
    margin-bottom: 80px;
  }

  @media (min-width: 834px) and (max-width: 1024px) {
    /* iPad Air */
    margin-top: 70px;
    margin-bottom: 70px;
  }

  @media (max-width: 375px) {
    /* iPhone SE */
    margin-top: 5px;
    margin-bottom: 0px;
    padding: 10px;
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
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    padding: 5px; /* Móviles pequeños */
    margin-top: 0px;
  }

  @media (max-width: 375px) {
    /* iPhone SE */
    padding: 8px;
    margin-top: 20px;
  }

  @media (max-width: 390px) {
    /* iPhone Pro */
    margin-top: 60px;
    font-size: 1.2em;
  }
`;

const StyledP = styled.p`
  color: #fff;
  font-size: 20px;
  margin-bottom: 0px;
  text-align: center;
  margin-top: -10px;

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

  @media (max-width: 375px) {
    /* iPhone SE */
    font-size: 13px;
    margin-bottom: 30px;
    margin-top: 10px;
    padding: 10px;
  }
  @media (max-width: 390px) {
    /* iPhone Pro */
    font-size: 13px;
  }
  @media (max-width: 430px) {
    /* iPhone Pro Max */
    font-size: 13px;
    margin-top: 5px;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 80px;
    height: 80px;
    top: 60%;
    left: 50%;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 60px;
    height: 60px;
    top: 90%;
    left: 0%;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 40px;
    height: 40px;
    left: 80%;
    top: 35%;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 80px;
    height: 80px;
    top: 72%;
    left: 65%;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 80px;
    height: 80px;
    margin-top: -250px;
    left: 75%;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 150px;
    height: 150px;
    top: 210%;
    left: 85%;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 80px;
    height: 80px;
    top: 210%;
    left: 85%;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 10px;
    height: 120px;
    margin-top: -150px;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 180px;
    height: 180px;
    margin-top: 40px;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 90px;
    height: 90px;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 180px;
    height: 180px;
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

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 180px;
    height: 180px;
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
    title: "Arrazola Psicología",
    comment:
      "Professional website developed for a licensed health psychologist, with online booking and testimonials.",
    technologies: "React, Django, PostgreSQL",
    videoSrc:
      "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:eco,w_800/v1748816240/danielaarrazolawebsite_sfuxjm.mp4",
    githubLink:
      "https://github.com/amandafeijoo/Portfolio-Daniela-Arrazola.git",
    web: "https://www.arrazolapsicologia.com",
  },
  {
    videoSrc:
      "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:eco,w_800/v1748814437/fitlifegiphy_njxqtl.mov",
    title: "FitLife",
    comment: "Preliminary project for my master's thesis, graded 8.6/10.",
    technologies: "React, Node.js, Express, MongoDB",
    githubLink: "https://github.com/amandafeijoo/FitLife-Project.git",
  },
  {
    videoSrc:
      "https://res.cloudinary.com/dp6jrgvoz/video/upload/f_auto,q_auto:eco,w_800/v1748814073/dinebookergiphy_tlwmjs.mov",
    title: "DineBooker",
    comment: "Final thesis project, graded 10/10.",
    technologies: "React, Django, PostgreSQL",
    githubLink: "https://github.com/amandafeijoo/DineBookerTFM.git",
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

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
            <AnimatedLetter>H</AnimatedLetter>ELLO,
          </StyledText>
          <NameText>I´m Amanda</NameText>
          <StyledCtaButton onClick={() => navigate("/projects")}>
            View My Projects
          </StyledCtaButton>
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
