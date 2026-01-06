import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/* ============================
   🔥 FLOAT ANIMATION
===============================*/
const float = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

/* ============================
   🔥 HERO WRAPPER (FIXED)
===============================*/
export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 120vh;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
  margin-top: -95px;

  /* 🎬 VIGNETTE SUAVE (CLAVE DEL LOOK PREMIUM) */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;

    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 42%,
      rgba(0, 0, 0, 0.45) 70%,
      rgba(0, 0, 0, 0.85) 100%
    );
  }

  /* 📱 iPhone */
  @media (max-width: 768px) {
    height: 100vh;
    margin-top: 0;
    overflow: hi;

    &::after {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 48%,
        rgba(0, 0, 0, 0.55) 78%,
        rgba(0, 0, 0, 0.9) 100%
      );
    }
  }

  /* 📱 iPad Pro */
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 110vh;
  }
`;

/* ============================
   🔥 IMAGES LAYER + PERFECT MASK
===============================*/
export const ImagesLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  transform: translateX(-80px);

  @media (max-width: 768px) {
    transform: translateX(-40px);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    transform: translateX(-60px);
  }
`;

/* ============================
   🔥 CARDS
===============================*/
export const CardImg = styled(motion.img)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 320px;
  aspect-ratio: 2 / 4;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(0.62) contrast(1.05);
  pointer-events: none;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55),
    0 0 30px rgba(201, 169, 106, 0.12);

  @media (max-width: 768px) {
    width: 110px;
    height: 220px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 140px;
    height: 280px;
  }
`;

/* ============================
   🔥 TEXT
===============================*/
export const MainName = styled.h1`
  font-size: 4.5em;
  font-weight: 800;
  letter-spacing: 4px;
  z-index: 10;
  margin-bottom: 14px;
  text-align: center;
  animation: ${float} 6s ease-in-out infinite;

  color: #ffffff;

  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.9), 0 0 26px rgba(255, 255, 255, 0.35);

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    margin: 16px auto 0;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: 2px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 4rem;
  }
`;

export const Slogan = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.95);
  z-index: 10;
  margin-bottom: 26px;
  text-align: center;
  letter-spacing: 0.35px;

  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.85),
    0 0 16px rgba(255, 255, 255, 0.25);

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const ChangingWord = styled.span`
  display: inline-block;
  padding: 6px 14px;
  margin-left: 8px;
  font-weight: 500;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.18),
    rgba(255, 255, 255, 0.05)
  );

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  box-shadow: 0 0 14px rgba(255, 255, 255, 0.12),
    inset 0 0 12px rgba(255, 255, 255, 0.08);

  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 22px rgba(140, 120, 255, 0.25),
      inset 0 0 18px rgba(255, 255, 255, 0.12);
  }
`;

export const TitleDivider = styled.div`
  width: 64px;
  height: 1px;
  margin: 22px auto 0;

  background: linear-gradient(
    to right,
    transparent,
    rgba(201, 169, 106, 0.85),
    transparent
  );

  box-shadow: 0 0 8px rgba(211, 148, 250, 0.6),
    0 0 18px rgba(211, 148, 250, 0.35);

  opacity: 1;
`;

/* ============================
   🔥 BUTTONS
===============================*/
export const ButtonRow = styled.div`
  display: flex;
  gap: 22px;
  z-index: 10;
  margin-top: 34px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px;
  }
`;

export const PrimaryButton = styled.button`
  position: relative;
  padding: 14px 30px;
  background: linear-gradient(180deg, #ffffff 0%, #f3f3f3 100%);
  color: #000;
  border-radius: 14px;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.4px;
  cursor: pointer;
  border: none;

  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 6px 18px rgba(0, 0, 0, 0.35),
    0 10px 28px rgba(0, 0, 0, 0.45), 0 0 22px rgba(201, 169, 106, 0.45);

  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45),
      0 0 26px rgba(255, 255, 255, 0.65), 0 0 34px rgba(201, 169, 106, 0.65);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35),
      0 0 18px rgba(201, 169, 106, 0.85);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  position: relative;
  padding: 14px 30px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(240, 240, 240, 0.06) 100%
  );

  color: rgba(255, 255, 255, 0.92);
  border-radius: 14px;

  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.4px;
  cursor: pointer;

  border: 1px solid rgba(201, 169, 106, 0.35);
  backdrop-filter: blur(10px);

  box-shadow: inset 0 0 0 rgba(255, 255, 255, 0), 0 4px 14px rgba(0, 0, 0, 0.35),
    0 0 14px rgba(201, 169, 106, 0.18);

  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(240, 240, 240, 0.1) 100%
    );

    box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.1),
      0 6px 20px rgba(0, 0, 0, 0.45), 0 0 22px rgba(201, 169, 106, 0.35);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35),
      0 0 16px rgba(201, 169, 106, 0.45);
  }
  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(201, 169, 106, 0.45),
      0 0 18px rgba(201, 169, 106, 0.35);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FocusHaloWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  pointer-events: none;
`;

export const FocusHalo = styled.div`
  width: clamp(320px, 60vw, 640px);
  height: clamp(320px, 60vw, 640px);
  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(201, 169, 106, 0.12) 0%,
    rgba(201, 169, 106, 0.08) 18%,
    rgba(0, 0, 0, 0.35) 45%,
    rgba(0, 0, 0, 0.75) 70%,
    rgba(0, 0, 0, 1) 100%
  );

  filter: blur(14px);

  animation: ${float} 12s ease-in-out infinite;
  will-change: transform;
`;

export const TextFocus = styled.div`
  position: relative;
  margin-top: 20vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;

  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;
