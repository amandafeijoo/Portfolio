import styled from "styled-components";
import { rotate } from "./animationsAbout";

export const StyledText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  font-size: 5.2em;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.04em;

  color: #f4f2ed;

  text-shadow: 0 0 24px rgba(201, 184, 138, 0.18),
    0 0 48px rgba(201, 184, 138, 0.08);

  margin-top: 20px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    font-size: 4.2em;
    margin-top: 48px;
  }

  @media (max-width: 768px) {
    font-size: 3.2em;
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    font-size: 2.5em;
    margin-top: 56px;
  }
`;

/* =========
   Kicker
========= */

export const Kicker = styled.div`
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: rgba(201, 184, 138, 0.9);
  margin-top: 50px;
  text-align: center;
`;
/* =========
   Divider
========= */

export const Divider = styled.div`
  margin: 0 auto 22px;
  width: 90px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.7),
    transparent
  );
`;

export const Description = styled.p`
  text-align: justify;
  line-height: 1.65;
  margin: 60px 0;

  color: #b8b4aa;

  strong {
    color: #f4f2ed;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin: 20px 0;
    font-size: 0.8em;
    line-height: 1.5;
    padding: 0 30px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin: 40px 0;
    font-size: 1em;
    line-height: 1.55;
    padding: 0 180px;
  }

  @media (min-width: 1025px) {
    margin: 60px 0;
    font-size: 1.05em;
    line-height: 1.65;
    padding: 0 30px;
  }

  @media (min-width: 768px) and (max-width: 834px) and (orientation: portrait),
    (min-width: 1024px) and (max-width: 1366px) {
    font-size: 1.2em;
    line-height: 1.75;
    padding: 0 60px;
  }
`;

export const AnimatedLetter = styled.span`
  display: inline-block;
  position: relative;
  animation: ${rotate} 9s infinite;

  border: 1px solid rgba(201, 184, 138, 0.35);
  margin-right: 13px;

  box-shadow: 0 0 12px rgba(201, 184, 138, 0.25),
    0 0 30px rgba(201, 184, 138, 0.12);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(201, 184, 138, 0.6);
    filter: blur(1px);
    z-index: 2;
  }

  &::before {
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
