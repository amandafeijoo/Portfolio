import styled from "styled-components";
import { motion } from "framer-motion";

/* ===============================
   SECTION WRAPPER
================================ */
export const OrbitSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 120px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh;
    min-height: 690px;
    margin-bottom: 0px;
    margin-top: -10px;
  }
`;

export const OrbitVisual = styled.div`
  position: relative;
  height: 800px;
  max-height: 75vh;

  @media (max-width: 768px) {
    height: 38vh; /* 👈 mucho más pequeño */
    overflow: hidden;
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

  @media (max-width: 768px) {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.55) 55%,
      rgba(0, 0, 0, 0.85) 75%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

/* ===============================
   TEXT WRAPPER
================================ */
export const HeroTextWrap = styled.div`
  position: absolute;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 5;

  @media (max-width: 768px) {
    top: 14%; /* 👈 antes estaba demasiado abajo */
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
`;

/* ===============================
   TITLE
================================ */

export const HeroTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 6.5vw, 2rem);
  font-weight: 400;
  letter-spacing: 0.08em;
  margin: 0;
  color: rgba(255, 255, 255, 0.97);

  text-shadow: 0 0 1px rgba(255, 255, 255, 0.4),
    0 0 8px rgba(255, 255, 255, 0.25), 0 0 26px rgba(201, 169, 106, 0.22),
    0 0 60px rgba(201, 169, 106, 0.16);

  @media (max-width: 768px) {
    font-size: clamp(1rem, 7.5vw, 1.4rem);
  }
`;

/* ===============================
   DASH
================================ */
export const HeroDash = styled.span`
  display: inline-block;
  margin: 0 0.12em;
  color: rgba(201, 169, 106, 0.65);
  transform: translateY(-0.04em);

  text-shadow: 0 0 8px rgba(201, 169, 106, 0.55),
    0 0 26px rgba(201, 169, 106, 0.38), 0 0 60px rgba(201, 169, 106, 0.28);
`;

/* ===============================
   SUBTITLE
================================ */
export const HeroSubtitle = styled.p`
  margin-top: 14px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.48);
  letter-spacing: 0.12em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.47rem;
    font-weight: 500;
  }
`;

export const ServicesZone = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 14ç5px;
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
   SERVICES LABEL
================================ */
export const ServicesLabel = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  letter-spacing: 0.35em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;

  /* ✨ glow sutil propio */
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.35),
    0 0 14px rgba(201, 169, 106, 0.35), 0 0 40px rgba(201, 169, 106, 0.18);

  margin-bottom: 10px;

  @media screen {
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
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
`;

/* ===============================
   DRAG HINT
================================ */
export const DragHint = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 1px;
  margin-bottom: 7px;

  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.35);

  pointer-events: none;

  span {
    font-size: 1rem;
    opacity: 0.6;
  }
  /* ================= MOBILE ================= */
  @media (max-width: 768px) {
    font-size: 0.6rem;
    letter-spacing: 0.14em;
    opacity: 0.45;

    span {
      font-size: 0.9rem;
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
    justify-content: center;
  }
`;
