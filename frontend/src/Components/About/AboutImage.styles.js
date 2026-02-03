import styled from "styled-components";

export const ProfileImage = styled.img`
  /* 📐 TAMAÑO FLUIDO */
  width: clamp(220px, 38vw, 420px);
  height: clamp(220px, 38vw, 420px);

  border-radius: 50%;
  margin: 20px auto;
  display: block;

  position: relative;
  z-index: 1;

  border: 1px solid rgba(201, 184, 138, 0.45);

  box-shadow: 0 0 25px rgba(201, 184, 138, 0.35),
    0 0 70px rgba(201, 184, 138, 0.15), 0 0 120px rgba(201, 184, 138, 0.08);

  transition: transform 0.45s ease, box-shadow 0.45s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 35px rgba(201, 184, 138, 0.45),
      0 0 90px rgba(201, 184, 138, 0.22), 0 0 140px rgba(201, 184, 138, 0.12);
  }

  /* 📱 MOBILE FINO */
  @media (max-width: 520px) {
    margin-top: 12px;
    margin-bottom: 26px;
  }
`;
