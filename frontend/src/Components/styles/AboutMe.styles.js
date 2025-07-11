import styled, { keyframes } from "styled-components";

// Animaciones
export const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

export const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Contenedor principal
export const AboutContainer = styled.div`
  margin-top: 105px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  border: 2px solid #99aaff;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 280px;
    padding: 0px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 280px;
    padding: 0px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin-top: 280px;
    padding: 10px;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }

  @media (max-width: 430px) {
    margin-top: 150px;
  }

  @media (max-width: 390px) {
    margin-top: 140px;
  }

  @media (max-width: 375px) {
    margin-top: 130px;
  }

  @media (max-width: 820px) and (min-width: 768px),
         (max-width: 834px) and (min-width: 768px),
         (max-width: 1024px) and (min-width: 768px) {
    margin-top: 120px;
  }
`;

// Texto descriptivo
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

// Animación de la letra girando
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

// Título "About Me"
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

// Contenedor del texto
export const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    bottom: -20px;
    right: 0;
    width: 2px;
    background-color: #99aaff;
  }

  @media (max-width: 768px) {
    &::after {
      display: none;
    }
  }
`;

// Contenedor de la imagen
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`;

// Imagen de perfil
export const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0px 4px 20px rgba(128, 128, 128, 0.5),
              0px 4px 20px rgba(255, 255, 255, 0.5),
              0px 4px 20px rgba(153, 102, 255, 0.5);
  transition: all 0.5s;
  border: 2px solid #99aaff;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1025px) and (max-width: 1366px) {
    width: 550px;
    height: 550px;
    margin-bottom: 80px;
  }
`;

// Contenedor de los botones
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  gap: 20px;
`;

// Botón de descarga y contacto (base igual)
const BaseButton = styled.a`
  display: inline-block;
  padding: 12px 22px;
  font-size: 1em;
  color: #d8bfd8;
  background-color: rgba(200, 162, 200, 0.5);
  border: none;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(200, 162, 200, 0.3);
    color: #d8bfd8;
    margin-right: 5px;
  }

  & svg {
    color: white;
    margin-right: 8px;
  }
`;

export const MessageContainer = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  font-size: 1em;

  @media (max-width: 768px) {
    width: 250px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 60px;
    font-size: 0.4em;
  }

  @media (min-width: 768px) and (max-width: 834px) and (orientation: portrait) {
    width: 450px;
    height: 120px;
    font-size: 1.2em;
  }

  @media (min-width: 1025px) and (max-width: 1366px) {
    width: 500px;
    height: 150px;
    font-size: 1.7em;
    margin-top: -300px;
  }
`;

export const DesktopMessageContainer = styled(MessageContainer)`
  @media (max-width: 480px) {
    display: none;
  }
`;

export const MobileMessageContainer = styled(MessageContainer)`
  display: none;

  @media (max-width: 480px) {
    display: flex;
  }
`;


export const DownloadButton = styled(BaseButton)``;
export const ContactButton = styled(BaseButton)``;
