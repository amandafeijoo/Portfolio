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

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 50% 10%,
        rgba(201, 184, 138, 0.1),
        transparent 22%
      ),
      radial-gradient(
        circle at 50% 38%,
        rgba(201, 184, 138, 0.06),
        transparent 32%
      ),
      linear-gradient(
        180deg,
        rgba(10, 10, 10, 0.2) 0%,
        rgba(0, 0, 0, 0) 28%,
        rgba(0, 0, 0, 0.18) 100%
      );
    pointer-events: none;
    z-index: -2;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 140px;
    transform: translateX(-50%);
    width: min(920px, 82vw);
    height: 420px;
    background: radial-gradient(
      ellipse,
      rgba(201, 184, 138, 0.08),
      transparent 72%
    );
    filter: blur(42px);
    pointer-events: none;
    z-index: -1;

    @media (max-width: 768px) {
      top: 70px;
      height: 280px;
      width: 92vw;
      opacity: 0.75;
    }
  }
`;

/* ===============================
   INTRO HERO
================================ */
export const IntroHero = styled.div`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 120px clamp(32px, 4vw, 72px) 140px;

  display: grid;
  grid-template-columns: minmax(420px, 560px) minmax(360px, 460px);
  justify-content: center;
  align-items: center;
  gap: clamp(48px, 6vw, 96px);
  position: relative;
  z-index: 2;

  @media (max-width: 1280px) {
    max-width: 1320px;
    grid-template-columns: minmax(380px, 1fr) minmax(320px, 420px);
    gap: 56px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 56px;
    padding: 72px 32px 88px;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 56px 20px 64px;
    gap: 36px;
  }
`;

export const IntroTextWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 580px;
  margin-top: -20px;
  justify-self: end;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: -30px -40px;
    background: radial-gradient(
      circle at center,
      rgba(201, 184, 138, 0.08),
      transparent 70%
    );
    filter: blur(34px);
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    max-width: 560px;
    margin: 0 auto;
    justify-self: center;
  }

  @media (max-width: 768px) {
    max-width: 420px;
    padding: 12px 8px;
  }
`;

/* ===============================
   KICKERS / META
================================ */
export const Kicker = styled.div`
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MetaLine = styled.div`
  font-size: 0.65rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  opacity: 0.78;
  margin: 12px 0 28px;
  text-align: center;
  color: #c9b07a;
  text-shadow: 0 0 18px rgba(201, 184, 138, 0.12);

  @media (max-width: 768px) {
    font-size: 0.6rem;
    margin: 10px 0 22px;
  }
`;

/* ===============================
   HERO TEXT
================================ */
export const HeroTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 500;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  text-align: center;
  max-width: 680px;
  margin: 0 auto 28px;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: rgba(247, 236, 205, 0.96);
  text-shadow: 0 0 34px rgba(201, 184, 138, 0.14),
    0 0 80px rgba(201, 184, 138, 0.05);

  @supports (text-wrap: balance) {
    text-wrap: balance;
  }

  .highlight {
    color: #e8c98f;
    text-shadow: 0 0 12px rgba(201, 184, 138, 0.34),
      0 0 28px rgba(201, 184, 138, 0.18), 0 0 58px rgba(201, 184, 138, 0.08);
  }

  @media (min-width: 1440px) {
    font-size: clamp(2.9rem, 4vw, 4.2rem);
    max-width: 760px;
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 7vw, 2.55rem);
    line-height: 1.1;
    margin-bottom: 12px;
    max-width: 360px;
  }
`;

