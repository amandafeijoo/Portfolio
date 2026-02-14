import styled from "styled-components";
const mobile = "@media (max-width: 768px)";

export const HeroWrap = styled.section`
  position: relative;
  min-height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  overflow: hidden;
  margin-bottom: -220px;
  /* 📱 Mobile */
  ${mobile} {
    min-height: 100vh;
    margin-bottom: -20px;
    margin-top: -60px;
  }
`;

export const ThreeWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const HeroInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;

  padding: 60px 40px;
  transform: translateY(-20px);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.45) 40%,
      rgba(0, 0, 0, 0.15) 70%,
      transparent 100%
    );
    z-index: -1;
    border-radius: 50%;
    filter: blur(40px);
  }
`;

export const Kicker = styled.div`
  position: absolute;
  top: 30%;
  left: 52%;
  transform: translateX(-50%);

  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(246, 240, 226, 0.9);

  z-index: 5;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 30%;
    font-size: 0.7rem;
    left: 56%;
  }
`;

export const Headline = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 400;
  color: rgb(243, 225, 183);
  line-height: 1.08;
  margin-top: 90;
  margin-bottom: 0px;

  text-shadow: 0 0 34px rgba(201, 184, 138, 0.18);
`;

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

export const Subline = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 245, 220, 0.88);
  line-height: 1.6;
  margin-top: 18px;

  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;
