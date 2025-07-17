// src/Componentes/styles/ProjectsCircles.styles.js
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const CircleBase = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(200, 162, 200, 0.9);
  animation: ${float} 4s ease-in-out infinite;
  z-index: 2;
`;

export const Circle1 = styled(CircleBase)`
  width: 300px;
  height: 300px;
  top: 8%;
  left: 5%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 10%;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    top: 10%;
    left: 70%;
  }
`;

export const Circle2 = styled(CircleBase)`
  width: 170px;
  height: 170px;
  top: 10%;
  left: 20%;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
    top: 20%;
    left: 25%;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    top: 13%;
    left: 60%;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    top: 10%;
    left: 80%;
  }
`;

export const Circle3 = styled(CircleBase)`
  width: 150px;
  height: 150px;
  top: 80%;
  left: 82%;

  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
    top: 70%;
    left: 80%;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: 96%;
    left: 0%;
  }
`;

export const Circle4 = styled(CircleBase)`
  width: 350px;
  height: 350px;
  top: 82%;
  left: 80%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
    top: 90%;
    left: 75%;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    top: 97%;
    left: 40%;
  }
`;
