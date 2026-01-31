import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  font-size: 1em;

  @media (max-width: 768px) {
    width: 250px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 60px;
    font-size: 0.4em;
  }

  @media (min-width: 768px) and (max-width: 834px) and (orientation: portrait) {
    width: 450px;
    height: 120px;
    font-size: 1.2em;
  }

  @media (min-width: 1025px) and (max-width: 1366px) {
    width: 500px;
    height: 150px;
    font-size: 1.7em;
    margin-top: -300px;
  }
`;

export const DesktopMessageContainer = styled(MessageContainer)`
  @media (max-width: 480px) {
    display: none;
  }
`;

export const MobileMessageContainer = styled(MessageContainer)`
  display: none;

  @media (max-width: 480px) {
    display: flex;
  }
`;
