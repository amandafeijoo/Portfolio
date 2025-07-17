import styled, { keyframes } from "styled-components";

// Animaciones
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Contenedor principal
export const ProjectsContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 110px;
  margin-bottom: 100px;
  min-height: 100vh;

  @media (max-width: 1024px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    margin-top: 200px;
    margin-bottom: 40px;
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    margin-top: 180px;
    margin-bottom: 60px;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 90px;
    margin-bottom: 70px;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 10px;
  }
`;

// Tarjeta contenedora
export const SquareContainer = styled.div`
  position: relative;
  width: 600px;
  height: 800px;
  overflow: hidden;
  margin-top: 50px;
  border: 2px solid rgba(200, 162, 200, 0.5);
  border-radius: 10px;
  background: linear-gradient(
    45deg,
    rgba(200, 162, 200, 0.5),
    rgba(200, 162, 200, 0.5),
    rgba(200, 162, 200, 0.6)
  );

  @media (max-width: 1024px) {
    width: 450px;
    height: 600px;
  }

  @media (max-width: 768px) {
    width: 340px;
    height: 760px;
    margin-top: 0;
  }
`;

// Fondo de ondas
export const WaveBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: 0;
  overflow: hidden;
`;

// Contenedor para la tarjeta
export const ProjectCardContainer = styled.div`
  position: relative;
  z-index: 1;
`;

// Letra animada "P"
export const AnimatedLetter = styled.span`
  display: inline-block;
  position: relative;
  animation: ${rotate} 20s infinite;
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

// Texto "Projects"
export const StyledText = styled.span`
  font-size: 5.2em;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  text-shadow: 0 0 3px #fff;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 4em;
    margin-top: 15px;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    font-size: 3.5em;
    margin-top: 50px;
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    font-size: 4em;
    margin-top: 30px;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    font-size: 4.5em;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-top: 100px;
  }

  @media (max-width: 375px) and (min-height: 667px) {
    font-size: 2.5em;
    margin-top: 100px;
  }

  @media (max-width: 393px) and (min-height: 852px) {
    font-size: 2.9em;
    margin-top: 120px;
  }
`;

