import styled from "styled-components";
import { rotate } from "./animationsAbout";


export const StyledText = styled.span`
  font-size: 5.2em;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  text-shadow: 0 0 3px #fff;
  color: #fff;
  margin-top: 33px;
  margin-bottom: 20px;

  @media (max-width: 1024px) and (min-width: 768px),
         (max-width: 834px) and (min-width: 768px),
         (max-width: 820px) and (min-width: 768px) {
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
    font-size: 2.5em;
    margin-top: 50px;
    margin-left: 10px;
  }
`;

export const Description = styled.p`
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

  @media (min-width: 768px) and (max-width: 834px) and (orientation: portrait),
         (min-width: 1024px) and (max-width: 1366px) {
    font-size: 1.3em;
    line-height: 1.8;
    padding: 0 60px;
  }
`;

export const AnimatedLetter = styled.span`
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
