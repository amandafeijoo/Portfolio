import styled from "styled-components";

/* Breakpoints */
const tablet = "1024px";
const mobile = "768px";

export const AboutContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;

  padding: clamp(32px, 6vw, 56px);
  margin-top: clamp(30px, 18vw, 70px);

  box-sizing: border-box;

  /* 🌕 HALO */
  &::before {
    content: "";
    position: absolute;
    inset: -40px;
    background: radial-gradient(
      60% 40% at 50% 30%,
      rgba(201, 184, 138, 0.12),
      transparent 70%
    );
    filter: blur(40px);
    z-index: -1;
    pointer-events: none;
  }

  /* 📱 TABLET & MOBILE */
  @media (max-width: ${tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: clamp(120px, 22vw, 180px);
  }

  @media (max-width: ${mobile}) {
    gap: 28px;
    padding: 24px;
    margin-top: clamp(100px, 28vw, 160px);
  }
`;

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 28px;

  /* línea vertical solo en desktop */
  &::after {
    content: "";
    position: absolute;
    top: 12%;
    bottom: 2%;
    right: 0;
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(201, 184, 138, 0.6),
      transparent
    );
    box-shadow: 0 0 12px rgba(201, 184, 138, 0.35);
  }

  @media (max-width: 1024px) {
    padding-right: 0;

    &::after {
      display: none;
    }
    @media (max-width: ${mobile}) {
      gap: 28px;
      margin-top: -100px;
      font-size: 19px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`;
