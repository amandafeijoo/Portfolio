import styled from "styled-components";

export const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0px 4px 20px rgba(128, 128, 128, 0.5),
              0px 4px 20px rgba(255, 255, 255, 0.5),
              0px 4px 20px rgba(153, 102, 255, 0.5);
  transition: all 0.5s;
  border: 2px solid #99aaff;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1025px) and (max-width: 1366px) {
    width: 550px;
    height: 550px;
    margin-bottom: 80px;
  }
`;
