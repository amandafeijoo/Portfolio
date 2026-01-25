import styled from "styled-components";

const variantHeights = {
  hero: "520px",
  featured: "420px",
  concept: "360px",
};

export const CardWrap = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  cursor: pointer;

  background: rgba(18, 19, 20, 0.72);
  border: 1px solid rgba(201, 184, 138, 0.22);

  min-height: ${({ $variant }) => variantHeights[$variant] || "420px"};
  grid-column: ${({ $variant }) =>
    $variant === "hero" || $variant === "concept" ? "span 2" : "span 1"};

  transition: transform 0.45s ease, border-color 0.45s ease,
    box-shadow 0.45s ease;

  &::before {
    content: "";
    position: absolute;
    inset: -60px;
    background: radial-gradient(
      60% 40% at 50% 30%,
      rgba(201, 184, 138, 0.14),
      transparent 70%
    );
    filter: blur(40px);
    opacity: 0.9;
    z-index: 0;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(201, 184, 138, 0.55);
    box-shadow: 0 0 30px rgba(201, 184, 138, 0.22),
      0 0 90px rgba(201, 184, 138, 0.1);
  }

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

export const MediaWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transform: scale(1.02);
  transition: transform 0.55s ease, filter 0.55s ease;
  filter: contrast(1.05) saturate(0.95) brightness(0.95);

  ${CardWrap}:hover & {
    transform: scale(1.05);
    filter: contrast(1.08) saturate(1) brightness(1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 26px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.28) 42%,
    rgba(0, 0, 0, 0.72) 100%
  );
`;

export const Badge = styled.div`
  align-self: flex-start;
  margin-bottom: 10px;

  font-family: "Source Code Pro", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;

  color: ${({ $type }) =>
    $type === "real" ? "#F4F2ED" : "rgba(201,184,138,0.95)"};
  background: rgba(18, 19, 20, 0.62);
  border: 1px solid rgba(201, 184, 138, 0.25);
  padding: 8px 10px;
  border-radius: 999px;

  box-shadow: 0 0 16px rgba(201, 184, 138, 0.12);
`;

export const Title = styled.div`
  color: #f4f2ed;
  font-size: clamp(1.4rem, 2.6vw, 2.2rem);
  line-height: 1.1;
  margin-bottom: 10px;
  text-shadow: 0 0 24px rgba(201, 184, 138, 0.14);
`;

export const Tagline = styled.div`
  color: rgba(244, 242, 237, 0.8);
  max-width: 60ch;
  font-size: 1rem;
  line-height: 1.45;
`;

export const ActionsRow = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  border-radius: 14px;
  padding: 12px 16px;
  border: 1px solid rgba(201, 184, 138, 0.45);

  background: rgba(201, 184, 138, 0.18);
  color: #f4f2ed;

  font-family: "Source Code Pro", monospace;
  letter-spacing: 0.04em;
  cursor: pointer;

  transition: transform 0.35s ease, box-shadow 0.35s ease,
    background-color 0.35s ease;

  &:hover {
    transform: translateY(-2px);
    color: #f4f2ed;
    border: 1px solid rgba(201, 184, 138, 0.45);

    background: rgba(201, 184, 138, 0.26);
    box-shadow: 0 0 28px rgba(201, 184, 138, 0.22);
  }
`;

export const GhostBtn = styled(ActionBtn)`
  background: transparent;
  color: rgba(201, 184, 138, 0.95);
  border: 1px solid rgba(201, 184, 138, 0.32);
  border: 1px solid rgba(201, 184, 138, 0.45);

  &:hover {
    background: rgba(18, 19, 20, 0.55);
    color: rgba(201, 184, 138, 0.95);
  }
`;
