import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Circles from "./Circles";
import axios from "axios";
import Swal from "sweetalert2";
import ContactForm from "./ContactForm";

const fadeInUp = keyframes`

  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

const AnimatedLetter = styled.span`
  display: inline-block;
  position: relative;
  animation: ${rotate} 9s infinite;
  border: 2px solid #99aaff;
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

  @media (max-width: 768px) {
    font-size: 3.5em;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 2.5em;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

const borderAnimation = keyframes`
  0% { border-color: #7799ff; }
  25% { border-color: #ff7799; }
  75% { border-color: #ff99ff; }
  100% { border-color: #7799ff; }
`;

const AnimatedTypography = styled(Typography)`
  ${({ scale }) => css`
    transform: scale(${scale});
    transition: transform 0.1s ease-in-out;
  `}
`;

const LargeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  top: 12vh;
  text-align: center;
  border: 2px solid #d0ff94;
  padding: 20px;
  animation: ${fadeInUp} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    ${borderAnimation} 5s infinite;
  opacity: 1;
  width: 60vw;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 80vw;
    height: 70vh;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 60vh;
    padding: 10px;
    margin-top: 120px;
  }
`;

const SmallSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15vh;
  text-align: center;
  top: 12vh;
  border-top: 2px solid #99aaff;
  padding: 20px;
  background: linear-gradient(
    45deg,
    rgba(200, 162, 200, 0.1),
    rgba(180, 140, 180, 0.2),
    rgba(160, 120, 160, 0.2)
  );
  animation: ${fadeInUp} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    ${borderAnimation} 5s infinite;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  width: 60vw;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 80vw;
    height: 20vh;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 12vh;
    padding: 10px;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  animation: ${fadeInUp} 4s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1s;
  opacity: 0;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 5px;
  }
`;

const ContactPage = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = 1 + scrollPosition / 1000;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          section.style.opacity = 1;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ minHeight: "220vh" }}>
        <LargeSection>
          <AnimatedTypography
            scale={scale}
            variant="h1"
            component="h1"
            sx={{
              fontFamily: "'Source Code Pro', monospace",
              fontSize: "1.7rem",
              marginTop: "120px",              
              padding: "20px",
            }}
          >
            <StyledText>
              <AnimatedLetter>C</AnimatedLetter>ontact
            </StyledText>
          </AnimatedTypography>
        </LargeSection>
        <SmallSection>
          <ContactInfo>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
              }}
            >
              Email
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
              }}
            >
              amanda_feijoo@hotmail.com
            </Typography>
          </ContactInfo>
        </SmallSection>
        <SmallSection>
          <ContactInfo>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
              }}
            >
              Instagram
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
              }}
            >
              @mandyfeijoo
            </Typography>
          </ContactInfo>
        </SmallSection>
        <SmallSection>
          <ContactInfo>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
              }}
            >
              Facebook
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
              }}
            >
              Amanda Flores Feijoo
            </Typography>
          </ContactInfo>
        </SmallSection>
        <div>
          <Circles />
        </div>
        <LargeSection>
          <ContactFormContainer>
            <ContactForm />
          </ContactFormContainer>
        </LargeSection>
      </div>
    </>
  );
};

export default ContactPage;
