import styled, { keyframes } from "styled-components";

export const KnowledgeBar = styled.div`
  width: 90%;
  height: 10px;
  background-color: rgba(200, 162, 200, 0.5);
  margin-top: 10px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $knowledge }) => $knowledge * 20}%;
    background-color: ${({ $color }) => $color};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 100%;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 15px;
    max-width: calc(100% - 30px);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    padding: 10px;
    max-width: calc(100% - 20px);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 1fr);
    padding: 0px;
    max-width: 100%;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #99aaff;
  background-color: transparent;
  cursor: pointer;
  width: ${(props) => (props.large ? "320px" : "160px")};
  height: ${(props) => (props.large ? "150px" : "140px")};
  grid-column: ${(props) => (props.span ? `span ${props.span}` : "auto")};
  &:hover {
    background-color: ${(props) => props.color || "transparent"};
  }

  @media (max-width: 1366px) {
    width: ${(props) => (props.large ? "280px" : "140px")};
    height: ${(props) => (props.large ? "130px" : "120px")};
  }

  @media (max-width: 1024px) {
    width: ${(props) => (props.large ? "240px" : "120px")};
    height: ${(props) => (props.large ? "120px" : "100px")};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.large ? "240px" : "110px")};
    height: ${(props) => (props.large ? "100px" : "80px")};
    margin-top: 20px;
    color: #e6e6fa;
  }
`;

export const TechLogo = styled.img`
  width: ${(props) => (props.needsBackground ? "50px" : "60px")};
  height: ${(props) => (props.needsBackground ? "50px" : "60px")};
  padding: 10px;
  background-color: ${(props) =>
    props.needsBackground ? "#FFFFFF" : "transparent"};
  filter: ${(props) => (props.invertColor ? "invert(1)" : "none")};
  position: relative;
  z-index: 2;
  transition: all 0.5s;
  border-radius: ${(props) => (props.needsBackground ? "50%" : "0")};
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1366px) {
    width: ${(props) => (props.needsBackground ? "45px" : "55px")};
    height: ${(props) => (props.needsBackground ? "45px" : "55px")};
  }

  @media (max-width: 1024px) {
    width: ${(props) => (props.needsBackground ? "40px" : "50px")};
    height: ${(props) => (props.needsBackground ? "40px" : "50px")};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.needsBackground ? "30px" : "40px")};
    height: ${(props) => (props.needsBackground ? "30px" : "40px")};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotatingE = styled.span`
  display: inline-block;
  animation: ${rotate} 15s linear infinite;
  border: 2px solid #99aaff;
  margin-right: 9px;
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
`;