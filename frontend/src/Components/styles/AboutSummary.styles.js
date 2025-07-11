import styled from "styled-components";

export const SummaryContainer = styled.div`
  opacity: 0;
  transform: scale(0.8) translateY(200px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  border: 1px solid rgba(200, 162, 200, 0.5);
  padding: 20px;
  text-align: center;
  width: 70%;
  margin: 140px auto 120px auto;

  &.visible {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  @media (max-width: 1024px) {
    margin-top: -200px;
    width: 80%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    margin-top: -80px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin-top: -120px;
  }
`;

export const SummaryText = styled.p`
  text-align: justify;
  line-height: 1.6;
  margin: 10px 0;
  color: #fff;
  font-size: 14px;

  @media (min-width: 1025px) {
    font-size: 16px;
  }
`;

export const StyledH2 = styled.h2`
  color: white;
`;

export const ProfileImage = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  margin: 40px 0;
  z-index: 1;
  box-shadow: 0px 4px 20px rgba(128, 128, 128, 0.5),
    0px 4px 20px rgba(255, 255, 255, 0.5), 0px 4px 20px rgba(153, 102, 255, 0.5);
  border: 2px solid #99aaff;
  transition: transform 0.5s ease;

  &.visible {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const StyledButton = styled.button`
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  padding: 12px 22px;
  background-color: rgba(200, 162, 200, 0.3);
  color: rgb(235, 210, 235);
  font-family: "Source Code Pro", monospace;
  font-size: 1rem;
  border-radius: 12px;
  border: 2px solid rgba(200, 162, 200, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(200, 162, 200, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 18px;
  }
`;
