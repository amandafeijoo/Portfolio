import React, { useEffect } from "react";
import TechStack from "./TechStack";
import ProfileInfoBox from "./ProfileInfoBox";
import RotatingTypingEffect from "./RotatingTypingEffect";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AboutContainer,
  TextContainer,
  ImageContainer,
} from "./styles/AboutContainer.styles";
import {
  StyledText,
  Description,
  AnimatedLetter,
} from "./styles/AboutText.styles";
import {
  DesktopMessageContainer,
  MobileMessageContainer,
} from "./styles/AboutMessages.styles";
import { ProfileImage } from "./styles/AboutImage.styles";
import AboutButtons from "./AboutButtons";
import AboutVisual from "./AboutVisual";

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
      {/* VISUAL INTRO */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 360, sm: 480, md: 640, lg: 720 },
          height: { xs: 300, sm: 360, md: 460, lg: 520 },
          mb: { xs: 1, md: 2 },
        }}
      >
        <AboutVisual />
      </Box>

      {/* TITLE */}
      <StyledText as="div">
        <span
          style={{
            fontSize: "0.9rem",
            letterSpacing: "0.45em",
            fontWeight: 600,
            color: "rgba(240, 201, 123, 0.95)",
            textTransform: "uppercase",
            marginBottom: "12px",
            display: "block",
          }}
        >
          About
        </span>

        <span
          style={{
            fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
            fontWeight: 500,
            color: "#F4F2ED",
            textShadow: "0 0 28px rgba(201,184,138,0.25)",
          }}
        >
          Webcode-Art
        </span>
      </StyledText>
      <div
        style={{
          margin: "18px auto 0",
          width: "64px",
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(201,184,138,0.6), transparent)",
        }}
      />

      <AboutContainer>
        {/* TEXT */}
        <TextContainer>
          <Description>
            <strong>Webcode-Art</strong> is a freelance web development studio
            focused on building modern, high-performance digital experiences for
            brands, professionals, and growing businesses.
            <br />
            <br />
            Behind Webcode-Art is <strong>Amanda Flores</strong> a Full-Stack
            Web Developer with a strong frontend focus and a passion for
            transforming ideas into intuitive, scalable, and visually refined
            web solutions.
            <br />
            <br />
            I design and develop custom platforms using modern technologies such
            as React, Angular, Node.js, and Django, combining clean
            architecture, performance, and thoughtful user experience. Databases
            like PostgreSQL, MongoDB, and MySQL are an integral part of the
            systems I build.
            <br />
            <br />
            My background in graphic design allows me to bridge the gap between
            aesthetics and functionality ensuring every project is not only
            technically solid but also visually intentional and user-centered.
            <br />
            <br />I hold a Master’s Degree in Web Development and Applications
            from Universidad Europea Madrid (GPA 9.04/10), with a thesis project
            awarded a 10/10. I’ve built and deployed real-world platforms such
            as <strong>Arrazola Psicología</strong>, a booking and payment
            system for a licensed therapist, as well as complete demo platforms
            like <strong>DineBooker</strong> and <strong>FitLife Gym</strong>.
            <br />
            <br />
            Originally from Honduras, after living 14 years in Barcelona, I’m
            now based in Trondheim, Norway. This multicultural journey shapes
            how I design, communicate, and collaborate with clients worldwide.
            <br />
            <br />
            <strong>Webcode-Art is not an agency.</strong> It’s a personal,
            high-quality freelance studio where every project is designed,
            developed, and delivered with care, clarity, and long-term vision.
            <br />
            <br />
            Let’s build something meaningful together 🚀
          </Description>
        </TextContainer>

        {/* RIGHT SIDE */}
        <ImageContainer>
          <Box>
            <DesktopMessageContainer>
              <RotatingTypingEffect
                messages={[
                  "<code>Webcode-Art</code>",
                  "<code>Freelance Web Studio</code>",
                  "<code>Built by Amanda Flores</code>",
                  "<code>Design • Code • Performance</code>",
                ]}
                speed={100}
                pause={1200}
              />
            </DesktopMessageContainer>

            <MobileMessageContainer>
              <RotatingTypingEffect
                messages={["<code>Freelance Web Studio</code>"]}
                speed={100}
                pause={1200}
              />
            </MobileMessageContainer>
          </Box>

          <ProfileImage src="/static/images/perfil.jpg" alt="Amanda Flores" />
          <ProfileInfoBox />
          <AboutButtons onContactClick={handleContactClick} />
        </ImageContainer>
      </AboutContainer>

      {/* STACK */}
      <TechStack />
    </>
  );
};
export default AboutMe;
