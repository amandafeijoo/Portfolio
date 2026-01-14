import styled from "styled-components";
import { motion } from "framer-motion";

/* ===============================
   SECTION WRAPPER
================================ */
export const OrbitSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 60px;     /* espacio para header */
  padding-bottom: 80px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 92vh;     /* 👈 no fuerces 100vh */
    padding-top: 16px;   /* 👈 ajustado a móvil */
    padding-bottom: 48px;
  }
`;


export const OrbitVisual = styled.div`
  position: relative;
  height: 800px;
  max-height: 75vh;

  @media (max-width: 768px) {
    top: -160px;        /* 👈 baja la esfera */
    bottom: -80px;   /* 👈 deja respirar abajo */
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
        rgba(0, 0, 0, 0.8) 75%,
        
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
    top: 14%;
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
   TITLE
================================ */

export const HeroTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-weight: 400;
  letter-spacing: 0.08em;
  margin: 0;
  color: rgba(237, 231, 217, 0.95);

  font-size: clamp(2.2rem, 6vw, 2.6rem);  /* 👈 desktop */

  text-shadow:
    0 0 1px rgba(255, 255, 255, 0.4),
    0 0 8px rgba(255, 255, 255, 0.25),
    0 0 26px rgba(201, 169, 106, 0.22),
    0 0 60px rgba(201, 169, 106, 0.16);

  @media (max-width: 768px) {
    font-size: clamp(1.6rem, 6.8vw, 2rem); /* 👈 no pequeño */
    line-height: 1.15;
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

  text-shadow:
    0 0 8px rgba(201, 169, 106, 0.55),
    0 0 26px rgba(201, 169, 106, 0.38),
    0 0 60px rgba(201, 169, 106, 0.28);

  @media (max-width: 768px) {
    margin: 0 0.08em;
  }
`;


/* ===============================
   SUBTITLE
================================ */
export const HeroSubtitle = styled.p`
  margin-top: 14px;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.48);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
  max-width: 420px;

  @media (max-width: 768px) {
    margin-top: 30px;
    font-size: 0.6rem;        /* 👈 legible */
    letter-spacing: 0.1em;
    max-width: 320px;         /* 👈 CLAVE */
  }
`;


export const ServicesZone = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    margin-top: -40px;   /* 👈 acerca a la esfera */
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
  letter-spacing: 0.32em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  margin-bottom: 10px;

  text-shadow:
    0 0 4px rgba(255, 255, 255, 0.35),
    0 0 14px rgba(201, 169, 106, 0.35),
    0 0 40px rgba(201, 169, 106, 0.18);

  @media (max-width: 768px) {
    font-size: 0.7rem;
    letter-spacing: 0.22em;   /* 👈 clave */
    opacity: 0.75;            /* 👈 menos protagonista */
    margin-bottom: 8px;
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

  @media (max-width: 768px) {
    width: 64px;     /* 👈 más fino */
    margin-top: 8px;
    opacity: 0.85;
  }
`;


/* ===============================
   DRAG HINT
================================ */
export const DragHint = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
  margin-bottom: 6px;

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
