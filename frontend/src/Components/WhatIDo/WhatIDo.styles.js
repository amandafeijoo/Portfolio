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
`;

/* ===============================
   INTRO HERO
================================ */
export const IntroHero = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 40px 140px;

  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  align-items: center;
  gap: 82px;

  margin-left: 100px;

  /* ↓ Desktop medio */
  @media (max-width: 1280px) {
    margin-left: 0;
  }

  /* 📱 Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 56px;
    padding: 72px 32px 88px;
    text-align: center;
  }

  /* 📱 Mobile */
  @media (max-width: 600px) {
    padding: 56px 20px 64px;
    gap: 36px;
  }
`;

export const IntroTextWrap = styled.div`
  position: relative;
  max-width: 580px;
  margin-top: -50px;
  z-index: 1;

  @media (max-width: 1024px) {
    max-width: 520px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 420px;
    padding: 12px 8px;

    &::before {
      content: "";
      position: absolute;
      inset: -12% -2%; /* tamaño del halo  AQUI ME QUEDE*/
      z-index: -1;

      background: radial-gradient(
        circle at center,
        rgba(201, 184, 138, 0.18),
        transparent 22%
      );

      filter: blur(78px);
      pointer-events: none;
    }
  }
`;

/* =========
   Kicker
========= */

export const Kicker = styled.div`
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: center;
  color: rgba(201, 184, 138, 0.9);
  margin-bottom: 18px;

  /* 📱 OCULTAR EN MÓVIL */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MetaLine = styled.div`
  font-size: 0.7rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  opacity: 0.55;
  margin: 12px 0 22px;
  text-align: center;
`;

export const HeroTitle = styled.h2`
  position: relative;

  font-size: clamp(2.4rem, 5vw, 3rem);
  text-align: center;
  max-width: 520px;
  margin: 0 auto 24px;

  font-weight: 600;
  line-height: 1.18;
  letter-spacing: 0.2px;
  color: rgba(237, 231, 217, 0.96);

  word-break: normal;
  overflow-wrap: break-word;

  @supports (text-wrap: balance) {
    text-wrap: balance;
  }

  text-shadow: 0 0 10px rgba(255, 255, 255, 0.22),
    0 0 26px rgba(255, 255, 255, 0.12), 0 10px 32px rgba(0, 0, 0, 0.55);

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    font-size: 1.7rem;
    line-height: 1.25;
    max-width: 360px;

    &::after {
      content: "";
      position: absolute;
      inset: -35% -20%;
      z-index: -1;

      background: radial-gradient(
        circle at center,
        rgba(201, 184, 138, 0.18),
        rgba(201, 184, 138, 0.08) 45%,
        transparent 70%
      );

      filter: blur(40px);
      pointer-events: none;
    }
  }
`;

export const HeroText = styled.p`
  font-size: 1.05rem;
  text-align: center;
  max-width: 460px;
  margin: 0 auto;

  line-height: 1.8;
  color: #bdbdbd;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 290px;
    line-height: 1.85;
    max-width: 32ch;
  }
`;

/* ===============================
   MEDIA SLOT (DESKTOP ONLY)
================================ */

export const IntroMediaSlot = styled.div`
  width: 360px;
  aspect-ratio: 9 / 16;
  justify-self: start;
  transform: translateY(-20px);

  /* 📱 Tablet y móvil */
  @media (max-width: 1024px) {
    width: 260px;
    margin: 0 auto;
    transform: none;
  }

  @media (max-width: 600px) {
    width: 220px;
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
  border-radius: 22px;
  overflow: visible;
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.6);
  z-index: 50;
  pointer-events: none;

  img {
    width: 100%;
    display: block;
    border-radius: 22px;
  }

  /* 📱 Tablet */
  @media (max-width: 1024px) {
    width: 280px;
    margin: 0 auto;
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.5);
  }

  /* 📱 Mobile */
  @media (max-width: 600px) {
    width: 240px;
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.45);
  }
`;

/* ===============================
   SCROLL SPACE
================================ */
export const ScrollSpace = styled.div`
  height: 24vh;

  @media (max-width: 1024px) {
    height: 0;
  }
