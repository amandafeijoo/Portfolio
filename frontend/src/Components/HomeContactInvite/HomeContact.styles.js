import styled from "styled-components";
const tablet = "@media (max-width: 1024px)";
const mobile = "@media (max-width: 768px)";
const smallMobile = "@media (max-width: 520px)";

export const InviteWrap = styled.section`
  position: relative;
  padding: 180px 20px;
  overflow: hidden;
  margin-top: 150px;

  ${tablet} {
    padding: 140px 18px;
    margin-top: 140px;
  }

  ${mobile} {
    padding: 100px 16px;
    margin-top: 30px;
  }

  ${smallMobile} {
    padding: 80px 14px;
    margin-top: 70px;
  }
`;

export const InviteContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;

  ${mobile} {
    padding: 0 4px;
  }
`;

export const InviteKicker = styled.div`
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(201, 184, 138, 0.9);
  margin-bottom: 18px;

  ${mobile} {
    font-size: 0.78rem;
    letter-spacing: 0.28em;
    margin-bottom: 14px;
  }

  ${smallMobile} {
    font-size: 0.72rem;
    letter-spacing: 0.24em;
  }
`;

export const InviteTitle = styled.h2`
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 500;
  color: #f4f2ed;
  line-height: 1.15;
  margin-bottom: 28px;

  ${mobile} {
    line-height: 1.18;
    margin-bottom: 22px;
    font-size: clamp(1.8rem, 6vw, 2.8rem);
  }
`;

export const InviteLine = styled.div`
  width: 80px;
  height: 1px;
  margin: 0 auto 36px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.8),
    transparent
  );

  ${mobile} {
    width: 60px;
    margin-bottom: 28px;
  }
`;
export const InviteCTA = styled.button`
  position: relative;
  isolation: isolate;
  overflow: visible;

  /* 📐 SIZE (equivalente a sx responsive) */
  padding: 18px 27px;

  /* 🔤 TEXT */
  font-family: "Source Code Pro", monospace;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;

  /* 🎨 COLORS */
  color: #e6d5bc;
  border: 1px solid rgba(230, 213, 188, 0.45);
  border-radius: 999px;

  background: rgba(18, 19, 20, 0.55);
  backdrop-filter: blur(10px);

  /* 🌕 DEPTH */
  box-shadow: 0 0 16px rgba(230, 213, 188, 0.25),
    0 0 48px rgba(230, 213, 188, 0.15);

  cursor: pointer;

  transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;

  /* 🌕 HALO EXTERNO */
  &::before {
    content: "";
    position: absolute;
    inset: -14px;
    border-radius: 999px;
    background: radial-gradient(
      circle,
      rgba(230, 213, 188, 0.35),
      transparent 70%
    );
    filter: blur(26px);
    opacity: 0.85;
    z-index: -1;
    pointer-events: none;
    transition: opacity 0.35s ease, filter 0.35s ease;
  }

  /* ✨ HALO INTERNO */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 999px;
    background: radial-gradient(
      60% 60% at 50% 0%,
      rgba(230, 213, 188, 0.22),
      transparent 70%
    );
    opacity: 0.6;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(230, 213, 188, 0.18);
    border: 1px solid rgba(230, 213, 188, 0.45);

    box-shadow: 0 0 28px rgba(230, 213, 188, 0.45),
      0 0 80px rgba(230, 213, 188, 0.25);

    &::before {
      opacity: 1;
      filter: blur(30px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  /* 🚫 DISABLED (si usas disabled prop) */
  &:disabled {
    opacity: 0.4;
    box-shadow: none;
    cursor: default;

    &::before {
      opacity: 0;
    }
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 0.66rem;
    letter-spacing: 0.18em;

    &::before {
      inset: -10px;
      filter: blur(22px);
    }
  }

  /* 📱 SMALL MOBILE */
  @media (max-width: 520px) {
    padding: 9px 20px;
    font-size: 0.62rem;
    letter-spacing: 0.16em;
  }
`;
