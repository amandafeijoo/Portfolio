import styled from "styled-components";

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

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`;
