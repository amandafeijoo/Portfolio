import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  align-self: flex-start;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  min-height: 100%;
  border-radius: 28px;
  padding: 24px 22px 26px;

  border: 1px solid rgba(201, 169, 106, 0.16);

  background: linear-gradient(
    180deg,
    rgba(16, 16, 16, 0.96) 0%,
    rgba(10, 10, 10, 0.985) 100%
  );

  backdrop-filter: blur(16px);

  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.58),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);

  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background: radial-gradient(
      circle at 50% -8%,
      rgba(201, 169, 106, 0.15),
      rgba(201, 169, 106, 0.06) 28%,
      transparent 64%
    );
    opacity: 0.95;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.03) 0%,
      transparent 18%,
      transparent 78%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(201, 169, 106, 0.3);
    box-shadow: 0 34px 90px rgba(0, 0, 0, 0.64),
      0 0 26px rgba(201, 169, 106, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    padding: 22px 18px 24px;
    border-radius: 24px;
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
  margin: 0 auto;
  max-width: 300px;

  font-size: 0.94rem;
  line-height: 1.72;
  color: rgba(222, 222, 222, 0.8);

  @media (max-width: 768px) {
    max-width: 255px;
    font-size: 0.84rem;
    line-height: 1.55;
  }
`;

export const PanelContent = styled.div`
  width: 100%;
  max-height: ${({ $open }) => ($open ? "320px" : "0px")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  overflow: hidden;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-8px)")};
  transition: max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease,
    transform 0.3s ease, margin-top 0.3s ease;
  margin-top: ${({ $open }) => ($open ? "18px" : "0px")};
`;

export const PanelInner = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CardBullets = styled.ul`
  margin: 16px auto 0;
  max-width: 260px;
  padding-left: 18px;

  text-align: left;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.92rem;
  line-height: 1.72;

  li::marker {
    color: rgba(231, 201, 143, 0.95);
  }

  li + li {
    margin-top: 6px;
  }

  @media (max-width: 768px) {
    max-width: 232px;
    padding-left: 0;
    list-style: none;
    font-size: 0.81rem;
    line-height: 1.48;

    li {
      position: relative;
      padding-left: 16px;
    }

    li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.62em;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(231, 201, 143, 0.95);
      box-shadow: 0 0 8px rgba(231, 201, 143, 0.25);
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
