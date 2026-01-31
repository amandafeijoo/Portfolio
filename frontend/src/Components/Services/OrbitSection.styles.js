import styled from "styled-components";
import { motion } from "framer-motion";

/* ===============================
   SECTION WRAPPER
================================ */
export const OrbitSectionWrapper = styled.section`
  position: relative;
  width: 100vw;
  padding-top: clamp(140px, 18vw, 220px);
  padding-bottom: clamp(160px, 22vw, 240px);
  left: 50%;
  transform: translateX(-50%);

  max-width: 1400px;
  padding-top: 10px;
  padding-bottom: 80px;
  overflow: visible;

  @media (max-width: 768px) {
    min-height: 92vh;
    padding-top: 16px;
    padding-bottom: 140px;
  }
`;

export const OrbitVisual = styled.div`
  position: relative;
  height: 800px;
  max-height: 75vh;

  @media (max-width: 768px) {
    top: -160px;
    bottom: -80px;
    height: 620px;
  }
`;

export const OrbitFadeMask = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.35) 75%,
    rgba(0, 0, 0, 0.85) 90%,
    rgba(0, 0, 0, 1) 100%
  );

  /* 📱 MOBILE: refuerzo del halo */
  @media (max-width: 768px) {
    background: radial-gradient(
        ellipse at 50% 35%,
        rgba(255, 255, 255, 0.12),
        rgba(255, 255, 255, 0.05) 35%,
        rgba(0, 0, 0, 0) 60%
      ),
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.45) 55%,
        rgba(0, 0, 0, 0.8) 75%
      );
  }
`;
export const Kicker = styled.div`
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: center;
  color: rgba(201, 184, 138, 0.9);
  margin-bottom: 18px;
`;
/* ===============================
   HERO TEXT TOP (WOW)
================================ */
export const HeroTextTop = styled(motion.div)`
  position: absolute;
  top: clamp(90px, 14vw, 160px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  text-align: center;
  max-width: 720px;
  padding: 0 20px;

  @media (max-width: 768px) {
    top: 12%;
    max-width: 92%;
  }
`;

/* ===============================
   SERVICES LABEL
================================ */
export const ServicesLabel = styled.span`
  display: inline-block;
  margin-bottom: 14px;
  font-size: 0.85rem;
  letter-spacing: 0.38em;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(240, 201, 123, 0.9);

  text-shadow: 0 0 6px rgba(255, 255, 255, 0.25),
    0 0 18px rgba(201, 169, 106, 0.45), 0 0 40px rgba(201, 169, 106, 0.25);

  @media (max-width: 768px) {
    font-size: 0.7rem;
    letter-spacing: 0.28em;
  }
`;

/* ===============================
   HERO TITLE
================================ */
export const HeroTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-weight: 400;
  letter-spacing: clamp(0.05em, 0.3vw, 0.08em);
  line-height: 1.05;
  color: rgba(237, 231, 217, 0.96);

  font-size: clamp(2.2rem, 5.6vw, 2.7rem);

  text-shadow: 0 0 1px rgba(255, 255, 255, 0.4),
    0 0 10px rgba(255, 255, 255, 0.25), 0 0 28px rgba(201, 169, 106, 0.25),
    0 0 60px rgba(201, 169, 106, 0.18);

  @media (max-width: 768px) {
    font-size: clamp(1.7rem, 6.8vw, 2.2rem);
    line-height: 1.15;
  }
`;

/* ===============================
   HERO DIVIDER
================================ */
export const HeroDivider = styled.div`
  width: 96px;
  height: 1px;
  margin: 26px auto 18px;

  background: linear-gradient(
    to right,
    transparent,
    rgba(201, 169, 106, 0.85),
    transparent
  );

  box-shadow: 0 0 14px rgba(201, 169, 106, 0.55);

  @media (max-width: 768px) {
    width: 64px;
    margin: 22px auto 16px;
  }
`;

/* ===============================
   HERO SUBTITLE
================================ */
export const HeroSubtitle = styled.p`
  max-width: 520px;
  margin: 0 auto 34px;

  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 0.62rem;
    letter-spacing: 0.12em;
    max-width: 90%;
  }
`;

/* ===============================
   HERO ROW (PILLS)
================================ */
export const HeroRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

/* ===============================
   HERO PILL
================================ */
export const HeroPill = styled.div`
  padding: 8px 16px;
  border-radius: 999px;

  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;

  color: rgba(237, 231, 217, 0.85);

  background: rgba(15, 15, 15, 0.55);
  border: 1px solid rgba(201, 169, 106, 0.35);

  backdrop-filter: blur(8px);

  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 8px 24px rgba(0, 0, 0, 0.45);

  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(201, 169, 106, 0.7);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6),
      0 0 24px rgba(201, 169, 106, 0.35);
  }

  @media (max-width: 768px) {
    font-size: 0.58rem;
    padding: 7px 14px;
  }
`;

/* ===============================
   HALO BACKGROUND
================================ */
export const TextHalo = styled.div`
  position: absolute;
  inset: -120%;
  filter: blur(28px);
  z-index: -1;

  @media (max-width: 768px) {
    inset: -90%;
    filter: blur(22px);
  }
`;

/* ===============================
    SERVICES ZONE
================================ */

export const ServicesZone = styled.div`
  margin-top: clamp(40px, 8vw, 50px);
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    margin-top: -40px;
  }
`;

/* ===============================
   SERVICES HEADER
================================ */
export const ServicesHeader = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

/* ===============================
   DIVIDER
================================ */
export const ServicesDivider = styled.div`
  width: 90px;
  height: 1px;
  margin: 12px auto 0;

  background: linear-gradient(
    to right,
    transparent,
    rgba(201, 169, 106, 0.85),
    transparent
  );

  box-shadow: 0 0 12px rgba(201, 169, 106, 0.45);

  @media (max-width: 768px) {
    width: 64px;
    margin-top: 8px;
    opacity: 0.85;
  }
`;

/* ===============================
   DRAG HINT
================================ */
export const DragHint = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-top: 26px;

  font-size: 0.65rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;

  color: rgba(201, 184, 138, 0.45);

  opacity: 1.2;
  pointer-events: none;

  &::before {
    content: "↔";
    font-size: 0.85rem;
    opacity: 0.6;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    margin-top: 40px;

    span {
      font-size: 0.85rem;
      opacity: 0.4;
    }
  }
`;

export const DragHintDesktop = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DragHintMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    font-size: 0.6rem;
    font-weight: 500;
    justify-content: center;
  }
`;
