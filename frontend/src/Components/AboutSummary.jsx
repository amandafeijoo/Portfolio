import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  SummaryContainer,
  SummaryText,
  StyledH2,
  ProfileImage,
  StyledButton,
} from "./styles/AboutSummary.styles";

const AboutSummary = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const navigate = useNavigate();

  return (
    <SummaryContainer
      ref={ref}
      className={inView ? "visible" : ""}
    >
      <ProfileImage
        src="/static/images/perfil.jpg"
        alt="Perfil"
        className={inView ? "visible" : ""}
      />
      <StyledH2>About Me</StyledH2>
      <SummaryText>
        Hi, I’m Amanda — a Full-Stack Developer with a creative background and a
        passion for building websites that not only work well, but feel good to use.
        I recently made the switch to tech, and I’ve been loving every step of the journey so far.
      </SummaryText>
      <StyledButton onClick={() => navigate("/AboutMe")}>
        Explore my background
      </StyledButton>
    </SummaryContainer>
  );
};

export default AboutSummary;

