import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const SummaryContainer = styled.div`
  opacity: 0;
  transform: scale(0.8) translateY(200px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  border: 1px solid rgba(200, 162, 200, 0.5);
  padding: 20px;
  text-align: center;
  width: 60%;
  margin-top: 150px;
  margin-bottom: 120px;

  &.visible {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 15px; /* Tabletas */
    margin-top: -200px;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    max-width: 60%;
    padding: 30px;
    margin-top: -100px;
    margin-bottom: 140px;
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    /* iPad Air */
    max-width: 70% !important;
    padding: 20px !important;
    margin-top: -200px !important;
    margin-bottom: 300px !important;
  }

  @media (max-width: 1366px) and (min-width: 1024px) {
    /* iPad Pro */
    max-width: 70% !important;
    padding: 20px !important;
    margin-top: -80px !important;
    margin-bottom: 100px !important;
  }

  @media (max-width: 768px) {
    width: 100% !important;
    padding: 3px !important;
    margin-top: -80px !important;
    margin-bottom: 60px !important;
  }

  @media (max-width: 480px) {
    width: 70% !important;
    padding: 6px !important;
    margin-top: -280px !important;
    margin-bottom: 90px !important;
  }

  @media (max-width: 375px) {
    /* iPhone SE */
    width: 80% !important;
    padding: 10px !important;
    margin-top: -100px !important;
    margin-bottom: 50px !important;
  }

  @media (max-width: 430px) {
    /* iPhone 14 Pro */
    width: 80% !important;
    padding: 10px !important;
    margin-top: -20px !important;
    margin-bottom: 70px !important;
  }
`;

const SummaryText = styled.p`
  text-align: justify;
  line-height: 1.6;
  margin: 10px 0;
  color: #ffff;

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    /* iPhone SE */
    font-size: 12px;
  }

  @media (min-width: 1025px) {
    font-size: 16px;
  }
`;

const StyledH2 = styled.h2`
  color: white;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
  box-shadow: 0px 4px 20px rgba(128, 128, 128, 0.5),
    0px 4px 20px rgba(255, 255, 255, 0.5), 0px 4px 20px rgba(153, 102, 255, 0.5);
  transition: all 0.5s;
  border: 2px solid #99aaff;

  &.visible {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
  }
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  background-color: rgba(200, 162, 200, 0.3);
  color: rgb(235, 210, 235);
  font-family: "Source Code Pro", monospace;
  font-size: 1rem;
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

const AboutSummary = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const navigate = useNavigate();

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 7000;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SummaryContainer
      ref={ref}
      className={inView ? "visible" : ""}
      style={{ transform: `scale(${scale})` }}
    >
      <ProfileImage
        src="/images/perfil.jpg"
        alt="Perfil"
        className={inView ? "visible" : ""}
      />
      <StyledH2>About Me</StyledH2>
      <SummaryText>
      Hi, I’m Amanda — a Full-Stack Developer with a creative background and a passion for building websites that not only work well, but feel good to use. I recently made the switch to tech, and I’ve been loving every step of the journey so far.
      </SummaryText>
      <StyledButton onClick={() => navigate("/AboutMe")}>
        Explore my background
      </StyledButton>
    </SummaryContainer>
  );
};

export default AboutSummary;
