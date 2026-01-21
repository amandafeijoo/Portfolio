import styled from "styled-components";

/* =========================
   BUTTON CONTAINER
========================= */
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 28px;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
`;

/* =========================
   BASE BUTTON
========================= */
const BaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 26px;
  font-size: 0.95rem;
  font-family: "Source Code Pro", monospace;
  letter-spacing: 0.04em;

  border-radius: 14px;
  text-decoration: none;
  cursor: pointer;

  transition: transform 0.35s ease, box-shadow 0.35s ease,
    background-color 0.35s ease, border-color 0.35s ease;

  svg {
    font-size: 1rem;
  }
`;

/* =========================
   PRIMARY CTA
========================= */
export const ContactButton = styled(BaseButton)`
  color: #f4f2ed;
  background-color: rgba(201, 184, 138, 0.18);
  border: 1px solid rgba(201, 184, 138, 0.45);

  box-shadow: 0 0 20px rgba(201, 184, 138, 0.25),
    0 0 60px rgba(201, 184, 138, 0.12);

  svg {
    color: #f4f2ed;
  }

  &:hover {
    transform: translateY(-2px);
    color: #f4f2ed;

    background-color: rgba(201, 184, 138, 0.28);
    box-shadow: 0 0 30px rgba(201, 184, 138, 0.45),
      0 0 90px rgba(201, 184, 138, 0.22);
  }
`;

/* =========================
   SECONDARY CTA
========================= */
export const DownloadButton = styled(BaseButton)`
  color: #c9b88a;
  background-color: transparent;
  border: 1px solid rgba(201, 184, 138, 0.35);

  svg {
    color: #c9b88a;
  }

  &:hover {
    transform: translateY(-2px);
    color: #f4f2ed;

    border-color: rgba(201, 184, 138, 0.6);
    box-shadow: 0 0 20px rgba(201, 184, 138, 0.25),
      0 0 60px rgba(201, 184, 138, 0.12);
  }
`;
