import styled from "styled-components";

export const PageWrap = styled.div`
  min-height: 100vh;
  padding: 120px 20px 160px;
  display: flex;
  justify-content: center;
  margin-top: -100px;
`;

export const PolicyCard = styled.div`
  width: 100%;
  max-width: 860px;
  padding: 64px 56px;

  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 0.95),
    rgba(12, 12, 12, 0.95)
  );

  border-radius: 28px;
  border: 1px solid rgba(201, 169, 106, 0.25);

  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.6),
    inset 0 0 60px rgba(201, 169, 106, 0.06);

  color: #f4f2ed;
`;

export const SectionTitle = styled.h3`
  margin-top: 48px;
  margin-bottom: 16px;
  font-size: 1.05rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(201, 169, 106, 0.95);
`;

export const ListItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;

  span {
    color: rgba(201, 169, 106, 0.9);
    font-size: 1.1rem;
  }

  p {
    opacity: 0.75;
  }
`;
