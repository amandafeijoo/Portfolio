import styled from "styled-components";

export const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
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

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1025px) and (max-width: 1366px) {
    width: 420px;
    height: 420px;
    margin-bottom: 80px;
  }
`;
