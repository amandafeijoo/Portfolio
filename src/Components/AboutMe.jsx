import React from "react";
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
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  border: 2px solid #99aaff;
  position: relative;
`;

const Description = styled.p`
  text-align: justify;
  line-height: 1.6;
  margin: 60px 0;
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
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 2px solid #99aaff;
  padding: 20px;
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
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  color: #fff;
  background-color: rgba(200, 162, 200, 0.5);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s;
  margin-right: 10px;

  &:hover {
    background-color: #7799ff;
  }
`;

const messages = [
  "<code>I build\nweb applications\n|</code>",
  "<code>I build web applications\n| Scalable, optimized, and user-focused solutions</code>",
  "<code>I build web applications\n| Performance-driven and secure by design</code>",
  "<code>I build web applications\n| Full-Stack Development</code>",
];

const ContactButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  color: #fff;
  background-color: rgba(200, 162, 200, 0.5);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7799ff;
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
`;

const Circle2 = styled(Circle)`
  width: 100px;
  height: 100px;
  top: 5%;
  left: 46%;
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

const AboutMe = () => {
  const navigate = useNavigate();

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
            Full-Stack Web Developer | Master's Degree in Professional Web
            (2023-2024) Development and Applications, Universidad Europea
            Madrid. <br /> <br /> Diploma in Graphic Design, Escola Espai
            Barcelona (2022-2023).
            <br />
            <br />I am Amanda Flores, a Full-Stack Developer with advanced
            training in web and application development, complemented by a solid
            foundation in graphic design. Originally from Honduras, I spent 14
            years in Barcelona and now live in Norway, embracing a multicultural
            and adaptable perspective that enriches my approach to development.{" "}
            <br /> <br />
            I recently completed my Master’s Degree in Web Development and
            Applications online at Universidad Europea Madrid. During the
            program, I gained expertise in technologies such as React, Angular,
            Node.js, and Django, among others. My skill set extends far beyond
            these, encompassing a broad array of tools and frameworks that
            enable me to create scalable, user-centric solutions. My academic
            journey culminated in a Master’s thesis, where I achieved a perfect
            10/10, demonstrating my ability to deliver innovative and
            high-quality results. The projects I developed throughout the
            program, including my thesis, simulate real-world applications,
            equipping me with practical experience. <br /> <br />
            In addition to my technical expertise, my diploma in graphic design
            from Escola Espai Barcelona has honed my creative abilities,
            especially in tools like Photoshop, Adobe Illustrator, and InDesign.
            This combination allows me to merge functionality with aesthetic
            appeal in my work.
          </Description>
        </TextContainer>
        <ImageContainer>
          <Box>
            <RotatingTypingEffect
              messages={messages}
              speed={100}
              pause={1000}
            />
          </Box>
          <ProfileImage src="/images/perfil.jpg" alt="Perfil" />

          <ProfileInfoBox />
          <ButtonContainer>
            <DownloadButton href="/path/to/CV.pdf" download>
              <div style={{ display: "flex", alignItems: "center" }}>
                <DownloadIcon
                  style={{ marginRight: "8px", fontSize: "16px" }}
                />
                Resume
              </div>
            </DownloadButton>
            <ContactButton onClick={handleContactClick}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ContactMailIcon
                  style={{ marginRight: "8px", fontSize: "16px" }}
                />
                Contact
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
