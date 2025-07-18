import styled from "styled-components";
import { float } from "./animationsAbout";

export const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(200, 162, 200, 0.9);
  animation: ${float} 4s ease-in-out infinite;
  z-index: 2;
`;

export const Circle1 = styled(Circle)`
  width: 150px;
  height: 150px;
  top: 10%;
  left: 42%;
  background-color: rgba(200, 162, 200, 0.5);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-top: -190px;
    margin-left: 80px;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 140px;
    height: 140px;
    top: 10%;
    left: 80%;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    width: 130px;
    height: 130px;
    top: 18%;
    left: 65%;
  }
`;

export const Circle2 = styled(Circle)`
  width: 100px;
  height: 100px;
  top: 5%;
  left: 46%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: 100px;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 80px;
    height: 80px;
    top: 7%;
    left: 80%;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    width: 90px;
    height: 90px;
    top: 6%;
    left: 55%;
  }
`;

export const Circle3 = styled(Circle)`
  width: 210px;
  height: 210px;
  top: 135%;
  left: 87%;
  background-color: rgba(200, 162, 200, 0.5);
`;

export const Circle4 = styled(Circle)`
  width: 130px;
  height: 130px;
  top: 150%;
  left: 85%;
`;
