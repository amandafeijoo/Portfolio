import styled, { keyframes } from "styled-components";

export const borderAnimation = keyframes`
  0% { border-color: #99aaff; }
  50% { border-color: #ff99aa; }
  100% { border-color: #99aaff; }
`;

export const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 20px;
`;

export const AnimatedLetter = styled.span`
  display: inline-block;
  position: relative;
  animation: ${rotate} 20s infinite;
  border: 2px solid rgba(200, 162, 200, 0.5);
  margin-right: 13px;
`;

export const StyledText = styled.span`
  font-size: 5em;
  display: inline-block;
  text-shadow: 0 0 3px #fff;
  color: #fff;
  margin-top: 33px;
  margin-bottom: 40px;
  font-family: "Source Code Pro", monospace;
  animation: ${borderAnimation} 3s infinite;

  @media (max-width: 480px) { font-size: 3em; }
  @media (max-width: 768px) { font-size: 2.5em; margin-top: 220px; }
  @media (max-width: 834px) and (min-width: 768px) { font-size: 3.5em; margin-top: 100px; }
  @media (max-width: 1024px) { font-size: 4em; margin-top: 40px; }
  @media (min-width: 1024px) and (max-width: 1366px) { font-size: 4.5em; margin-top: 150px; }
`;

export const StyledVideo = styled.video`
  width: 80%;
  height: auto;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
  border-radius: 10px;
  border: 3px solid #d8bfd8;
  margin-bottom: 40px;
  animation: ${borderAnimation} 3s infinite;
  padding: 10px;
`;

export const DescriptionContainer = styled.div`
  text-align: left;
  text-justify: inter-word;
  padding: 20px;
  border: 3px solid #99aaff;
  border-radius: 10px;
  animation: ${borderAnimation} 3s infinite;
  margin-bottom: 20px;
`;
