import styled, { keyframes } from "styled-components";

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
`;

export const MainInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 70px 20px 120px;
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
`;

export const HeroInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const Kicker = styled.div`
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: rgba(201, 184, 138, 0.9);
  margin-bottom: 18px;
`;

export const Headline = styled.h1`
  color: ${text};
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 500;
  line-height: 1.08;
  margin: 0 0 22px;
  text-shadow: 0 0 34px rgba(201, 184, 138, 0.18);
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
`;

export const Subline = styled.p`
  max-width: 62ch;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(244, 242, 237, 0.78);
`;

export const HeroRow = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
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
`;

/* =========
   Sections
========= */
export const Section = styled.section`
  margin-top: 10px;
`;

export const SectionTitle = styled.h2`
  color: ${text};
  font-weight: 500;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  margin-bottom: 12px;
  text-shadow: 0 0 24px rgba(201, 184, 138, 0.1);
`;

export const SectionLead = styled.p`
  max-width: 72ch;
  margin: 0 0 22px;
  color: rgba(244, 242, 237, 0.74);
  line-height: 1.65;
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

  box-shadow: 0 0 34px rgba(201, 184, 138, 0.16),
    0 0 120px rgba(201, 184, 138, 0.06);

  /* halo interno sutil */
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

  @media (max-width: 520px) {
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
  background: linear-gradient(90deg, transparent, ${goldSoft}, transparent);
  opacity: 0.9;
  pointer-events: none;
`;

/* =========
   Trust
========= */
export const TrustWrap = styled.section`
  margin-top: 70px;
`;

export const TrustTitle = styled.h3`
  color: ${text};
  font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: 18px;
  letter-spacing: 0.02em;
`;

export const TrustGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
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
`;

export const TrustKicker = styled.div`
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: ${gold};
  margin-bottom: 8px;
`;

export const TrustText = styled.p`
  margin: 0;
  color: rgba(244, 242, 237, 0.76);
  line-height: 1.6;
`;
