import styled from "styled-components";
import { motion } from "framer-motion";

/* ============================
   MENU WRAPPER
============================ */
export const MenuWrapper = styled.div`
  position: fixed;
  top: 25%;
  left: 300px;
  transform: translateY(-50%);
  z-index: 1200;

  width: 220px;
  padding: 48px 12px;

  background: rgba(120, 110, 95, 0.88);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 245, 230, 0.18);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

  border-radius: 16px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);

  /* =========================
     TABLET (iPad)
     768px – 1024px
  ========================= */
  @media (max-width: 1024px) {
    left: 50%;
    top: 42%;
    transform: translate(-50%, -50%);
    width: 200px;
    padding: 22px 14px;
  }

  /* =========================
     MOBILE (iPhone)
     ≤ 480px
     UX correcto: oculto
  ========================= */
  @media (max-width: 480px) {
    display: none;
  }
`;

/* ============================
   MENU ITEM
============================ */
export const MenuItem = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 1.15rem;
  text-align: center;
  color: #111;
  padding: 6px 0;

  @media (max-width: 1024px) {
    font-size: 1.05rem;
  }
`;

/* ============================
   DIVIDER
============================ */
export const MenuDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.35);
  margin: 14px 0;
`;

/* ============================
   CTA
============================ */
export const MenuCTA = styled(motion.div)`
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  color: #000;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;
