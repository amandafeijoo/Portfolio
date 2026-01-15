import styled from "styled-components";

/* ==================================================
   WORK SECTION
================================================== */

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh; 
  background: #000;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -290px;

  @media (max-width: 768px) {
    padding: 110px 0 130px;
    min-height: 90vh;
    margin-bottom: -370px;
  }
`;

/* ==================================================
   CANVAS BACKGROUND
================================================== */

export const CanvasWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  canvas {
    width: 100%;
    height: 100%;
    opacity: 0.72;
    display: block;
  }
`;

/* ==================================================
   CONTENT LAYER
================================================== */

export const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 500;

  font-size: clamp(2.2rem, 5vw, 4.4rem);
  letter-spacing: clamp(0.015em, 0.8vw, 0.04em);
  line-height: 1.05; 

  color: rgba(237, 231, 217, 0.95);
  text-align: center;

  margin: 0; 

  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.04), 0 10px 32px rgba(0, 0, 0, 0.6),
    0 0 24px rgba(200, 164, 106, 0.15);

  @media (max-width: 480px) {
    line-height: 1.08;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.03),
      0 6px 20px rgba(0, 0, 0, 0.55);
  }
`;

/* ==================================================
   SUBTITLE
================================================== */

export const Subtitle = styled.p`
  font-family: "Source Code Pro", monospace;
  text-transform: uppercase;

  font-size: clamp(0.72rem, 1.6vw, 0.85rem);

  /* 👇 tracking más natural */
  letter-spacing: clamp(0.12em, 1.4vw, 0.22em);

  color: rgba(201, 169, 106, 0.78);
  opacity: 0.95;

  text-align: center;

  max-width: 92vw; 
  padding: 0 16px; 

  margin: 8px auto 0;
  line-height: 1.55;

  @media (max-width: 480px) {
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    padding: 0 20px; 
  }
`;

/* ==================================================
   OPTIONAL: SOFT FADE EDGES
================================================== */
export const FadeTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: clamp(70px, 10vh, 120px);
  z-index: 1;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const FadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: clamp(90px, 12vh, 140px);
  z-index: 1;

  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
