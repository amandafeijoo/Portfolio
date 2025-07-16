import styled, { css, keyframes } from "styled-components";
import { Typography } from "@mui/material";


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

  @media (max-width: 1024px) and (min-width: 768px) {
    /* iPad Pro */
    font-size: 4.5em;
    margin-top: 25px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 3.5em;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 2em;
    margin-top: 180px;
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

  @media (max-width: 1024px) and (min-width: 768px) {
    /* iPad Pro */
    width: 80vw;
    height: 75vh;
    padding: 18px;
    margin-top: 20px;
  }

  @media (max-width: 834px) and (min-width: 768px) and (min-height: 1024px) and (max-height: 1024px) {
    /* iPad Mini */
    width: 75vw;
    height: 105vh;
    padding: 18px;
    margin-top: 30px;
  }

  @media (max-width: 820px) and (min-width: 820px) and (min-height: 1180px) and (max-height: 1180px) {
    /* iPad Air */
    width: 75vw;
    height: 100vh;
    padding: 18px;
    margin-top: 25px;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 70vh;
    padding: 15px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 70vh;
    padding: 10px;
    margin-top: 40px;
    margin-bottom: 0;
  }

  @media (max-width: 414px) and (min-width: 375px) and (min-height: 812px) and (max-height: 812px) {
    /* iPhone X, iPhone XS, iPhone 11 Pro */
    width: 85vw;
    height: 65vh;
    padding: 12px;
    margin-top: 35px;
  }

  @media (max-width: 375px) and (min-width: 320px) and (min-height: 568px) and (max-height: 568px) {
    /* iPhone SE */
    width: 90vw;
    height: 60vh;
    padding: 8px;
    margin-top: 40px;
  }

  @media (max-width: 414px) and (min-width: 375px) and (min-height: 896px) and (max-height: 896px) {
    /* iPhone XR, iPhone 11, iPhone 11 Pro Max */
    width: 85vw;
    height: 70vh;
    padding: 15px;
    margin-top: 30px;
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
  z-index: 10;

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

  @media (min-width: 820px) and (max-width: 820px) and (min-height: 1180px) and (max-height: 1180px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 75vw;
    height: 18vh;
    padding: 18px;
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 80vw;
    height: 20vh;
    padding: 20px;
  }

  @media (min-width: 768px) and (max-width: 768px) and (min-height: 1024px) and (max-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 80vw;
    height: 18vh;
    padding: 15px;
  }
`;

const ContactSection = styled.div`
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
    width: 100vw;
    height: 70vh;
    padding: 10px;
    margin-top: 120px;
    top: 0;
    margin-bottom: 0;
  }

  @media (min-width: 820px) and (max-width: 820px) and (min-height: 1180px) and (max-height: 1180px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 75vw;
    height: 70vh;
    padding: 18px;
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 80vw;
    height: 60vh;
    padding: 20px;
  }

  @media (min-width: 768px) and (max-width: 768px) and (min-height: 1024px) and (max-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 80vw;
    height: 60vh;
    padding: 15px;
    margin-top: 0px;
  }

  @media (max-width: 430px) {
    /* iPhone 14 Pro */
    width: 100vw;
    height: 90vh; /* Un poco más largo */
    padding: 10px;
    margin-top: 120px;
    top: 0;
    margin-bottom: 0;
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

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 25px;
  }
`;

export {
    AnimatedLetter,
    StyledText,
    AnimatedTypography,
    LargeSection,
    SmallSection,
    ContactSection,
    ContactInfo
  };
  