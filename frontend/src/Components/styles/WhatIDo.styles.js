import styled from "styled-components";
import { motion } from "framer-motion";

/* ===============================
   SECTION BASE
================================ */
export const Section = styled.section`
  width: 100%;
  /* background: #0b0b0b; */
  color: #fff;
  position: relative;
  overflow: hidden;
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

  /* 🔽 MOBILE: reducimos espacio inferior */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 56px;
    padding: 40px 24px 60px;
    text-align: center;
  }
`;

export const IntroTextWrap = styled.div`
  max-width: 580px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const HeroTitle = styled.h2`
  font-size: clamp(2.2rem, 4.5vw, 2.9rem);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;

  text-shadow: 0 0 12px rgba(255, 255, 255, 0.25),
    0 0 32px rgba(255, 255, 255, 0.15), 0 12px 40px rgba(0, 0, 0, 0.6);

  /* 📱 MOBILE: MÁS GRANDE */
  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 1.15;
  }
`;

export const HeroText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #bdbdbd;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.98rem;
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

  @media (max-width: 1024px) {
    display: none;
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
`;

/* ===============================
   SCROLL SPACE
================================ */
export const ScrollSpace = styled.div`
  height: 20vh;

  /* 🔽 MOBILE: eliminamos espacio muerto */
  @media (max-width: 768px) {
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

  /* 🔽 MOBILE: subimos el grid */
  @media (max-width: 768px) {
    padding: 24px 24px 120px;
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
    gap: 32px;
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

  @media (max-width: 768px) {
    &:hover {
      transform: none;
      filter: none;
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
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: 20px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.06),
      transparent 45%
    );
    pointer-events: none;
  }

  img {
    width: 100%;
    border-radius: 14px;
    display: block;
    position: relative;
    z-index: 1;
  }
`;

/* ===============================
   TEXT
================================ */
export const CardTitle = styled.h4`
  margin: 18px 0 6px;
  font-size: 1.02rem;
  font-weight: 500;

  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
`;

export const CardText = styled.p`
  font-size: 0.92rem;
  color: #aaaaaa;
  line-height: 1.55;
`;

export const MobileCardText = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 36px 0 40px; /* 👈 arriba / abajo */
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
  margin-bottom: 18px;
  font-size: 0.75rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  opacity: 0.55;
`;

/* ===============================
   DIVIDER
================================ */
export const TitleDivider = styled.div`
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

export const DesktopOnlyDivider = styled(TitleDivider)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileOnlyDivider = styled(TitleDivider)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto 18px;
  }
`;
