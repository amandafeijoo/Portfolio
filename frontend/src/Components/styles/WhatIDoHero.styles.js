import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const tablet = "@media (max-width: 1024px)";
const mobile = "@media (max-width: 768px)";

/* =========
   Hero
========= */

export const HeroWrap = styled.section`
  position: relative;
  width: 100%;
  padding: 140px 20px 160px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.015)
  );
  isolation: isolate;

  /* halo interno sutil */
  &::after {
    content: "";
    position: absolute;
    inset: -30%;
    background: radial-gradient(
      40% 30% at 50% 30%,
      rgba(201, 184, 138, 0.06),
      transparent 70%
    );
    filter: blur(90px);
    pointer-events: none;
    max-width:100vw;
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
  font-family: "Source Code Pro", monospace;
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
  margin-top: 80px;
  font-family: "Source Code Pro", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(201, 184, 138, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .arrow {
    font-size: 1.2rem;
    opacity: 0.6;
  }
`;
