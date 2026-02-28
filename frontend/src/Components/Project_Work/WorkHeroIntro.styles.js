import styled from "styled-components";

export const HeroWrap = styled.section`
  position: relative;
  width: 100%;
  min-height: 80vh;
  padding: 120px 20px;
  display: flex;
  align-items: center;
  overflow: hidden;

  background: radial-gradient(
    60% 40% at 50% 0%,
    rgba(201, 184, 138, 0.12),
    transparent 70%
  );

  &::after {
    content: "";
    position: absolute;
    inset: -40%;
    background: radial-gradient(
      40% 30% at 50% 30%,
      rgba(201, 184, 138, 0.08),
      transparent 70%
    );
    filter: blur(80px);
    pointer-events: none;
  }
`;

export const HeroInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

export const Kicker = styled.div`
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: rgba(201, 184, 138, 0.9);
  margin-bottom: 20px;
`;

export const Headline = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 500;

  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.02em;

  color: rgba(247, 236, 205, 0.92);
  text-align: center;
  margin-bottom: 28px;

  text-shadow: 0 0 12px rgba(201, 184, 138, 0.25),
    0 0 32px rgba(201, 184, 138, 0.18);

  @supports (text-wrap: balance) {
    text-wrap: balance;
  }

  .highlight {
    color: #e8c98f;
    text-shadow: 0 0 12px rgba(201, 184, 138, 0.45),
      0 0 28px rgba(201, 184, 138, 0.28);
  }
`;

export const Divider = styled.div`
  margin: 0 auto 24px;
  width: 80px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.7),
    transparent
  );
`;

export const Subline = styled.p`
  max-width: 60ch;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(244, 242, 237, 0.78);
`;
