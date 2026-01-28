import styled from "styled-components";

export const HeroWrap = styled.section`
  position: relative;
  width: 100%;
  padding: 160px 20px 140px;
  overflow-x: hidden; /* 👈 SOLO aquí está bien */
  margin-top: 300px;
  background: radial-gradient(
    60% 40% at 50% 0%,
    rgba(255,255,255,0.62),
    transparent 10%
  );
`;
export const ThreeWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  width: 100%;
  max-width: 100%;
`;



export const HeroInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const Kicker = styled.div`
  font-family: "Source Code Pro", monospace;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: rgba(201, 184, 138, 0.9);
  margin-bottom: 18px;
`;

export const Headline = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 400;
  color: #f4f2ed;
  line-height: 1.08;
  margin-bottom: 22px;

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
  max-width: 60ch;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(244, 242, 237, 0.78);
`;
