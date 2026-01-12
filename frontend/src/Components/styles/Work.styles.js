import styled from "styled-components";

/* ==================================================
   WORK SECTION
================================================== */

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 640px;
  background: #000;
  overflow: hidden;
  margin-top: -90px;
  margin-bottom: -280px;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 140px 0 160px;

  @media (max-width: 768px) {
    padding: 110px 0 130px;
    min-height: 520px;
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

/* ==================================================
   TITLE
================================================== */

export const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(3rem, 6vw, 4.4rem);
  font-weight: 500;
  letter-spacing: 0.04em;

  color: rgba(237, 231, 217, 0.95);

  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.04),
    0 12px 40px rgba(0, 0, 0, 0.65), 0 0 28px rgba(200, 164, 106, 0.18);
`;

/* ==================================================
   SUBTITLE
================================================== */

export const Subtitle = styled.p`
  font-family: "Source Code Pro", monospace;
  font-size: 0.8rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;

  color: rgba(201, 169, 106, 0.75);
  opacity: 0.85;

  margin-top: -20px;
`;

/* ==================================================
   OPTIONAL: SOFT FADE EDGES
================================================== */

export const FadeTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  z-index: 1;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const FadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  z-index: 1;

  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
