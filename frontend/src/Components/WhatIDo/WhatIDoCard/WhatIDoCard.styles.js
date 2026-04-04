import styled from "styled-components";

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

export const CardTitle = styled.h3`
  font-size: 1.08rem;
  font-weight: 600;
  color: rgba(243, 235, 222, 0.96);
  max-width: 260px;
  margin: 22px auto 8px;
  line-height: 1.28;
  letter-spacing: -0.01em;
  opacity: 0.94;
  transform: translateY(4px);
  transition: opacity 0.4s ease, transform 0.4s ease, text-shadow 0.4s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
    text-shadow: 0 0 18px rgba(201, 184, 138, 0.12);
  }

  @media (max-width: 768px) {
    max-width: 260px;
    margin: 16px auto 6px;
    font-size: 1.02rem;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }
`;

export const CardIntro = styled.p`
  margin: 10px auto 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.95rem;
  line-height: 1.72;
  text-align: center;
  max-width: 280px;

  @media (max-width: 768px) {
    max-width: 255px;
    margin-top: 6px;
    font-size: 0.88rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const CardText = styled.p`
  font-size: 0.92rem;
  color: rgba(220, 220, 220, 0.8);
  max-width: 280px;
  margin: 0 auto;
  line-height: 1.75;

  @media (max-width: 768px) {
    max-width: 250px;
    font-size: 0.86rem;
    line-height: 1.55;
    color: rgba(220, 220, 220, 0.76);
  }
`;

export const HoverContent = styled.div`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(12px);
  transition: max-height 0.45s ease, opacity 0.35s ease, transform 0.35s ease;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    max-height: none;
    opacity: 1;
    overflow: visible;
    transform: none;
    margin-top: 2px;
  }
`;

export const CardBullets = styled.ul`
  margin: 18px auto 0;
  padding-left: 18px;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.8;
  font-size: 0.95rem;
  text-align: left;
  max-width: 260px;

  li {
    position: relative;
  }

  li::marker {
    color: rgba(216, 187, 130, 0.9);
  }

  li + li {
    margin-top: 6px;
  }

  @media (max-width: 768px) {
    max-width: 225px;
    margin-top: 12px;
    padding-left: 0;
    list-style: none;
    font-size: 0.82rem;
    line-height: 1.45;

    li {
      padding-left: 16px;
      color: rgba(255, 255, 255, 0.74);
    }

    li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.62em;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(216, 187, 130, 0.9);
      box-shadow: 0 0 8px rgba(216, 187, 130, 0.25);
    }

    li + li {
      margin-top: 8px;
    }
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  margin-top: 22px;
  color: #d8bb82;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.76rem;
  text-decoration: none;
  position: relative;
  transition: opacity 0.25s ease, transform 0.25s ease, color 0.25s ease,
    text-shadow 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(216, 187, 130, 0.9),
      transparent
    );
    opacity: 0.7;
    transform: scaleX(0.85);
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  &:hover {
    opacity: 1;
    color: #ecd29d;
    transform: translateX(4px);
    text-shadow: 0 0 18px rgba(216, 187, 130, 0.18);
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    margin-top: 18px;
    padding: 10px 16px;
    border-radius: 999px;
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    color: #ecd29d;
    background: rgba(201, 184, 138, 0.08);
    border: 1px solid rgba(201, 184, 138, 0.22);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05),
      0 8px 18px rgba(0, 0, 0, 0.24);

    &::after {
      display: none;
    }

    &:hover {
      transform: translateY(-1px);
      background: rgba(201, 184, 138, 0.12);
      border-color: rgba(201, 184, 138, 0.34);
    }
  }
`;

export const PlaceholderMedia = styled.div`
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.02)
    ),
    radial-gradient(
      circle at center,
      rgba(201, 184, 138, 0.06),
      transparent 65%
    );
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