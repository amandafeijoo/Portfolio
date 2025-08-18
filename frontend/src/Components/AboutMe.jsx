import React, { useEffect } from "react";
import TechStack from "./TechStack";
import ProfileInfoBox from "./ProfileInfoBox";
import RotatingTypingEffect from "./RotatingTypingEffect";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AboutContainer, TextContainer, ImageContainer } from "./styles/AboutContainer.styles";
import { StyledText, Description, AnimatedLetter } from "./styles/AboutText.styles";
import { DesktopMessageContainer, MobileMessageContainer } from "./styles/AboutMessages.styles";
import { ProfileImage } from "./styles/AboutImage.styles";
import CirclesAboutMe from "./CirclesAboutMe";
import AboutButtons from "./AboutButtons";


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
    navigate("/contactpage");
  };

  return (
    <>
      <AboutContainer>
        <CirclesAboutMe />
        <TextContainer>
          <StyledText>
            <AnimatedLetter>A</AnimatedLetter>bout Me .
          </StyledText>
          <Description>
            I'm Amanda Flores — a Full-Stack Web Developer with a strong focus
            on frontend development and a passion for turning ideas into
            intuitive, responsive digital experiences. I work with modern
            technologies like React, Angular, Node.js, and Django, and I'm
            confident managing databases with PostgreSQL, MongoDB, and MySQL.
            <br />
            <br />
            I also use tools like Docker, MUI, Google Cloud, and deployment
            platforms like Railway, Render, Netlify, and Google Workspace (via
            Squarespace) to build scalable and maintainable applications.
            <br />
            <br />
            I hold a Master’s Degree in Web Development and Applications from
            Universidad Europea Madrid (GPA 9.04/10), where I earned a 10/10 on
            my thesis project. I also have a diploma in graphic design from
            Escola Espai Barcelona, which allows me to bring visual clarity and
            creativity into every project.
            <br />
            <br />
            Originally from Honduras, I lived in Barcelona 14 years, and I’m now
            based in Trondheim, Norway. My multicultural background shapes how I
            design, develop, and collaborate.
            <br />
            <br />
            I’ve built and deployed real-world platforms like{" "}
            <strong>Arrazola Psicología</strong> (a booking and payment system
            for a licensed therapist), and <strong>Webcode-Art</strong> (my
            personal portfolio and contact platform). I’ve also developed full
            demo versions of <strong>DineBooker</strong> and{" "}
            <strong>FitLife Gym</strong> — completed during my Master’s program
            and showcased in my portfolio.
            <br />
            <br />
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
          <ProfileImage src="/static/images/perfil.jpg" alt="Perfil" />
          <ProfileInfoBox />
          <AboutButtons onContactClick={handleContactClick} />
        </ImageContainer>
      </AboutContainer>
      <TechStack />
    </>
  );
};

export default AboutMe;