export const HeroText = styled.p`
  font-size: 1.05rem;
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.82;
  color: rgba(214, 214, 214, 0.82);

  @media (min-width: 1440px) {
    font-size: 1.12rem;
    max-width: 590px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ===============================
   MEDIA SLOT (DESKTOP ONLY)
================================ */
export const IntroMediaSlot = styled.div`
  width: 360px;
  aspect-ratio: 9 / 16;
  justify-self: center;
  transform: translateY(-8px);

  @media (max-width: 1024px) {
    width: 260px;
    margin: 0 auto;
    transform: none;
  }

  @media (min-width: 1440px) {
    width: 410px;
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

/* ===============================
   CARD
================================ */
export const Card = styled.div`
  text-align: center;
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
  padding: 24px 18px 28px;
  border-radius: 30px;

  background: linear-gradient(
      180deg,
      rgba(15, 15, 15, 0.9),
      rgba(6, 6, 6, 0.97)
    ),
    radial-gradient(
      circle at top center,
      rgba(201, 184, 138, 0.08),
      transparent 58%
    );

  border: 1px solid rgba(201, 184, 138, 0.14);

  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.46),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease,
    border-color 0.5s ease, box-shadow 0.5s ease, background 0.5s ease;

  &::before {
    content: "";
    position: absolute;
    inset: -14%;
    background: radial-gradient(
      circle,
      rgba(201, 184, 138, 0.14),
      transparent 68%
    );
    opacity: 0;
    filter: blur(30px);
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -14px;
    transform: translateX(-50%);
    width: 42%;
    height: 22px;
    background: radial-gradient(
      ellipse,
      rgba(201, 184, 138, 0.14),
      transparent 72%
    );
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.45s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-14px) scale(1.018);
    filter: brightness(1.05);
    border-color: rgba(201, 184, 138, 0.32);
    box-shadow: 0 34px 90px rgba(0, 0, 0, 0.62),
      0 0 40px rgba(201, 184, 138, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }

  &:hover .hover-content {
    max-height: 260px;
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
    padding: 16px 14px 22px;
    border-radius: 24px;
    background: linear-gradient(
        180deg,
        rgba(14, 14, 14, 0.96),
        rgba(6, 6, 6, 0.98)
      ),
      radial-gradient(
        circle at top center,
        rgba(201, 184, 138, 0.11),
        transparent 64%
      );
    border: 1px solid rgba(201, 184, 138, 0.18);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.02) inset;
  }
`;

/* ===============================
   CARD IMAGE
================================ */
export const CardImg = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: stretch;

  > * {
    width: 100%;
    height: 100%;
    display: block;
    flex: 1;
  }

  img,
  video,
  canvas {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

/* ===============================
   CARD TEXT
================================ */
export const CardTitle = styled.h3`
  font-size: 1.08rem;
  font-weight: 600;
  color: rgba(243, 235, 222, 0.96);
  max-width: 260px;
  margin: 22px auto 8px;
  line-height: 1.28;
  letter-spacing: -0.01em;

  opacity: 0.94;
  transform: translateY(4px);
  transition: opacity 0.4s ease, transform 0.4s ease, text-shadow 0.4s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
    text-shadow: 0 0 18px rgba(201, 184, 138, 0.12);
  }

  @media (max-width: 768px) {
    max-width: 260px;
    margin: 16px auto 6px;
    font-size: 1.02rem;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }
`;

export const CardIntro = styled.p`
  margin: 10px auto 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.95rem;
  line-height: 1.72;
  text-align: center;
  max-width: 280px;

  @media (max-width: 768px) {
    max-width: 255px;
    margin-top: 6px;
    font-size: 0.88rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const CardText = styled.p`
  font-size: 0.92rem;
  color: rgba(220, 220, 220, 0.8);
  max-width: 280px;
  margin: 0 auto;
  line-height: 1.75;

  @media (max-width: 768px) {
    max-width: 250px;
    font-size: 0.86rem;
    line-height: 1.55;
    color: rgba(220, 220, 220, 0.76);
  }
`;

export const HoverContent = styled.div`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(12px);
  transition: max-height 0.45s ease, opacity 0.35s ease, transform 0.35s ease;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    max-height: none;
    opacity: 1;
    overflow: visible;
    transform: none;
    margin-top: 2px;
  }
`;

export const CardBullets = styled.ul`
  margin: 18px auto 0;
  padding-left: 18px;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.8;
  font-size: 0.95rem;
  text-align: left;
  max-width: 260px;

  li {
    position: relative;
  }

  li::marker {
    color: rgba(216, 187, 130, 0.9);
  }

  li + li {
    margin-top: 6px;
  }

  @media (max-width: 768px) {
    max-width: 225px;
    margin-top: 12px;
    padding-left: 0;
    list-style: none;
    font-size: 0.82rem;
    line-height: 1.45;

    li {
      padding-left: 16px;
      color: rgba(255, 255, 255, 0.74);
    }

    li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.62em;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(216, 187, 130, 0.9);
      box-shadow: 0 0 8px rgba(216, 187, 130, 0.25);
    }

    li + li {
      margin-top: 8px;
    }
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  margin-top: 22px;
  color: #d8bb82;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.76rem;
  text-decoration: none;
  position: relative;
  transition: opacity 0.25s ease, transform 0.25s ease, color 0.25s ease,
    text-shadow 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(216, 187, 130, 0.9),
      transparent
    );
    opacity: 0.7;
    transform: scaleX(0.85);
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  &:hover {
    opacity: 1;
    color: #ecd29d;
    transform: translateX(4px);
    text-shadow: 0 0 18px rgba(216, 187, 130, 0.18);
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    margin-top: 18px;
    padding: 10px 16px;
    border-radius: 999px;
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    color: #ecd29d;
    background: rgba(201, 184, 138, 0.08);
    border: 1px solid rgba(201, 184, 138, 0.22);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05),
      0 8px 18px rgba(0, 0, 0, 0.24);

    &::after {
      display: none;
    }

    &:hover {
      transform: translateY(-1px);
      background: rgba(201, 184, 138, 0.12);
      border-color: rgba(201, 184, 138, 0.34);
    }
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
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.02)
    ),
    radial-gradient(
      circle at center,
      rgba(201, 184, 138, 0.06),
      transparent 65%
    );
`;

/* ===============================
   DIVIDERS
================================ */
export const TitleDivider = styled.div`
  margin: 0 auto 22px;
  width: 96px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.78),
    transparent
  );
  box-shadow: 0 0 18px rgba(201, 184, 138, 0.12);
`;

export const Divider = styled.div`
  margin: 18px auto 20px;
  width: 92px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.72),
    transparent
  );
  box-shadow: 0 0 14px rgba(201, 184, 138, 0.08);

  @media (max-width: 768px) {
    width: 64px;
    margin: 14px auto 14px;
    opacity: 0.85;
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
  font-size: 0.9rem;
  line-height: 1.55;
  color: #bdbdbd;
`;
