import styled from "styled-components";

/* ==================================================
   HEADER WRAPPER (FIXED + SAFE AREA)
================================================== */
export const HeaderWrapper = styled.header`
  position: fixed;

  /* 🔥 SAFE AREA iPhone (notch) */
  top: calc(env(safe-area-inset-top) + 10px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 3000;

  width: 52%;
  max-width: 880px;

  background: rgba(30, 30, 30, 0.55);
  backdrop-filter: blur(14px);
  border-radius: 18px;
  padding: 0.35rem 0.8rem;

  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 0 0 1px rgba(253, 253, 253, 0.06),
    0 12px 40px rgba(42, 42, 42, 0.12);

  /* ================= TABLET ================= */
  @media (max-width: 1024px) {
    width: 76%; /* 👈 un poco más estrecho */
    top: calc(env(safe-area-inset-top) + 32px);
  }

  /* ================= MOBILE ================= */
  @media (max-width: 768px) {
    width: 92%;
    padding: 0.4rem 0.6rem;
    border-radius: 14px;
  }
`;

/* ==================================================
   INNER
================================================== */
export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* ==================================================
   LEFT / LOGO
================================================== */
export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 55px;
  cursor: pointer;
  border-radius: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    height: 42px;
  }
`;

/* ==================================================
   CENTER MENU (DESKTOP)
================================================== */
export const Center = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuLink = styled.a`
  color: #ffffffc4;
  text-decoration: none;
  font-size: 0.92rem;
  letter-spacing: 0.5px;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

/* ==================================================
   RIGHT / CTA + BURGER
================================================== */
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ActionButton = styled.button`
  padding: 0.45rem 1.1rem;
  background: #ffffff;
  color: #000000;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 22px rgba(255, 255, 255, 0.45);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 28px rgba(255, 255, 255, 0.6);
  }

  /* 🔥 MOBILE: quitamos rotación (iOS friendly) */
  @media (max-width: 768px) {
    padding: 0.35rem 0.9rem;
    font-size: 0.8rem;
    border-radius: 10px;
  }
`;

/* ==================================================
   BURGER (MOBILE)
================================================== */
export const Burger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 6px;

  span {
    width: 22px;
    height: 2px;
    background: #ffffff;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

/* ==================================================
   MOBILE MENU (FULLSCREEN SAFE)
================================================== */
export const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2500;

  background: rgba(20, 20, 20, 0.85);
  backdrop-filter: blur(18px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: calc(env(safe-area-inset-top) + 100px) 24px 40px;

  /* 🔥 translate3d = más estable en iOS */
  transform: ${({ open }) =>
    open ? "translate3d(0,0,0)" : "translate3d(0,-110%,0)"};
  transition: transform 0.45s ease;
`;

/* ==================================================
   MOBILE LINKS
================================================== */
export const MobileLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  a {
    color: #ffffff;
    font-size: 1.5rem;
    text-decoration: none;
    letter-spacing: 1px;

    padding: 12px 28px;
    border-radius: 16px;

    transition: background 0.2s ease, transform 0.15s ease, color 0.15s ease,
      box-shadow 0.15s ease;

    /* 🔥 TAP FEEDBACK (ESTO SÍ FUNCIONA EN iOS) */
    &:active {
      background: rgba(255, 255, 255, 0.18);
      transform: scale(0.96);
      color: #ffffff;
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.35);
    }

    /* Quita highlight azul de Safari */
    -webkit-tap-highlight-color: transparent;
  }
`;

/* ==================================================
   MOBILE SOCIALS
================================================== */
export const MobileSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;

  a {
    color: #ffffff;
    font-size: 28px;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`;

/* ==================================================
   STICKY SOCIALS (DESKTOP)
================================================== */
export const StickySocials = styled.div`
  position: fixed;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1500;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StickyIcon = styled.a`
  font-size: 26px;
  color: #ffffff;
  padding: 10px;
  border-radius: 50%;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;
