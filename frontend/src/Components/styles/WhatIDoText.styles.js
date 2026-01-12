import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const tablet = "@media (max-width: 1024px)";
const mobile = "@media (max-width: 768px)";

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
  width: 85%;
  padding: 56px 40px 32px;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  margin: 0 auto;
  max-width: 100vw;
  overflow-x: hidden;

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
      rgba(245, 180, 59, 0.08),
      transparent
    );
  }

  &::before {
    left: 80px;
  }
  &::after {
    right: 80px;
  }

  /* 🟨 TABLET */
  ${tablet} {
    width: 92%;
    padding: 56px 32px 40px;

    &::before {
      left: 48px;
    }
    &::after {
      right: 48px;
    }
  }

  /* 📱 MOBILE */
  ${mobile} {
    width: 100%;
    padding: 64px 16px 64px;
    overflow: visible;

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
  padding: 100px 80px 96px;
  border-radius: 34px;
  position: relative;
  z-index: 2;
  overflow: hidden;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.015)
  );

  border: 2px solid rgba(239, 231, 231, 0.12);

  box-shadow: 0 60px 120px rgba(0, 0, 0, 0.26),
    0 0 40px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.22);

  animation: ${float} 16s ease-in-out infinite;

  /* 🟨 TABLET */
  ${tablet} {
    padding: 80px 56px 76px;
    border-radius: 30px;
  }

  /* 📱 MOBILE */
  ${mobile} {
    padding: 64px 22px 68px;
    border-radius: 26px;
    animation: none;

    border-top: 1px solid rgba(201, 169, 106, 0.35);
    border-bottom: 1px solid rgba(201, 169, 106, 0.25);
  }
`;

/* ===============================
   GLOW
================================ */

export const SectionGlow = styled.div`
  position: absolute;
  inset: -120px -160px;
  filter: blur(130px);
  z-index: -1;
  pointer-events: none;

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

  /* 🟨 TABLET */
  @media (max-width: 1024px) {
    inset: -100px -120px;
    filter: blur(110px);
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    inset: -60px -80px;
    filter: blur(80px);
    opacity: 0.75;
  }
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

  background: linear-gradient(
    180deg,
    rgba(237, 231, 217, 0.95) 0%,
    #e6d8c6 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);

  /* 🟨 TABLET */
  @media (max-width: 1024px) {
    font-size: 2.6rem;
    letter-spacing: 0.5px;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    font-size: 2.2rem;
    font-weight: 500;
    margin: 20px 0 10px;
    letter-spacing: 0.3px;
    text-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
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

  @media (max-width: 768px) {
    width: 36px;
    margin-top: 20px;
    opacity: 0.75;
  }
`;
export const VerticalDivider = styled.div`
  width: 1px;
  height: 140px;
  margin: 24px auto 32px;

  background: linear-gradient(to bottom, rgba(201, 169, 106, 0.5), transparent);

  opacity: 0.55;

  /* 🟨 TABLET */
  @media (max-width: 1024px) {
    height: 96px;
    margin: 20px auto 28px;
    opacity: 0.45;
  }

  /* 📱 MOBILE */
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
  color: rgba(167, 148, 117, 0.63);
  letter-spacing: 0.04em;

  /* 🟨 TABLET */
  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-top: 24px;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-top: 20px;
    letter-spacing: 0.03em;
  }
`;

export const StatementStrong = styled(motion.p)`
  max-width: 640px;
  margin: 32px auto 18px;
  text-align: center;

  font-size: clamp(1.05rem, 2.4vw, 1.3rem);
  font-weight: 500;
  line-height: 1.45;

  color: #ffffff;
  text-shadow: 0 2px 10px rgba(201, 169, 106, 0.22);

  &::after {
    content: "";
    display: block;
    width: 56px;
    height: 1px;
    margin: 16px auto 0;
    background: linear-gradient(
      to right,
      transparent,
      rgba(201, 169, 106, 0.6),
      transparent
    );
  }

  /* 🟨 TABLET */
  @media (max-width: 1024px) {
    margin: 28px auto 16px;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    margin: 24px auto 14px;
    font-size: 1.05rem;
    line-height: 1.55;
    text-shadow: 0 1px 6px rgba(201, 169, 106, 0.18);
  }
`;

export const IntroText = styled(motion.p)`
  max-width: 580px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.65);

  /* 🟨 TABLET */
  @media (max-width: 1024px) {
    font-size: 0.92rem;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.75;
    padding: 0 4px;
  }
`;

export const Statement = styled.p`
  margin-top: 26px;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;

  /* 🟨 TABLET */
  ${tablet} {
    font-size: 0.88rem;
    margin-top: 22px;
  }

  /* 📱 MOBILE */
  ${mobile} {
    font-size: 0.86rem;
    margin-top: 20px;
    line-height: 1.7;
  }
`;

/* ===============================
   SCROLL HINT
================================ */
export const ScrollHint = styled.div`
  position: absolute;
  bottom: 42px;
  left: 50%;
  transform: translate(-50%, -32px);

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

  /* 🟨 TABLET */
  ${tablet} {
    bottom: 32px;
    font-size: 0.8rem;

    .arrowBtn {
      width: 40px;
      height: 40px;
    }
  }

  /* 📱 MOBILE */
  ${mobile} {
    display: none;
  }
`;

export const MobileDivider = styled.div`
  display: none;

  ${mobile} {
    display: block;
    width: 1px;
    height: 56px;
    margin: 24px auto 28px;

    background: linear-gradient(
      to bottom,
      transparent,
      rgba(201, 169, 106, 0.55),
      transparent
    );

    opacity: 0.6;
  }
`;
