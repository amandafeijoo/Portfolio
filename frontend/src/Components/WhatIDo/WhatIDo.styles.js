import styled from "styled-components";

/* ===============================
   CARD
================================ */
export const Card = styled.div`
  text-align: center;
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
  padding: 24px 18px 28px;
  border-radius: 30px;

  background: linear-gradient(
      180deg,
      rgba(15, 15, 15, 0.9),
      rgba(6, 6, 6, 0.97)
    ),
    radial-gradient(
      circle at top center,
      rgba(201, 184, 138, 0.08),
      transparent 58%
    );

  border: 1px solid rgba(201, 184, 138, 0.14);

  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.46),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease,
    border-color 0.5s ease, box-shadow 0.5s ease, background 0.5s ease;

  &::before {
    content: "";
    position: absolute;
    inset: -14%;
    background: radial-gradient(
      circle,
      rgba(201, 184, 138, 0.14),
      transparent 68%
    );
    opacity: 0;
    filter: blur(30px);
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -14px;
    transform: translateX(-50%);
    width: 42%;
    height: 22px;
    background: radial-gradient(
      ellipse,
      rgba(201, 184, 138, 0.14),
      transparent 72%
    );
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.45s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-14px) scale(1.018);
    filter: brightness(1.05);
    border-color: rgba(201, 184, 138, 0.32);
    box-shadow: 0 34px 90px rgba(0, 0, 0, 0.62),
      0 0 40px rgba(201, 184, 138, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }

  &:hover .hover-content {
    max-height: 260px;
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
    padding: 16px 14px 22px;
    border-radius: 24px;
    background: linear-gradient(
        180deg,
        rgba(14, 14, 14, 0.96),
        rgba(6, 6, 6, 0.98)
      ),
      radial-gradient(
        circle at top center,
        rgba(201, 184, 138, 0.11),
        transparent 64%
      );
    border: 1px solid rgba(201, 184, 138, 0.18);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.02) inset;
  }
`;

/* ===============================
   CARD IMAGE
================================ */
export const CardImg = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: stretch;

  > * {
    width: 100%;
    height: 100%;
    display: block;
    flex: 1;
  }

  img,
  video,
  canvas {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

/* ===============================
   DIVIDERS
================================ */
export const TitleDivider = styled.div`
  margin: 0 auto 22px;
  width: 96px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.78),
    transparent
  );
  box-shadow: 0 0 18px rgba(201, 184, 138, 0.12);
`;

export const Divider = styled.div`
  margin: 18px auto 20px;
  width: 92px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.72),
    transparent
  );
  box-shadow: 0 0 14px rgba(201, 184, 138, 0.08);

  @media (max-width: 768px) {
    width: 64px;
    margin: 14px auto 14px;
    opacity: 0.85;
  }
`;
