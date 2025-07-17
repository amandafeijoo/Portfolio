import styled, { keyframes } from "styled-components";
import Wavify from "react-wavify";

// Animations
const slideInAndGrow = keyframes`
  0% { transform: translateY(20px) scale(0.95); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`;

const slideOutAndShrink = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(20px) scale(0.95); opacity: 0; }
`;

export const SummaryContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  max-width: 700px;
  border: 2px solid rgba(200, 162, 200, 0.5);

  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    margin: 5px;
  }

  @media (min-width: 1025px) {
    padding: 50px;
    margin: 30px;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 2.4em;
  color: #fff;
  text-shadow: 0 0 3px #000;

  @media (max-width: 768px) {
    font-size: 1.9em;
  }
`;

export const SummaryText = styled.p`
  font-size: 1em;
  color: #fff;
  text-shadow: 0 0 3px #000;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const ProjectCardContainer = styled.div`
  position: relative;
  animation: ${({ inView }) => (inView ? slideInAndGrow : slideOutAndShrink)} 1s ease-out forwards;
  opacity: 0;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(200, 162, 200, 0.5);
  overflow: hidden;

  @media (max-width: 1024px) {
    animation: none !important;
    opacity: 1;
    padding: 10px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    padding: 8px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    margin-bottom: 60px;
  }

  @media (min-width: 1440px) {
    padding: 25px;
    margin-bottom: 50px;
  }
`;

export const ProjectVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border: 3px solid #99aaff;
  object-fit: cover;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
  color: #000;

  @media (max-width: 768px) {
    font-size: 1.2em;
    color: #e6e6fa;
    font-weight: bold;
  }
`;

export const ProjectComment = styled.p`
  font-size: 0.9em;
  color: #d8bfd8;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const ProjectTechnologies = styled.p`
  font-size: 0.9em;
  color: #999;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const WaveBackground = styled(Wavify)`
  position: absolute;
  margin-top: 500px;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: -1;
  transform: scaleY(3.5);
  opacity: 0.5;

  @media (max-width: 768px) {
    height: 50px;
    transform: scaleY(2.5);
  }

  @media (max-width: 480px) {
    height: 30px;
    transform: scaleY(1.5);
  }
`;
