import styled from "styled-components";

export const ThreeWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  /* suaviza y lo hace “halo” */
  opacity: 0.85;
  filter: blur(0.2px);

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;
