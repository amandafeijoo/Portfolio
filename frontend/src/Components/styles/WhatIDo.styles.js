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

  @media (max-width: 1280px) {
    margin-left: 0;
  }

  /* 📱 TABLET */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 56px;
    padding: 64px 32px 80px;
    text-align: center;
  }

  /* 📱 MOBILE */
  @media (max-width: 600px) {
    padding: 48px 20px 64px;
    gap: 40px;
  }
`;

export const IntroTextWrap = styled.div`
  max-width: 580px;
  margin-top: -50px;

  @media (max-width: 1024px) {
    max-width: 520px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    max-width: 420px;
  }
`;

export const HeroTitle = styled.h2`
  font-size: clamp(2.2rem, 4.5vw, 2.8rem);
  text-align: center;
  margin-top: 10;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;

  max-width: 420px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: 0.4px;
  color: rgba(237, 231, 217, 0.95);

  text-shadow: 0 0 10px rgba(255, 255, 255, 0.22),
    0 0 26px rgba(255, 255, 255, 0.12), 0 10px 32px rgba(0, 0, 0, 0.55);

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 1.18;
    letter-spacing: 0.25px;
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.18), 0 0 16px rgba(0, 0, 0, 0.45);
  }
`;

export const HeroText = styled.p`
  font-size: 1.05rem;
  margin: 0 auto;
  text-align: center;
  line-height: 1.7;
  color: #bdbdbd;
  opacity: 0.9;
  max-width: 400px;

  /* Tablet */
  @media (max-width: 1024px) {
    margin: 0 auto;
    text-align: center;
    max-width: 480px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.85;
    max-width: 360px;
    margin: 0 auto;
    text-align: center;
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
    gap: 28px;
  }
`;

/* ===============================
   CARD
================================ */
export const Card = styled.div`
  text-align: center;
  position: relative;

  transform: translateZ(0);
  transition: transform 0.35s ease, filter 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    filter: brightness(1.05);
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    &:hover {
      transform: none;
      filter: none;
    }

    &:active {
      transform: scale(0.985);
      filter: brightness(1.02);
    }
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
    rgba(255, 255, 255, 0.07),
    rgba(255, 255, 255, 0.02)
  );

  border: 3px solid rgba(79, 74, 66, 0.88);

  box-shadow: 0 45px 90px rgba(0, 0, 0, 0.65), 0 12px 28px rgba(0, 0, 0, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.06);

  transition: box-shadow 0.35s ease;

  &::before {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: cover;
    display: block;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
    margin-left: 69px;
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
  margin: 16px auto 0;
  padding: 2px 5px;
  text-align: center;
  line-height: 1.35;

  min-height: 3.2em;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  border-radius: 8px;

  text-shadow: 0 0 6px rgba(255, 255, 255, 0.25),
    0 0 14px rgba(201, 169, 106, 0.35);

  @supports (text-wrap: balance) {
    text-wrap: balance;
  }

  @media (max-width: 768px) {
    max-width: 220px;
    min-height: 3.6em;
  }
`;

export const CardText = styled.p`
  font-size: 0.92rem;
  color: rgba(220, 220, 220, 0.85);
  max-width: 280px;
  margin: 0 auto;
  line-height: 1.55;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.65);

  text-align: center;

  min-height: 4.2em;

  @media (max-width: 768px) {
    display: none;
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
   BADGE
================================ */
export const Badge = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 28px;
  font-size: 0.75rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  opacity: 0.55;
`;

/* ===============================
   DIVIDER
================================ */
export const TitleDivider = styled.div`
  width: 42px;
  height: 1px;
  margin: 24px auto 16px;

  background: linear-gradient(90deg, rgba(201, 169, 106, 0.6), transparent);
`;

export const DesktopOnlyDivider = styled(TitleDivider)`
  @media (max-width: 768px) {
    display: none;
  }
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
  font-size: 0.95rem;
  line-height: 1.55;
  color: #bdbdbd;
`;
