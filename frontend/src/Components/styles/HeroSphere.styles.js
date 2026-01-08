const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 820px;
  overflow: hidden;
`;

const TextOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  pointer-events: none;
`;

const MainName = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: clamp(3.2rem, 6vw, 5.2rem);
  letter-spacing: 0.08em;
  color: rgba(40, 32, 26, 0.85);
  margin-bottom: 18px;
`;

const Slogan = styled.p`
  font-family: "Source Code Pro", monospace;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  letter-spacing: 0.12em;
  color: rgba(40, 32, 26, 0.65);
`;

const ChangingWord = styled.span`
  display: inline-block;
  margin-left: 6px;
  color: rgba(201, 169, 106, 0.95);

  animation: fadeUp 0.6s ease both;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
