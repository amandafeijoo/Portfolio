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
  color: #f4f2ed;
  font-size: 0.95rem;

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

export const Input = styled.input`${baseInput}`;

export const Select = styled.select`
  ${baseInput}
  cursor: pointer;

  option {
    background: #0e0e0e;
    color: #f4f2ed;
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
  margin-top: 24px;
  align-self: flex-start;
  padding: 12px 28px;
  border-radius: 14px;

  border: 1px solid rgba(201, 184, 138, 0.45);
  background: rgba(201, 184, 138, 0.18);

  color: #f4f2ed;
  font-family: "Source Code Pro", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(201, 184, 138, 0.3);
    background: rgba(201, 184, 138, 0.26);
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  ${mobile} {
    align-self: center;
    padding: 14px 32px;
    margin-top: 18px;
    font-size: 0.72rem;
    letter-spacing: 0.2em;
  }
`;

export const PrivacyNote = styled.p`
  margin-top: 12px;
  font-size: 0.7rem;
  opacity: 0.55;
  max-width: 420px;
  color: #f4f2ed;

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
  color: #f4f2ed;

  ${mobile} {
    font-size: 0.7rem;
  }
`;
