import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  margin-top: 150px;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
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
    padding: 15px;
  }

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (min-width: 1201px) {
    padding: 25px;
  }

  @media (min-width: 768px) and (max-width: 834px) {
    margin-top: 120px;
    margin-bottom: 80px;
  }

  @media (min-width: 834px) and (max-width: 1024px) {
    margin-top: 70px;
    margin-bottom: 70px;
  }

  @media (max-width: 375px) {
    margin-top: 5px;
    margin-bottom: 0px;
    padding: 10px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (min-width: 1201px) {
    padding: 25px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    margin-top: 0px;
  }

  @media (max-width: 375px) {
    padding: 8px;
    margin-top: 20px;
  }

  @media (max-width: 390px) {
    margin-top: 60px;
    font-size: 1.2em;
  }
`;
