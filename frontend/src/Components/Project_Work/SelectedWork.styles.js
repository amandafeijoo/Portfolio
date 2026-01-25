import styled from "styled-components";

export const ShowcaseWrap = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 80px;
`;

export const ShowcaseHeader = styled.div`
  margin-bottom: 28px;
`;

export const HeaderKicker = styled.div`
  color: rgba(201, 184, 138, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.35em;
  font-size: 0.85rem;
  margin-bottom: 12px;
  font-family: "Source Code Pro", monospace;
`;

export const HeaderTitle = styled.div`
  color: #f4f2ed;
  font-size: clamp(1.6rem, 3.2vw, 2.2rem);
  line-height: 1.2;
  text-shadow: 0 0 24px rgba(201, 184, 138, 0.12);
`;

export const HeaderLine = styled.div`
  margin-top: 18px;
  width: 72px;
  height: 1px;
  background: linear-gradient(90deg, rgba(201, 184, 138, 0.7), transparent);
`;

export const ShowcaseGrid = styled.div`
  display: grid;
  gap: 22px;

  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
