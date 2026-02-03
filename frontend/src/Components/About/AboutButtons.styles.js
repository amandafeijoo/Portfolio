import styled from "styled-components";

/* =========================
   BUTTON CONTAINER
========================= */
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 28px;
  justify-content: center;
  gap: 18px;
  flex-wrap: nowrap; 

  @media (max-width: 520px) {
    gap: 12px;
    margin-top: 22px;
    flex-direction: row;
    align-items: center;
  }
`;

/* =========================
   BASE BUTTON (WOW CORE)
========================= */
const BaseButton = styled.a`
  position: relative;
  isolation: isolate;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 26px;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;

  backdrop-filter: blur(10px);

  transition: transform 0.35s ease, box-shadow 0.35s ease,
    background-color 0.35s ease, border-color 0.35s ease;

  svg {
    font-size: 1rem;
  }

  /* 🌕 HALO EXTERNO */
  &::before {
    content: "";
    position: absolute;
    inset: -10px;
    border-radius: 999px;
    background: radial-gradient(
      circle,
      rgba(201, 184, 138, 0.35),
      transparent 70%
    );
    filter: blur(18px);
    opacity: 0.75;
    z-index: -1;
    pointer-events: none;
    transition: opacity 0.35s ease, filter 0.35s ease;
  }

  /* ✨ HALO INTERNO */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 999px;
    background: radial-gradient(
      60% 60% at 50% 0%,
      rgba(201, 184, 138, 0.25),
      transparent 70%
    );
    opacity: 0.6;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);

    &::before {
      opacity: 1;
      filter: blur(24px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 520px) {
    padding: 10px 18px;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    min-width: 140px;
    .icon {
      display: none;
    }
  }
`;

/* =========================
   PRIMARY CTA (CONTACT)
========================= */
export const ContactButton = styled(BaseButton)`
  color: #fbf7ef;
  background: rgba(18, 19, 20, 0.55);
  border: 1px solid rgba(201, 184, 138, 0.55);

  box-shadow: 0 0 18px rgba(201, 184, 138, 0.28),
    0 0 60px rgba(201, 184, 138, 0.18);

  svg {
    color: #f4f2ed;
  }

  &:hover {
    background: rgba(201, 184, 138, 0.22);
    box-shadow: 0 0 30px rgba(201, 184, 138, 0.45),
      0 0 90px rgba(201, 184, 138, 0.25);
    color: #fbf7ef;
  }
`;

/* =========================
   SECONDARY CTA (DOWNLOAD)
========================= */
export const DownloadButton = styled(BaseButton)`
  color: rgba(201, 184, 138, 0.9);
  background: rgba(18, 19, 20, 0.35);
  border: 1px solid rgba(201, 184, 138, 0.35);

  svg {
    color: rgba(201, 184, 138, 0.9);
  }

  &::before {
    background: radial-gradient(
      circle,
      rgba(201, 184, 138, 0.22),
      transparent 70%
    );
  }

  &:hover {
    color: #f4f2ed;
    border-color: rgba(201, 184, 138, 0.6);

    box-shadow: 0 0 20px rgba(201, 184, 138, 0.25),
      0 0 60px rgba(201, 184, 138, 0.18);
  }
`;
