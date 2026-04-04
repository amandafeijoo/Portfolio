import styled from "styled-components";

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