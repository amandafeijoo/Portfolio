import styled from "styled-components";

/* =========================
   HERO WRAP (FULL WIDTH)
   → MISMO SISTEMA QUE SELECTED WORK
========================= */
export const CaseHeroWrap = styled.section`
  position: relative;
  width: 100%;
  padding: 140px 20px 100px;
  overflow: hidden;

  background: radial-gradient(
    60% 40% at 50% 0%,
    rgba(201, 184, 138, 0.12),
    transparent 70%
  );

  &::after {
    content: "";
    position: absolute;
    inset: -40%;
    background: radial-gradient(
      40% 30% at 50% 30%,
      rgba(201, 184, 138, 0.08),
      transparent 70%
    );
    filter: blur(80px);
    pointer-events: none;
  }
`;

/* =========================
   HERO INNER (CENTER CONTENT)
========================= */
export const CaseHeroInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

/* =========================
   HEADER TEXT
========================= */
export const CaseKicker = styled.div`
  font-family: "Source Code Pro", monospace;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: rgba(201, 184, 138, 0.9);
  margin-bottom: 20px;
`;

export const CaseTitle = styled.h1`
  color: #f4f2ed;
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 24px;

  text-shadow: 0 0 32px rgba(201, 184, 138, 0.18);
`;

export const CaseSubtitle = styled.p`
  max-width: 60ch;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(244, 242, 237, 0.78);
  white-space: pre-line;
`;

export const CaseDivider = styled.div`
  margin: 24px auto 0;
  width: 80px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 184, 138, 0.7),
    transparent
  );
`;

/* =========================
   CONTENT CONTAINER (NO HALO)
========================= */
export const Container = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px 100px;
`;

/* =========================
   VIDEO
========================= */
export const CaseVideo = styled.video`
  width: 100%;
  border-radius: 18px;
  margin-bottom: 60px;
  background: #000;

  box-shadow: 0 0 30px rgba(201, 184, 138, 0.18),
    0 0 90px rgba(201, 184, 138, 0.08);
`;

/* =========================
   CONTENT
========================= */
export const CaseContent = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(244, 242, 237, 0.82);

  p {
    margin-bottom: 20px;
  }

  h3 {
    margin-top: 48px;
    margin-bottom: 18px;
    font-size: 1.3rem;
    color: #f4f2ed;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 24px;
  }

  li {
    margin-bottom: 8px;
  }
`;

/* =========================
   META
========================= */
export const CaseMeta = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(201, 184, 138, 0.25);

  strong {
    display: block;
    margin-bottom: 8px;
    color: #f4f2ed;
    letter-spacing: 0.12em;
    font-size: 0.85rem;
  }

  span {
    color: rgba(201, 184, 138, 0.9);
  }
`;

/* =========================
   ACTIONS
========================= */
export const CaseActions = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
`;

export const CaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  padding: 12px 28px;
  border-radius: 14px;

  border: 1px solid rgba(201, 184, 138, 0.45);
  background: rgba(201, 184, 138, 0.18);
  color: #f4f2ed;

  letter-spacing: 0.04em;
  text-decoration: none;

  transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;

  svg {
    width: 18px;
    height: 18px;
    opacity: 0.85;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(201, 184, 138, 0.26);
    box-shadow: 0 0 28px rgba(201, 184, 138, 0.28);
    color: #f4f2ed;
  }

  &:hover svg {
    transform: translateX(4px);
    opacity: 1;
  }
`;

export const CaseGhostButton = styled(CaseButton)`
  background: transparent;
  color: rgba(201, 184, 138, 0.95);

  &:hover {
    background: rgba(201, 184, 138, 0.18);
    color: rgba(201, 184, 138, 0.95);
  }
`;

export const GitHubIconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;
  border-radius: 50%;

  background: rgba(18, 19, 20, 0.6);
  border: 1px solid rgba(201, 184, 138, 0.35);

  color: rgba(244, 242, 237, 0.9);

  transition: all 0.35s ease;

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.25s ease;
  }

  &:hover {
    background: rgba(201, 184, 138, 0.22);
    box-shadow: 0 0 28px rgba(201, 184, 138, 0.25);
    transform: translateY(-2px);
    color: #f4f2ed;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;
