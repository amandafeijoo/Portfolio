import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const tablet = "@media (max-width: 1024px)";
const mobile = "@media (max-width: 768px)";

const float = keyframes`
  0%   { transform: translateY(0); opacity: 0.35; }
  50%  { transform: translateY(8px); opacity: 0.65; }
  100% { transform: translateY(0); opacity: 0.35; }
`;

/* =========
   Hero
========= */

export const HeroWrap = styled.section`
  position: relative;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  background: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  /* 💻 Desktop */
  min-height: 100vh;

  /* 📱 Mobile */
  ${mobile} {
    min-height: auto;
    padding: 80px 16px 90px;
    margin-top: -50px;
    margin-bottom: -10px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;

    /* 💻 Desktop halo */
    width: 120vw;
    height: 120vw;
    filter: blur(200px);
    background: radial-gradient(
      circle at center,
      rgba(255, 220, 180, 0.1),
      rgba(255, 220, 180, 0.04) 30%,
      rgba(0, 0, 0, 0.95) 65%
    );

    /* 📱 Mobile halo — MISMO ESTILO, AJUSTADO */
    ${mobile} {
      width: 160vw;
      height: 160vw;
      filter: blur(120px);
      background: radial-gradient(
        circle at center,
        rgba(255, 220, 180, 0.24),
        rgba(255, 220, 180, 0.08) 35%,
        rgba(0, 0, 0, 0.96) 70%
      );
    }
  }
`;

export const HeroInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;

  /* 📱 Mobile halo */
  ${mobile} {
    padding: 32px 16px;
  }

  ${mobile}::before {
    content: "";
    position: absolute;
    inset: -20px -10px;
    z-index: -1;

    background: radial-gradient(
      circle at 50% 35%,
      rgba(255, 215, 170, 0.16),
      rgba(255, 215, 170, 0.08) 35%,
      rgba(0, 0, 0, 0.92) 70%
    );

    filter: blur(60px);
    border-radius: 40px;
    pointer-events: none;
  }
`;

/* =========
   Kicker
========= */

export const Kicker = styled.div`
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: rgba(201, 184, 138, 0.9);
  margin-bottom: 18px;

  ${mobile} {
    font-size: 0.65rem;
    margin-bottom: 14px;
  }
`;

/* =========
   Headline
========= */

export const Headline = styled.h2`
  font-family: "Playfair Display", serif;
  color: #f4f2ed;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 400;
  line-height: 1.08;
  margin-bottom: 22px;
  text-shadow: 0 0 34px rgba(201, 184, 138, 0.14);

  ${mobile} {
    font-size: clamp(1.9rem, 7vw, 2.4rem);
    line-height: 1.18;
    margin-bottom: 18px;
  }
`;

/* =========
   Divider
========= */
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
    margin-bottom: 18px;
    width: 70px;
  }
`;

/* =========
   Subline
========= */

export const Subline = styled.p`
  max-width: 60ch;
  margin: 0 auto 26px;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(244, 242, 237, 0.78);

  ${mobile} {
    max-width: 36ch;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 22px;
  }
`;

/* =========
   Statement
========= */

export const Statement = styled.p`
  max-width: 58ch;
  margin: 0 auto 14px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(244, 242, 237, 0.72);

  ${mobile} {
    max-width: 36ch;
    font-size: 0.88rem;
    line-height: 1.6;
    margin-bottom: 12px;
  }
`;

/* =========
   Supporting text
========= */

export const SupportingText = styled.p`
  max-width: 54ch;
  margin: 0 auto;
  font-size: 0.9rem;
  line-height: 1.7;
  color: rgba(244, 242, 237, 0.6);

  ${mobile} {
    max-width: 34ch;
    font-size: 0.85rem;
    line-height: 1.6;
  }
`;

/* =========
   Scroll hint
========= */

export const ScrollHint = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile} {
    margin-top: 46px;
  }
`;

export const ScrollLine = styled.div`
  width: 1px;
  height: 48px;

  background: linear-gradient(
    to bottom,
    transparent,
    rgba(201, 184, 138, 0.65),
    transparent
  );

  animation: ${float} 3.2s ease-in-out infinite;
`;
