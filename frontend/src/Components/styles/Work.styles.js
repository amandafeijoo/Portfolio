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

  /* respiración vertical */
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
  letter-spacing: 0.02em;

  color: #ffffff;

  text-shadow: 0 8px 30px rgba(0, 0, 0, 0.55),
    0 2px 12px rgba(201, 169, 106, 0.12);
`;

/* ==================================================
   SUBTITLE
================================================== */

export const Subtitle = styled.p`
  font-family: "Source Code Pro", monospace;
  font-size: 0.85rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.52);

  margin-top: 4px;
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
