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
  margin-top: -9px;

  max-width: 970px;

  border-radius: 22px;

  background: rgba(38, 38, 38, 0.96);

border: 1px solid rgba(224, 204, 167, 0.28);

box-shadow:
  0 28px 65px rgba(0, 0, 0, 0.55),
  inset 0 0 0 1px rgba(255,255,255,0.04),
  inset 0 40px 80px rgba(200,164,106,0.08);

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

  border: 1px solid rgb(148, 123, 86);

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(200, 164, 106, 0.15);
`;

/* =========================
   Text
========================= */
export const ProjectTitle = styled.h3`
  margin: 18px 0 6px;
  font-family: "Playfair Display", serif;
  font-size: 1.5em;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: rgba(210, 195, 170, 0.9);

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;
export const ProjectComment = styled.p`
  font-size: 0.95em;
  line-height: 1.7;
  color: rgba(205, 200, 192, 0.75);
  margin-top: 12px;

  @media (max-width: 768px) {
    font-size: 0.85em;
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
    px: 3.6,
    py: 1.55,
    borderRadius: "999px",
    fontSize: "0.7rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  
    color: "#f5f0e8",
    backgroundColor: "rgba(255,255,255,0.035)",
  
    border: "1px solid rgba(200,164,106,0.35)",
  
    /* 🔆 HALO BASE — MUY VISIBLE */
    boxShadow: `
      0 0 0 1px rgba(200,164,106,0.35),
      0 0 28px rgba(200,164,106,0.55),
    `,
  
    transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
  
    /* 🌫️ HALO ATMOSFÉRICO */
    "&::before": {
      content: '""',
      position: "absolute",
      inset: "-6px",
      borderRadius: "inherit",
      boxShadow: "0 0 90px rgba(200,164,106,0.45)",
      opacity: 0.85,
      filter: "blur(12px)",
      transition: "all 0.4s ease",
      pointerEvents: "none",
    },
  
    /* 🚀 HOVER — EL HALO CAMBIA */
    "&:hover": {
      transform: "translateY(-1px)",
      color: "#f5f0e8",

      backgroundColor: "rgba(255,255,255,0.07)",
      borderColor: "rgba(200,164,106,0.55)",
  
      boxShadow: `
        0 0 0 1px rgba(200,164,106,0.55),
        0 0 42px rgba(200,164,106,0.75),
        0 0 80px rgba(200,164,106,0.45)
      `,
  
      "&::before": {
        inset: "-10px",
        boxShadow: "0 0 140px rgba(200,164,106,0.65)",
        opacity: 1,
        filter: "blur(16px)",
      },
    },
  };
  
  
  