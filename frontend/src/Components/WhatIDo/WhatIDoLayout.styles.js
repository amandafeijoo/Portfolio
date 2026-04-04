import styled from "styled-components";
import { motion } from "framer-motion";

/* ===============================
   SECTION BASE
================================ */
export const Section = styled.section`
  width: 100%;
  color: rgba(237, 231, 217, 0.95);
  position: relative;
  overflow-x: hidden;
  isolation: isolate;

  @media (max-width: 768px) {
    width: 100%;
    top: 0;
    height: auto;
    opacity: 1;
  }
`;

/* ===============================
   STICKY LAYER
================================ */
export const StickyLayer = styled.div`
  position: sticky;
  top: 120px;
  height: 0;
  z-index: 40;
  pointer-events: none;

  @media (max-width: 1024px) {
    position: static;
    height: auto;
  }
`;

/* ===============================
   FLOATING CARD
================================ */
export const FloatingCard = styled(motion.div)`
  position: relative;
  width: 360px;
  border-radius: 26px;
  overflow: visible;
  z-index: 50;
  pointer-events: none;
  filter: drop-shadow(0 42px 90px rgba(0, 0, 0, 0.58));

  &::before {
    content: "";
    position: absolute;
    inset: -10% -10%;
    background: radial-gradient(
      circle,
      rgba(201, 184, 138, 0.16),
      rgba(201, 184, 138, 0.07) 34%,
      transparent 72%
    );
    filter: blur(30px);
    z-index: -1;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -18px;
    transform: translateX(-50%);
    width: 44%;
    height: 28px;
    background: radial-gradient(
      ellipse,
      rgba(201, 184, 138, 0.16),
      transparent 72%
    );
    filter: blur(12px);
    z-index: -1;
    pointer-events: none;
  }

  img {
    width: 100%;
    display: block;
    border-radius: 26px;
    border: 1px solid rgba(201, 184, 138, 0.2);
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.58),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 1024px) {
    width: 280px;
  }

  @media (max-width: 600px) {
    width: 240px;
  }
`;

/* ===============================
   SCROLL SPACE
================================ */
export const ScrollSpace = styled.div`
  height: 26vh;

  @media (max-width: 1024px) {
    height: 0;
  }
`;

/* ===============================
   GRID SECTION
================================ */
export const CardsSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 40px 210px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 48px 32px 140px;
  }

  @media (max-width: 600px) {
    padding: 32px 20px 100px;
    margin-top: -40px;
  }
`;
/* ===============================
   GRID
================================ */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 44px;
  align-items: start;

  @media (min-width: 1440px) {
    gap: 60px;
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 28px;
    justify-items: center;
  }
`;
