import styled from "styled-components";

/* =========================
   MEDIA QUERIES
========================= */
export const tablet = "@media (max-width: 1024px)";
export const mobile = "@media (max-width: 768px)";
export const smallMobile = "@media (max-width: 520px)";

/* =========================
   FORM WRAPPER
========================= */
export const FormWrapper = styled.form`
  max-width: 640px;
  margin: 0 auto;
  padding: 56px 56px 64px;
  border-radius: 28px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  backdrop-filter: blur(22px);

  ${tablet} {
    padding: 48px 42px 56px;
    gap: 28px;
  }

  ${mobile} {
    padding: 40px 28px 48px;
    border-radius: 22px;
    gap: 24px;
    margin-top: 32px;
  }

  ${smallMobile} {
    padding: 32px 20px 40px;
    border-radius: 20px;
    gap: 22px;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${mobile} {
    gap: 6px;
  }
`;

export const Label = styled.label`
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(201, 184, 138, 0.9);

  ${mobile} {
    font-size: 0.68rem;
    letter-spacing: 0.16em;
  }
`;

/* =========================
   INPUT BASE
========================= */
const baseInput = `
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.25);
  padding: 10px 0;
  color:rgb(247, 238, 215);
  font-size: 0.95rem;
  font-family: "Inter", sans-serif;

  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(201,184,138,0.9);
  }

  &::placeholder {
    color: rgba(255,255,255,0.35);
  }

  ${mobile} {
    font-size: 0.9rem;
    padding: 9px 0;
  }

  ${smallMobile} {
    font-size: 0.88rem;
  }
`;

export const Input = styled.input`
  ${baseInput}
`;

export const Select = styled.select`
  ${baseInput}
  cursor: pointer;

  color: ${({ value }) =>
    value ? "rgb(247, 238, 215)" : "rgba(255,255,255,0.35)"};

  option {
    background: #0e0e0e;
    color: #e6d5bc;
  }
`;

export const Textarea = styled.textarea`
  ${baseInput}
  resize: vertical;
`;

/* =========================
   BUTTON & TEXT
========================= */
export const SubmitButton = styled.button`
  position: relative;
  isolation: isolate;
  overflow: visible;

  margin-top: 24px;
  align-self: flex-start;

  padding: 10px 24px;
  border-radius: 999px;

  font-family: "Source Code Pro", monospace;
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  color: #e6d5bc;
  border: 1px solid rgba(230, 213, 188, 0.45);

  background: rgba(18, 19, 20, 0.55);
  backdrop-filter: blur(10px);

  box-shadow: 0 0 16px rgba(230, 213, 188, 0.25),
    0 0 48px rgba(230, 213, 188, 0.15);

  cursor: pointer;

  transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;

  /* 🌕 HALO EXTERNO */
  &::before {
    content: "";
    position: absolute;
    inset: -10px;
    border-radius: 999px;
    background: radial-gradient(
      circle,
      rgba(230, 213, 188, 0.35),
      transparent 70%
    );
    filter: blur(22px);
    opacity: 0.85;
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
      rgba(230, 213, 188, 0.22),
      transparent 70%
    );
    opacity: 0.6;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(230, 213, 188, 0.18);
    border: 1px solid rgba(230, 213, 188, 0.45);

    box-shadow: 0 0 28px rgba(230, 213, 188, 0.45),
      0 0 80px rgba(230, 213, 188, 0.25);

    &::before {
      opacity: 1;
      filter: blur(26px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    box-shadow: none;

    &::before {
      opacity: 0;
    }
  }

  -webkit-tap-highlight-color: transparent;

  /* 📱 SM */
  @media (min-width: 600px) {
    padding: 15px 35px;
    font-size: 0.7rem;
    letter-spacing: 0.25em;

    &::before {
      inset: -14px;
      filter: blur(26px);
    }

    &:hover::before {
      filter: blur(30px);
    }
  }

  /* 📱 MOBILE CENTER */
  @media (max-width: 520px) {
    align-self: center;
  }
`;

export const PrivacyNote = styled.p`
  margin-top: 12px;
  font-size: 0.7rem;
  opacity: 0.55;
  max-width: 420px;
  color: #e6d5bc;

  a {
    color: rgba(201, 184, 138, 0.9);
    text-decoration: underline;
  }

  ${mobile} {
    font-size: 0.65rem;
    max-width: 100%;
  }
`;

export const Hint = styled.p`
  margin-top: 8px;
  font-size: 0.75rem;
  opacity: 0.6;
  color: #e6d5bc;

  ${mobile} {
    font-size: 0.7rem;
  }
`;
