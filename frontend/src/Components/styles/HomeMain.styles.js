import styled from "styled-components";
import { rotate, float } from "./animations";


const StyledCtaButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  background-color: rgba(200, 162, 200, 0.3);
  color: rgb(235, 210, 235);
  font-family: "Source Code Pro", monospace;
  font-size: 1.1rem;
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

const AnimatedLetter = styled.span`
  display: inline-block;
  position: relative;
  animation: ${rotate} 9s infinite;
  border: 2px solid rgba(200, 162, 200, 0.5);
  margin-right: 13px;
  margin-top: 150px;

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

  @media (max-width: 1024px) {
    padding: 15px; /* Tabletas */
  }

  @media (max-width: 1200px) {
    padding: 20px; /* Pantallas pequeñas */
  }

  @media (min-width: 1201px) {
    padding: 25px; /* Pantallas grandes */
  }

  @media (max-width: 768px) {
    padding: 10px; /* Móviles */
  }

  @media (max-width: 480px) {
    padding: 5px; /* Móviles pequeños */
  }
`;

const StyledText = styled.span`
  font-size: 4.8em;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  text-shadow: 0 0 3px #fff;
  color: #fff;
  margin-top: 30px; /* Ajuste general */
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 4em;
    margin-top: 15px; /* Ajuste para pantallas más pequeñas */
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    font-size: 3.5em;
    margin-top: 50px; /* Ajuste para iPad Mini */
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    /* iPad Air */
    font-size: 4em;
    margin-top: 30px; /* Ajuste para iPad Air */
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    /* iPad Pro */
    font-size: 4.5em;
    margin-top: 100px; /* Ajuste para iPad Pro */
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-top: 100px; /* Ajuste para pantallas más pequeñas */
  }

  /* iPhone SE */
  @media (max-width: 375px) and (min-height: 667px) {
    font-size: 2.5em;
    margin-top: 140px; /* Ajuste para iPhone SE */
  }

  /* iPhone 14 Pro */
  @media (max-width: 393px) and (min-height: 852px) {
    font-size: 2.9em;
    margin-top: 220px; /* Ajuste para iPhone 14 Pro */
  }
`;

const NameText = styled.span`
  font-size: 3em;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  text-shadow: 0 0 2px #fff;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 2.5em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.8em;
  }
`;

const MainContainer = styled.div`
  display: flex;
  margin-top: 150px;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    margin-bottom: 25px;
  }

  @media (max-width: 1024px) {
    margin-top: -40px;
    padding: 15px; /* Tabletas */
  }

  @media (max-width: 1200px) {
    padding: 20px; /* Pantallas pequeñas */
  }

  @media (min-width: 1201px) {
    padding: 25px; /* Pantallas grandes */
  }

  @media (min-width: 768px) and (max-width: 834px) {
    /* iPad Mini */
    margin-top: 120px;
    margin-bottom: 80px;
  }

  @media (min-width: 834px) and (max-width: 1024px) {
    /* iPad Air */
    margin-top: 70px;
    margin-bottom: 70px;
  }

  @media (max-width: 375px) {
    /* iPhone SE */
    margin-top: 5px;
    margin-bottom: 0px;
    padding: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 15px; /* Tabletas */
  }

  @media (max-width: 1200px) {
    padding: 20px; /* Pantallas pequeñas */
  }

  @media (min-width: 1201px) {
    padding: 25px; /* Pantallas grandes */
  }

  @media (max-width: 768px) {
    padding: 10px; /* Móviles */
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    padding: 5px; /* Móviles pequeños */
    margin-top: 0px;
  }

  @media (max-width: 375px) {
    /* iPhone SE */
    padding: 8px;
    margin-top: 20px;
  }

  @media (max-width: 390px) {
    /* iPhone Pro */
    margin-top: 60px;
    font-size: 1.2em;
  }
`;

const StyledP = styled.p`
  color: #fff;
  font-size: 20px;
  margin-bottom: 0px;
  text-align: center;
  margin-top: -10px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-bottom: 0px;
    text-align: center;
    margin-top: -30px;
  }

  @media (max-width: 1024px) {
    padding: 15px; /* Tabletas */
  }

  @media (max-width: 1200px) {
    padding: 20px; /* Pantallas pequeñas */
  }

  @media (min-width: 1201px) {
    padding: 25px; /* Pantallas grandes */
  }

  @media (max-width: 375px) {
    /* iPhone SE */
    font-size: 13px;
    margin-bottom: 30px;
    margin-top: 10px;
    padding: 10px;
  }
  @media (max-width: 390px) {
    /* iPhone Pro */
    font-size: 13px;
  }
  @media (max-width: 430px) {
    /* iPhone Pro Max */
    font-size: 13px;
    margin-top: 5px;
  }
`;

export {
    StyledCtaButton,
    AnimatedLetter,
    StyledText,
    NameText,
    MainContainer,
    TextContainer,
    StyledP,
    rotate,
    float,
  };
  