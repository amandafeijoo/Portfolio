import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/* ===============================
   ANIMATIONS
================================ */

const float = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const arrowLoop = keyframes`
  0% {
    transform: translateY(-140%);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: translateY(0%);
    opacity: 1;
  }
  80% {
    transform: translateY(140%);
    opacity: 1;
  }
  100% {
    transform: translateY(140%);
    opacity: 0;
  }
`;

/* ===============================
   SECTION BASE (SIDE FOCUS + FRAME)
================================ */
export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 50px 40px 20px;
  color: #fff;

  background:
    radial-gradient(
      120% 80% at 50% 18%,
      rgba(255, 255, 255, 0.05),
      transparent 65%
    ),
    #0b0b0b;

  border-top: 1px solid rgba(255, 255, 255, 0.12);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 18%;
    width: 1px;
    height: 64%;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.08),
      transparent
    );
  }

  &::before {
    left: 80px;
  }
  &::after {
    right: 80px;
  }

  @media (max-width: 768px) {
    padding: 56px 20px 48px;

    &::before,
    &::after {
      display: none;
    }
  }
`;



/* ===============================
   CARD CENTRAL
================================ */
export const SectionCard = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 80px 90px;
  border-radius: 34px;
  position: relative;
  z-index: 2;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.015)
  );

  border: 1px solid rgba(239, 231, 231, 0.12);

  box-shadow: 0 60px 120px rgba(0, 0, 0, 0.85),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);

  animation: ${float} 16s ease-in-out infinite;

  @media (max-width: 768px) {
    padding: 64px 24px 56px;
    border-radius: 26px;
    animation: none;
  }
`;

/* ===============================
   GLOW SUAVE
================================ */
export const SectionGlow = styled.div`
  position: absolute;
  inset: -120px -160px;

  background: radial-gradient(
      60% 40% at 50% 12%,
      rgba(255, 255, 255, 0.045),
      transparent 85%
    ),
    radial-gradient(
      40% 30% at 50% 100%,
      rgba(201, 169, 106, 0.04),
      transparent 90%
    );

  filter: blur(130px);
  z-index: -1;
  pointer-events: none;
`;


/* ===============================
   TITLE
================================ */
export const Title = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2.9rem, 4.5vw, 3.6rem);
  font-weight: 600;
  margin: 32px 0 6px;
  letter-spacing: 1px;

  background: linear-gradient(180deg, #ffffff 0%, #e6d8c6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 2.1rem;
    letter-spacing: 0.12em;
    margin: 20px 0 8px;
  }
`;

/* ===============================
   DIVIDERS
================================ */
export const TitleDivider = styled.div`
  width: 48px;
  height: 1px;
  margin: 24px auto 0;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 96px;
  margin: 56px auto 32px;
  background: linear-gradient(to bottom, rgba(201, 169, 106, 0.6), transparent);
  opacity: 0.6;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ===============================
   TEXTS
================================ */
export const Subtitle = styled(motion.p)`
  margin-top: 28px;
  text-align: center;
  font-size: 1.05rem;
  color: rgba(246, 231, 206, 0.63);
  letter-spacing: 0.04em;
`;

export const StatementStrong = styled(motion.p)`
  max-width: 640px;
  margin: 36px auto 18px;
  text-align: center;
  font-size: clamp(1.2rem, 2vw, 1.45rem);
  font-weight: 500;
  line-height: 1.4;
  color: #ffffff;
  text-shadow: 0 2px 12px rgba(201, 169, 106, 0.25);

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    margin: 16px auto 0;
    background: linear-gradient(
      to right,
      transparent,
      rgba(201, 169, 106, 0.8),
      transparent
    );
  }
`;

export const IntroText = styled(motion.p)`
  max-width: 580px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.65);
`;

export const Statement = styled.p`
  margin-top: 26px;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

/* ===============================
   SCROLL HINT
================================ */
export const ScrollHint = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 16px;

  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  pointer-events: none;

  .arrowBtn {
    width: 46px;
    height: 46px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f2f2f2;
    color: #1a1a1a;
    overflow: hidden;
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.7);

    svg {
      animation: ${arrowLoop} 2.6s ease-in-out infinite;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
