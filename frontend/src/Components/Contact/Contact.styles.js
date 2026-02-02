import styled, { keyframes } from "styled-components";
const tablet = "@media (max-width: 1024px)";
const mobile = "@media (max-width: 768px)";
const smallMobile = "@media (max-width: 520px)";



/* =========
   Palette
========= */
const gold = "rgba(201, 184, 138, 0.95)";
const goldSoft = "rgba(201, 184, 138, 0.22)";
const ink = "rgba(18, 19, 20, 0.72)";
const text = "#f4f2ed";

/* =========
   Page
========= */
export const PageWrap = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #000;
  overflow: hidden;

  ${mobile} {
    min-height: 100svh;
  }
`;


export const MainInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 70px 20px 120px;

  ${tablet} {
    padding: 60px 18px 100px;
  }

  ${mobile} {
    padding: 48px 16px 90px;
  }
`;

export const BottomGlow = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -260px;
  width: 1200px;
  height: 520px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(201, 184, 138, 0.1),
    transparent 70%
  );

  filter: blur(80px);
  pointer-events: none;

  ${tablet} {
    width: 900px;
    height: 420px;
    bottom: -220px;
    filter: blur(70px);
  }

  ${mobile} {
    width: 600px;
    height: 300px;
    bottom: -160px;
    filter: blur(60px);
    opacity: 0.7;
  }
`;


/* =========
   Hero
========= */
export const HeroWrap = styled.section`
  position: relative;
  width: 100%;
  padding: 150px 20px 110px;
  overflow: hidden;

  background: radial-gradient(
    60% 40% at 50% 0%,
    rgba(201, 184, 138, 0.12),
    transparent 70%
  );

  &::after {
    content: "";
    position: absolute;
    inset: -40%;
    background: radial-gradient(
      40% 30% at 50% 30%,
      rgba(201, 184, 138, 0.08),
      transparent 70%
    );
    filter: blur(90px);
    pointer-events: none;
    z-index: 0;
  }

  ${tablet} {
    padding: 120px 18px 90px;
  }

  ${mobile} {
    padding: 90px 16px 70px;

    &::after {
      inset: -60%;
      filter: blur(110px);
      opacity: 0.65;
    }
  }
`;
export const HeroInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;

  ${mobile} {
    max-width: 100%;
  }
`;


export const Kicker = styled.div`
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: rgba(201, 184, 138, 0.9);
  margin-bottom: 18px;

  ${mobile} {
    font-size: 0.7rem;
    letter-spacing: 0.28em;
    margin-bottom: 14px;
  }
`;


export const Headline = styled.h1`
  color: ${text};
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 500;
  line-height: 1.08;
  margin: 0 0 22px;
  text-shadow: 0 0 34px rgba(201, 184, 138, 0.18);

  ${mobile} {
    line-height: 1.12;
    margin-bottom: 18px;
  }
`;


export const Divider = styled.div`
  margin: 0 auto 22px;
  width: 90px;
  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.7),
    transparent
  );

  ${mobile} {
    width: 64px;
    margin-bottom: 18px;
  }
`;


export const Subline = styled.p`
  max-width: 62ch;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(244, 242, 237, 0.78);

  ${mobile} {
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;


export const HeroRow = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  ${mobile} {
    margin-top: 22px;
    gap: 8px;
  }
`;


export const HeroPill = styled.div`
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  color: rgba(244, 242, 237, 0.88);

  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(18, 19, 20, 0.62);
  border: 1px solid rgba(201, 184, 138, 0.22);
  box-shadow: 0 0 18px rgba(201, 184, 138, 0.1);

  ${mobile} {
    font-size: 0.74rem;
    padding: 8px 12px;
  }
`;


/* =========
   Sections
========= */
export const Section = styled.section`
  margin-top: 10px;

  ${mobile} {
    margin-top: 2px;

  }
`;

