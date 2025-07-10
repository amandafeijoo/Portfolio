import React, { useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import TechStack from "./TechStack";
import ProfileInfoBox from "./ProfileInfoBox";
import DownloadIcon from "@mui/icons-material/Download";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import RotatingTypingEffect from "./RotatingTypingEffect";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;
const AboutContainer = styled.div`
  margin-top: 105px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  border: 2px solid #99aaff;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 280px;
    padding: 0px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 280px;
    padding: 0px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin-top: 280px;
    padding: 10px;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }

  @media (max-width: 430px) {
    /* iPhone Pro Max */
    margin-top: 150px; 
  }

  @media (max-width: 390px) {
    /* iPhone Pro */
    margin-top: 140px; 
  }

  @media (max-width: 375px) {
    /* iPhone SE */
    margin-top: 130px; 
  }

  @media (max-width: 820px) and (min-width: 768px) {
    /* iPad Air */
    margin-top: 120px; 
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    margin-top: 120px;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    /* iPad Pro */
    margin-top: 120px; 
  }
`;
const Description = styled.p`
  text-align: justify;
  line-height: 1.6;
  margin: 60px 0;
  color: #fff;

  @media (max-width: 768px) {
    margin: 20px 0;
    font-size: 0.7em;
    line-height: 1.4;
    padding: 0 30px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin: 40px 0;
    font-size: 1em;
    line-height: 1.5;
    padding: 0 180px;
  }

  @media (min-width: 1025px) {
    margin: 60px 0;
    font-size: 1.1em;
    line-height: 1.6;
    padding: 0 30px;
  }

  @media (min-width: 768px) and (max-width: 834px) and (orientation: portrait) {
    /* iPad Mini en modo retrato */
    font-size: 1.1em;
    line-height: 1.6;
    padding: 0 50px;
  }

  @media (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
    /* iPad Pro en modo retrato */
    font-size: 1.3em;
    line-height: 1.8;
    padding: 0 60px;
  }

  @media (min-width: 1024px) and (max-width: 1366px) and (orientation: landscape) {
    /* iPad Pro en modo paisaje */
    font-size: 1.3em;
    line-height: 1.8;
    padding: 0 60px;
  }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
    margin-top: 25px;
    margin-bottom: 18px;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    font-size: 4.2em;
    margin-top: 25px;
    margin-bottom: 18px;
  }

  @media (max-width: 820px) and (min-width: 768px) {
    /* iPad Air */
    font-size: 4.2em;
    margin-top: 25px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 3.2em;
    margin-top: 100px;
    text-align: center;
    margin-left: 22px;
  }

  @media (max-width: 480px) {
    /* Mobile devices */
    font-size: 2.5em;
    margin-top: 50px;
    text-align: center;
    margin-left: 10px;
  }
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  &::after {
    content: "";
    position: absolute;
    top: -20px; /* Ajusta para extender hacia arriba */
    bottom: -20px; /* Ajusta para extender hacia abajo */
    right: 0;
    width: 2px;
    background-color: #99aaff;
  }

  @media (max-width: 768px) {
    &::after {
      display: none;
    }
  }
`;


const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0px 4px 20px rgba(128, 128, 128, 0.5),
    0px 4px 20px rgba(255, 255, 255, 0.5), 0px 4px 20px rgba(153, 102, 255, 0.5);
  transition: all 0.5s;
  border: 2px solid #99aaff;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1025px) and (max-width: 1366px) {
    /* iPad Pro */
    width: 550px;
    height: 550px;
    margin-top: 20px;
    margin-bottom: 80px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  gap: 20px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 12px 22px;
  font-size: 1em;
  color: #d8bfd8;
  background-color: rgba(200, 162, 200, 0.5);
  border: none;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.2s ease, box-shadow 0.2s ease,
    transform 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(200, 162, 200, 0.3);
    color: #d8bfd8;
    margin-right: 5px; /* Reduce margin change */
  }

  & svg {
    color: white;
    margin-right: 8px;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 12px 22px;
  font-size: 1em;
  color: #d8bfd8;
  background-color: rgba(200, 162, 200, 0.5);
  border: none;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.2s ease, box-shadow 0.2s ease,
    transform 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(200, 162, 200, 0.3);
    color: #d8bfd8;
    margin-right: 5px; /* Reduce margin change */
  }

  & svg {
    color: white;
    margin-right: 8px;
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
  width: 150px;
  height: 150px;
  top: 10%;
  left: 42%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-top: -190px;
    margin-left: 80px;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    /* iPad Pro */
    width: 140px;
    height: 140px;
    top: 10%;
    left: 80%;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    width: 130px;
    height: 130px;
    top: 18%;
    left: 65%;
  }
