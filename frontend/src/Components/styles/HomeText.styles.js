import styled from "styled-components";

export const StyledText = styled.span`
  font-size: 4.8em;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  text-shadow: 0 0 3px #fff;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 4em;
    margin-top: 15px;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    font-size: 3.5em;
    margin-top: 50px;
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    font-size: 4em;
    margin-top: 30px;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    font-size: 4.5em;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-top: 100px;
  }

  @media (max-width: 375px) and (min-height: 667px) {
    font-size: 2.5em;
    margin-top: 140px;
  }

  @media (max-width: 393px) and (min-height: 852px) {
    font-size: 2.9em;
    margin-top: 220px;
  }
`;

export const NameText = styled.span`
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

export const StyledP = styled.p`
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
    margin-top: -30px;
  }

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (min-width: 1201px) {
    padding: 25px;
  }

  @media (max-width: 375px) {
    font-size: 13px;
    margin-bottom: 30px;
    margin-top: 10px;
    padding: 10px;
  }

  @media (max-width: 390px) {
    font-size: 13px;
  }

  @media (max-width: 430px) {
    font-size: 13px;
    margin-top: 5px;
  }
`;
