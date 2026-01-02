import styled from "styled-components";
import { motion } from "framer-motion";

/* ===============================
   SECTION WRAPPER
================================ */
export const OrbitSectionWrapper = styled.section`
  position: relative;
  width: 150%;
  height: 150vh; 
  min-height: 900px; 
  background: transparent;
  margin-bottom: 150px; 
`;

export const OrbitVisual = styled.div`
  position: relative;
  height: 85vh; // altura ajustada para mejor encuadre
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
`;

/* ===============================
   TEXT WRAPPER
================================ */
export const HeroTextWrap = styled.div`
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
  z-index: 5;
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
`;

export const ServicesZone = styled.div`
  position: relative;
  margin-top: -7vh; 
  display: flex;
  justify-content: center;
  z-index: 3;
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
  color: rgba(255,255,255,0.85);
  text-transform: uppercase;

  /* ✨ glow sutil propio */
  text-shadow:
    0 0 4px rgba(255,255,255,0.35),
    0 0 14px rgba(201,169,106,0.35),
    0 0 40px rgba(201,169,106,0.18);

  margin-bottom: 10px;
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
    rgba(201,169,106,0.85),
    transparent
  );

  box-shadow:
    0 0 12px rgba(201,169,106,0.45);
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
`;
