import styled, { keyframes } from "styled-components";

// Animación de entrada
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

// Contenedor principal del formulario
export const ContactFormContainer = styled.div`
  margin-top: 20px;
  animation: ${fadeInUp} 4.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1.5s;
  opacity: 0;
  animation-fill-mode: forwards;
  width: 90%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 95%;
    height: 70vh;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    margin-top: -80px;
    padding: 10px;
    margin-left: 0%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 820px) and (max-width: 820px) and (min-height: 1180px) {
    width: 95%;
    height: 75vh;
    padding: 15px;
    margin-top: -160px;
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) {
    width: 85%;
    height: 75vh;
    padding: 20px;
    margin-top: -300px;
  }

  @media (min-width: 768px) and (max-width: 768px) and (min-height: 1024px) {
    width: 90%;
    height: 75vh;
    padding: 15px;
    margin-top: -90px;
  }
`;