export const SectionTitle = styled.h2`
  color: ${text};
  font-weight: 500;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  margin-bottom: 12px;
  text-shadow: 0 0 24px rgba(201, 184, 138, 0.1);

  ${mobile} {
    margin-bottom: 10px;
    font-size: clamp(1.3rem, 4vw, 1.6rem);
    text-shadow: 0 0 18px rgba(201, 184, 138, 0.08);
  }
`;

export const SectionLead = styled.p`
  max-width: 100ch;
  margin: 0 0 22px;
  color: rgba(244, 242, 237, 0.74);
  line-height: 1.65;

  ${mobile} {
    max-width: 100%;
    font-size: 0.95rem;
    margin-bottom: 18px;
    line-height: 1.6;
  }
`;

/* =========
   Form card (WOW)
========= */
const floatGlow = keyframes`
  0% { transform: translateY(0px); opacity: 0.85; }
  50% { transform: translateY(-6px); opacity: 1; }
  100% { transform: translateY(0px); opacity: 0.85; }
`;
export const FormCard = styled.div`
  position: relative;
  border-radius: 22px;
  padding: 26px;
  background: ${ink};
  border: 1px solid rgba(201, 184, 138, 0.22);
  overflow: hidden;

  box-shadow:
    0 0 34px rgba(201, 184, 138, 0.16),
    0 0 120px rgba(201, 184, 138, 0.06);

  &::before {
    content: "";
    position: absolute;
    inset: -60px;
    background: radial-gradient(
      50% 40% at 50% 0%,
      rgba(201, 184, 138, 0.12),
      transparent 70%
    );
    filter: blur(50px);
    opacity: 0.9;
    pointer-events: none;
    z-index: 0;
    animation: ${floatGlow} 8s ease-in-out infinite;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  ${tablet} {
    padding: 22px;
  }

  ${mobile} {
    padding: 20px;
    border-radius: 20px;

    &::before {
      inset: -80px;
      filter: blur(60px);
      opacity: 0.75;
      animation-duration: 10s;
    }
  }

  ${smallMobile} {
    padding: 18px;
    border-radius: 18px;
  }
`;

export const FormCardTopGlow = styled.div`
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${goldSoft},
    transparent
  );
  opacity: 0.9;
  pointer-events: none;

  ${mobile} {
    width: 90%;
    opacity: 0.75;
  }
`;


/* =========
   Trust
========= */
export const TrustWrap = styled.section`
  margin-top: 70px;

  ${tablet} {
    margin-top: 56px;
  }

  ${mobile} {
    margin-top: 44px;
  }
`;


export const TrustTitle = styled.h3`
  color: ${text};
  font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: 18px;
  letter-spacing: 0.02em;

  ${mobile} {
    font-size: 1.1rem;
    margin-bottom: 14px;
  }
`;


export const TrustGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;


export const TrustCard = styled.div`
  position: relative;
  border-radius: 18px;
  padding: 18px 18px 16px;
  background: rgba(18, 19, 20, 0.62);
  border: 1px solid rgba(201, 184, 138, 0.16);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -40px;
    background: radial-gradient(
      50% 50% at 30% 0%,
      rgba(201, 184, 138, 0.1),
      transparent 70%
    );
    filter: blur(50px);
    opacity: 0.75;
    pointer-events: none;
  }

  ${mobile} {
    padding: 16px;

    &::before {
      inset: -60px;
      filter: blur(60px);
      opacity: 0.6;
    }
  }
`;

export const TrustKicker = styled.div`
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: ${gold};
  margin-bottom: 8px;

  ${mobile} {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    margin-bottom: 6px;
  }

  ${smallMobile} {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
  }
`;


export const TrustText = styled.p`
  margin: 0;
  color: rgba(244, 242, 237, 0.76);
  line-height: 1.6;

  ${mobile} {
    font-size: 0.95rem;
    line-height: 1.55;
  }

  ${smallMobile} {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

