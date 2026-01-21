import styled, { keyframes } from "styled-components";

export const KnowledgeBar = styled.div`
  width: 90%;
  height: 6px;
  background-color: rgba(201, 184, 138, 0.15);
  margin-top: 12px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: ${({ $knowledge }) => $knowledge * 20}%;
    background: linear-gradient(
      to right,
      rgba(201, 184, 138, 0.85),
      rgba(201, 184, 138, 0.45)
    );
    box-shadow: 0 0 12px rgba(201, 184, 138, 0.45);
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
  padding: 40px 20px;
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
    margin-bottom: 40px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(18, 19, 20, 0.6);
  border: 1px solid rgba(201, 184, 138, 0.25);
  border-radius: 12px;

  cursor: pointer;

  width: ${(props) => (props.large ? "320px" : "160px")};
  height: ${(props) => (props.large ? "150px" : "140px")};
  grid-column: ${(props) => (props.span ? `span ${props.span}` : "auto")};

  transition: transform 0.35s ease, box-shadow 0.35s ease,
    border-color 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(201, 184, 138, 0.6);
    box-shadow: 0 0 25px rgba(201, 184, 138, 0.25),
      0 0 60px rgba(201, 184, 138, 0.12);
    background-color: rgba(18, 19, 20, 0.8);
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.large ? "240px" : "110px")};
    height: ${(props) => (props.large ? "100px" : "80px")};
    margin-top: 20px;
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

