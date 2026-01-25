import styled from "styled-components";
import { motion } from "framer-motion";

/* ===============================
   CARD
================================ */
export const Card = styled(motion.div)`
  position: relative;
  width: 280px;
  margin-top: -190px;
  margin-bottom: -370px;
  max-width: 90%;
  padding: 34px 26px 30px;

  border-radius: 28px;
  border: 1px solid transparent;
  background:
    /* contenido */ linear-gradient(
        rgba(15, 15, 15, 0.92),
        rgba(15, 15, 15, 0.92)
      )
      padding-box,
    /* halo del borde */
      radial-gradient(
        120% 140% at 50% 0%,
        rgba(201, 169, 106, 0.45),
        rgba(201, 169, 106, 0.12) 35%,
        rgba(255, 255, 255, 0.12) 55%,
        rgba(255, 255, 255, 0.04) 75%,
        transparent 100%
      )
      border-box;

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.55);

  color: rgba(255, 255, 255, 0.92);
  text-align: center;

  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease, background 0.4s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 60px 120px rgba(0, 0, 0, 0.65);

    background: linear-gradient(rgba(15, 15, 15, 0.95), rgba(15, 15, 15, 0.95))
        padding-box,
      radial-gradient(
          120% 140% at 50% 0%,
          rgba(201, 169, 106, 0.65),
          rgba(201, 169, 106, 0.25) 40%,
          rgba(255, 255, 255, 0.18) 60%,
          transparent 100%
        )
        border-box;
  }
`;

/* ===============================
   TITLE
================================ */
export const CardTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: clamp(1.2rem, 3.5vw, 1.45rem);
  font-weight: 400;
  letter-spacing: 0.04em;
  margin-bottom: 14px;

  text-shadow: 0 0 1px rgba(255, 255, 255, 0.3),
    0 0 6px rgba(255, 255, 255, 0.15), 0 0 18px rgba(201, 169, 106, 0.14);
`;

/* ===============================
   SUBTITLE
================================ */
export const CardSubtitle = styled.p`
  font-size: clamp(0.82rem, 2.8vw, 0.85rem);
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.6;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

/* ===============================
   FEATURES (SIN BULLETS)
================================ */
export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 10px;
`;

/* ===============================
   FEATURE ITEM
================================ */
export const Feature = styled.div`
  font-size: clamp(0.9rem, 2.8vw, 0.9rem);
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.02em;
  padding-bottom: 10px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const PriceDivider = styled.div`
  width: 46px;
  height: 1px;
  margin: 0px auto 16px;

  background: linear-gradient(
    to right,
    transparent,
    rgba(201, 169, 106, 0.6),
    transparent
  );

  box-shadow: 0 0 10px rgba(201, 169, 106, 0.35);
`;

/* ===============================
   FOOTER
================================ */
export const CardFooter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  strong {
    font-size: 1rem;
    font-weight: 500;
  }

  span {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
  }

  &::before {
    width: 42px;
    margin: 0 auto 18px;
    content: "";
  }
`;
