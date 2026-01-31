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
  min-height: 100vh;
  width: 100%;
  padding: 10px 10px;
  overflow: hidden;
  background: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 120vw;
    height: 120vw;

    background: radial-gradient(
      circle at center,
      rgba(255, 220, 180, 0.1),
      rgba(255, 220, 180, 0.04) 30%,
      rgba(0, 0, 0, 0.95) 65%
    );

    filter: blur(200px);
    pointer-events: none;
    z-index: 0;
  }
`;

export const HeroInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
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
`;

/* =========
   Scroll hint
========= */

export const ScrollHint = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
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
