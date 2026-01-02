import styled from "styled-components";
import { motion } from "framer-motion";

/* ===============================
   SECTION (CONTENEDOR)
================================ */
export const ServicesSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center;
  margin-top: -80px;
  align-items: flex-end; 
  background: transparent;
  pointer-events: auto;
`;

/* ===============================
   DRAG WRAPPER (AHORA SOLO CENTRA)
================================ */
export const DragWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 460px; 
  padding-bottom: 6vh;

  cursor: default;
`;
