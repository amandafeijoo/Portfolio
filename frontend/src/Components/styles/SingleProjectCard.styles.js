import styled, { keyframes } from "styled-components";
import Wavify from "react-wavify";

/* =========================
   Animations (MISMAS)
========================= */
const slideInAndGrow = keyframes`
  0% {
    transform: translateY(20px) scale(0.96);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const slideOutAndShrink = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(20px) scale(0.96);
    opacity: 0;
  }
`;

/* =========================
   Container
========================= */
export const SingleProjectContainer = styled.div`
  position: relative;

  animation: ${({ inView }) => (inView ? slideInAndGrow : slideOutAndShrink)}
    0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  opacity: 0;
  padding: 24px;
  margin: 20px auto;
  max-width: 850px;

  border-radius: 22px;

  background: linear-gradient(
    180deg,
    rgba(16, 16, 16, 0.95),
    rgba(8, 8, 8, 0.9)
  );

  border: 1px solid rgba(200, 164, 106, 0.28);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55),
    inset 0 0 0 1px rgba(255, 255, 255, 0.03);

  overflow: hidden;

  @media (max-width: 1024px) {
    animation: none !important;
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }

  @media (min-width: 1440px) {
    padding: 32px;
  }
`;

/* =========================
   Video
========================= */
export const ProjectVideo = styled.video`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;

  border: 1px solid rgba(200, 164, 106, 0.35);

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(200, 164, 106, 0.15);
`;

/* =========================
   Text
========================= */
export const ProjectTitle = styled.h3`
  margin: 18px 0 6px;
  font-family: "Playfair Display", serif;
  font-size: 1.6em;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: #c8a46a;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

export const ProjectComment = styled.p`
  font-size: 0.95em;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 12px;

  @media (max-width: 768px) {
    font-size: 0.85em;
  }
`;

export const ProjectTechnologies = styled.p`
  font-size: 0.75em;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(200, 164, 106, 0.75);
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;

/* =========================
   Wave (MISMA IDEA)
========================= */
export const WaveBackground = styled(Wavify)`
  position: absolute;
  bottom: -35px;
  left: 0;

  width: 100%;
  height: 70px;

  transform: scaleY(3.2);
  opacity: 0.22;

  z-index: 0;

  @media (max-width: 768px) {
    height: 50px;
    transform: scaleY(2.4);
  }

  @media (max-width: 480px) {
    height: 32px;
    transform: scaleY(1.6);
  }
`;
