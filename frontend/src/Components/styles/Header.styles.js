import styled from "styled-components";

export const TopBar = styled.div`
  background-color: rgb(119, 102, 119);
  height: 90px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    height: 120px;
    margin-top: 6px;
    cursor: pointer;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: rgb(241, 167, 179);
  position: fixed;
  top: 89px;
  width: 100%;
  height: 60px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const StyledNavLink = styled.nav`
  text-decoration: none;
  color: rgb(38, 31, 38);
  margin: 0 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
  font-family: "Source Code Pro", monospace;

  &:hover {
    color: #ffffff;
  }
`;

export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
`;

export const StickySocials = styled.div`
  position: fixed;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 999;

  @media (max-width: 768px) {
    right: 6px;
    gap: 10px;
  }
`;

export const StickyIcon = styled.a`
  font-size: 28px;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  transition: transform 0.2s;
  font-family: "Source Code Pro", monospace;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    padding: 6px;
  }
`;
