import styled from "styled-components";
import { motion } from "framer-motion";

/* ===============================
   CARD
================================ */
export const Card = styled(motion.div)`
  width: 280px;
  max-width: 90%;
  padding: 34px 26px 30px;

  border-radius: 28px;

  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(2px);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 3px solid rgba(255, 255, 255, 0.1);

  box-shadow: ${({ featured }) =>
    featured
      ? `
        0 80px 140px rgba(0,0,0,0.7),
        0 0 60px rgba(201,169,106,0.18)
      `
      : `
        0 40px 90px rgba(0,0,0,0.55)
      `};

  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease, border-color 0.4s ease;

  color: rgba(255, 255, 255, 0.92);
  text-align: center;

  &:hover {
    border-color: rgba(201, 169, 106, 0.45);
    box-shadow: 0 60px 120px rgba(0, 0, 0, 0.65),
      0 0 40px rgba(201, 169, 106, 0.12);
  }
`;

/* ===============================
   TITLE
================================ */
export const CardTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.45rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin-top: 0;
  margin-bottom: 16px;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.35),
    0 0 8px rgba(255, 255, 255, 0.18), 0 0 24px rgba(201, 169, 106, 0.18);
`;

/* ===============================
   SUBTITLE
================================ */
export const CardSubtitle = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.6;
  margin-bottom: 28px;
`;

/* ===============================
   FEATURES (SIN BULLETS)
================================ */
export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 28px;
`;

/* ===============================
   FEATURE ITEM
================================ */
export const Feature = styled.div`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.02em;
  padding-bottom: 14px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

/* ===============================
   FOOTER
================================ */
export const CardFooter = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  strong {
    font-size: 1.05rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.95);
  }

  span {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.45);
    letter-spacing: 0.08em;
  }
  &::before {
    content: "";
    display: block;
    width: 48px;
    height: 1px;
    margin: 2px auto 20px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(201, 169, 106, 0.45),
      transparent
    );
  }
`;
