import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 40px;

  position: relative;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    inset: -40px;
    background: radial-gradient(
      60% 40% at 50% 30%,
      rgba(201, 184, 138, 0.12),
      transparent 70%
    );
    filter: blur(40px);
    z-index: -1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 200px;
    padding: 20px;
    gap: 24px;
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

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin-top: 180px;
    padding: 30px;
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
    top: 10%;
    bottom: 10%;
    right: 0;
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(201, 184, 138, 0.6),
      transparent
    );
    box-shadow: 0 0 12px rgba(201, 184, 138, 0.35);
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