`;

/* ===============================
   GRID SECTION
================================ */
export const CardsSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 70px 40px 200px;

  @media (max-width: 1024px) {
    padding: 48px 32px 140px;
  }

  @media (max-width: 600px) {
    padding: 32px 20px 100px;
  }
`;

/* ===============================
   GRID
================================ */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 44px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 56px;
    justify-items: center;
  }
`;

/* ===============================
   CARD
================================ */
export const Card = styled.div`
  text-align: center;
  position: relative;

  transform-style: preserve-3d;
  will-change: transform;

  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.55);

  &:hover {
    transform: translateY(-14px) scale(1.02);
    filter: brightness(1.06);
  }
  &::before {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 18px;

    background: radial-gradient(
      circle at top center,
      rgba(255, 255, 255, 0.18),
      rgba(0, 0, 0, 0.06),
      transparent 55%
    );

    opacity: 0.9;
    pointer-events: none;
    mix-blend-mode: screen;
    z-index: 2;
  }

  img {
    width: 100%;
    border-radius: 18px;
    display: block;
    position: relative;
    z-index: 1;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.45),
      0 0 0 1px rgba(201, 184, 138, 0.25);

    background: radial-gradient(
      circle at top center,
      rgba(201, 184, 138, 0.12),
      rgba(0, 0, 0, 0.85) 65%
    );

    border-radius: 20px;
    padding-bottom: 34px;
    padding-top: 18px;
    width: 100%;
  }
`;

/* ===============================
   CARD IMAGE
================================ */
export const CardImg = styled.div`
  position: relative;
  padding: 14px;
  border-radius: 22px;
  max-width: 360px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.02)
  );

  border: 1px solid rgba(201, 184, 138, 0.35);

  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);

  transition: box-shadow 0.6s ease, border-color 0.6s ease;

  /* Halo */
  &::after {
    content: "";
    position: absolute;
    inset: -20%;
    background: radial-gradient(
      circle,
      rgba(201, 184, 138, 0.25),
      transparent 70%
    );
    opacity: 0;
    filter: blur(28px);
    transition: opacity 0.6s ease;
    pointer-events: none;
  }

  ${Card}:hover &::after {
    opacity: 1;
  }

  img {
    width: 100%;
    border-radius: 18px;
    display: block;
  }
  /* 📱 MOBILE */
  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
    margin-left: 52px;
    max-width: 260px;
  }
`;

/* ===============================
   TEXT
================================ */
export const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  color: rgba(237, 231, 217, 0.95);

  max-width: 260px;
  margin: 18px auto 6px;

  opacity: 0.85;
  transform: translateY(6px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  /* 📱 Mobile */
  @media (max-width: 768px) {
    max-width: 240px;
    font-size: 1.1rem;
    line-height: 1.35;

    transform: none;
  }
`;

export const CardText = styled.p`
  font-size: 0.92rem;
  color: rgba(220, 220, 220, 0.8);
  max-width: 280px;
  margin: 0 auto;

  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.55s ease, transform 0.55s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  /* 📱 Mobile */
  @media (max-width: 768px) {
    opacity: 1;
    transform: none;

    max-width: 260px;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-top: 4px;
  }
`;

export const MobileCardText = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 24px auto 36px;
    max-width: 320px;
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: center;
    color: #b5b5b5;
  }
`;

/* ===============================
   PLACEHOLDER
================================ */
export const PlaceholderMedia = styled.div`
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
`;

/* ===============================
   DIVIDER
================================ */
export const TitleDivider = styled.div`
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
export const Divider = styled.div`
  margin: 0 auto 22px;
  margin-top: 22px;
  width: 90px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.7),
    transparent
  );
`;

export const MobileOnlyDivider = styled(TitleDivider)`
  display: none;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto 18px;
  }
`;

/* ===============================
   MOBILE TEXT (CARDS ONLY)
================================ */

export const MobileTitle = styled.h3`
  font-size: 1.2rem;
  line-height: 1.25;
  font-weight: 600;
  margin: 20px 0 8px;
  color: rgba(237, 231, 217, 0.95);
`;

export const MobileText = styled.p`
  font-size: 0.9rem;
  line-height: 1.55;
  color: #bdbdbd;
`;
