import styled from "styled-components";

export const InviteWrap = styled.section`
  position: relative;
  padding: 180px 20px;
  overflow: hidden;
  margin-top: 200px;
`;

export const InviteContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

export const InviteKicker = styled.div`
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(201, 184, 138, 0.9);
  margin-bottom: 18px;
`;

export const InviteTitle = styled.h2`
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 500;
  color: #f4f2ed;
  line-height: 1.15;
  margin-bottom: 28px;
`;

export const InviteLine = styled.div`
  width: 80px;
  height: 1px;
  margin: 0 auto 36px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.8),
    transparent
  );
`;

export const InviteCTA = styled.button`
  background: transparent;
  border: 1px solid rgba(201, 184, 138, 0.45);
  color: #f4f2ed;

  padding: 14px 34px;
  border-radius: 999px;

  font-family: "Source Code Pro", monospace;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.75rem;

  cursor: pointer;

  transition: all 0.35s ease;

  &:hover {
    background: rgba(201, 184, 138, 0.18);
    border: 1px solid rgba(201, 184, 138, 0.45);
    color: #f4f2ed;
    box-shadow: 0 0 28px rgba(201, 184, 138, 0.22);
    transform: translateY(-2px);
  }
`;