`;

const Circle2 = styled(Circle)`
  width: 100px;
  height: 100px;
  top: 5%;
  left: 46%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: 100px;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    /* iPad Pro */
    width: 80px;
    height: 80px;
    top: 7%;
    left: 80%;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    width: 90px;
    height: 90px;
    top: 6%;
    left: 55%;
  }
`;

const Circle3 = styled(Circle)`
  width: 210px;
  height: 210px;
  top: 135%;
  left: 87%;
  background-color: rgba(200, 162, 200, 0.5);
`;

const Circle4 = styled(Circle)`
  width: 130px;
  height: 130px;
  top: 150%;
  left: 85%;
`;
const MessageContainer = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  font-size: 1em;

  @media (max-width: 768px) {
    width: 250px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 60px;
    font-size: 0.4em;
  }

  @media (min-width: 768px) and (max-width: 834px) and (orientation: portrait) {
    /* iPad Mini en modo retrato */
    width: 450px;
    height: 120px;
    font-size: 1.2em;
  }

  @media (min-width: 1025px) and (max-width: 1366px) {
    /* iPad Pro */
    width: 500px;
    height: 150px;
    font-size: 1.7em;
    margin-top: -300px;
  }
`;

const DesktopMessageContainer = styled(MessageContainer)`
  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileMessageContainer = styled(MessageContainer)`
  display: none; 

  @media (max-width: 480px) {
    display: flex; 
  }
`;

const messages = [
  "<code>I build\nweb applications\n|</code>",
  "<code>Full-Stack Developer</code>",
];

const AboutMe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate("/contactform");
  };

  return (
    <>
      <AboutContainer>
        <Circle1 />
        <Circle2 />
        <Circle3 />
        <Circle4 />
        <TextContainer>
          <StyledText>
            <AnimatedLetter>A</AnimatedLetter>bout Me .
          </StyledText>
          <Description>
  I'm Amanda Flores — a Full-Stack Web Developer with a strong focus on frontend development and a passion for turning ideas into intuitive, responsive digital experiences. I work with modern technologies like React, Angular, Node.js, and Django, and I'm confident managing databases with PostgreSQL, MongoDB, and MySQL.
  <br /><br />
  I also use tools like Docker, MUI, Google Cloud, and deployment platforms like Railway, Render, Netlify, and Google Workspace (via Squarespace) to build scalable and maintainable applications.
  <br /><br />
  I hold a Master’s Degree in Web Development and Applications from Universidad Europea Madrid (GPA 9.04/10), where I earned a 10/10 on my thesis project. I also have a diploma in graphic design from Escola Espai Barcelona, which allows me to bring visual clarity and creativity into every project.
  <br /><br />
  Originally from Honduras, I lived in Barcelona 14 years, and I’m now based in Trondheim, Norway. My multicultural background shapes how I design, develop, and collaborate.
  <br /><br />
  I’ve built and deployed real-world platforms like <strong>Arrazola Psicología</strong> (a booking and payment system for a licensed therapist), and <strong>Webcode-Art</strong> (my personal portfolio and contact platform). I’ve also developed full demo versions of <strong>DineBooker</strong> and <strong>FitLife Gym</strong> — completed during my Master’s program and showcased in my portfolio.
  <br /><br />
  Let’s build something meaningful together! 🚀
</Description>


        </TextContainer>
        <ImageContainer>
          <Box>
            <DesktopMessageContainer>
              <RotatingTypingEffect
                messages={messages}
                speed={100}
                pause={1000}
              />
            </DesktopMessageContainer>
            <MobileMessageContainer>
              <RotatingTypingEffect
                messages={["<code>Full-Stack Developer</code>"]}
                speed={100}
                pause={1000}
              />
            </MobileMessageContainer>
          </Box>
          <ProfileImage src="/images/perfil.jpg" alt="Perfil" />

          <ProfileInfoBox />
          <ButtonContainer>
            <DownloadButton href="/CV.pdf" download>
              <div style={{ display: "flex", alignItems: "center" }}>
                <DownloadIcon
                  style={{ marginRight: "8px", fontSize: "16px" }}
                />
                Access My CV
              </div>
            </DownloadButton>
            <ContactButton onClick={handleContactClick}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ContactMailIcon
                  style={{ marginRight: "8px", fontSize: "16px" }}
                />
                Let’s Talk
              </div>
            </ContactButton>
          </ButtonContainer>
        </ImageContainer>
      </AboutContainer>
      <TechStack />
    </>
  );
};

export default AboutMe;
