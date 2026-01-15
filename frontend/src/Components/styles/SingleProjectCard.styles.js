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
  max-width: 900px;
  margin-inline: auto;

  /* DESKTOP */
  padding: 28px;
  border-radius: 22px;

  background: rgba(38, 38, 38, 0.96);
  border: 1px solid rgba(224, 204, 167, 0.28);

  box-shadow: 0 28px 65px rgba(0, 0, 0, 0.55),
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    inset 0 40px 80px rgba(200, 164, 106, 0.08);

  overflow: hidden;

  animation: ${({ inView }) => (inView ? slideInAndGrow : slideOutAndShrink)}
    0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  opacity: 0;

  /* ======================
     📱 MOBILE / TABLET
  ====================== */
  @media (max-width: 768px) {
    padding: 14px 14px 16px; 
    border-radius: 16px;

    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.45),
      inset 0 0 0 1px rgba(255, 255, 255, 0.03);

    overflow: visible;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 14px;
  }

  @media (max-width: 1024px) {
    animation: none !important;
    opacity: 1;
  }

  @media (min-width: 1024px) {
    will-change: transform, opacity;
  }
`;

/* =========================
   Video
========================= */
export const ProjectVideo = styled.video`
  width: 85%;
  margin-inline: auto;
  display: block;

  border-radius: 16px;
  object-fit: cover;

  border: 1px solid rgb(148, 123, 86);

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(200, 164, 106, 0.15);

  @media (max-width: 768px) {
    width: 92%; 
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    width: 80%; 
    border-radius: 12px;
  }
`;

/* =========================
   Text
========================= */
export const ProjectTitle = styled.h3`
  margin: 16px 0 6px;
  font-family: "Playfair Display", serif;
  font-size: 1.5em;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(210, 195, 170, 0.9);

  @media (max-width: 768px) {
    font-size: 1.2em; 
    letter-spacing: 0.08em;
    margin-top: 14px;
  }
`;

export const ProjectComment = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(205, 200, 192, 0.75);
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.45;
    margin-top: 8px;
  }
`;

export const ProjectTechnologies = styled.p`
  font-size: 0.75em;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(180, 170, 155, 0.6);
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
  height: 100px;

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

export const actionButtonStyles = {
  position: "relative",
  overflow: "visible",

  fontFamily: "'Source Code Pro', monospace",

  px: { xs: 2.4, md: 3.6 },
  py: { xs: 1.1, md: 1.55 }, 

  borderRadius: "999px",
  fontSize: { xs: "0.62rem", md: "0.7rem" }, 
  letterSpacing: { xs: "0.12em", md: "0.18em" },

  textTransform: "uppercase",

  color: "#f5f0e8",
  backgroundColor: "rgba(255,255,255,0.035)",
  border: "1px solid rgba(200,164,106,0.35)",

  boxShadow: `
    0 0 0 1px rgba(200,164,106,0.35),
    0 0 22px rgba(200,164,106,0.45)
  `,
};

const actionButtonSx = {
  px: { xs: 2, md: 3.5 },
  py: { xs: 1, md: 1.4 },
  fontSize: { xs: "0.6rem", md: "0.7rem" },
  letterSpacing: "0.14em",
  borderRadius: "999px",
  color: "#f5f0e8",
  border: "1px solid rgba(200,164,106,0.35)",
  backgroundColor: "rgba(255,255,255,0.035)",
  maxWidth: 260,
  mx: "auto",

  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.08)",
  },
};
