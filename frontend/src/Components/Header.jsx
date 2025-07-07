import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

// 🔹 Barra superior con el logo centrado
const TopBar = styled.div`
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
  }
`;

// 🔹 Header con navegación
const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: rgb(241, 167, 179);
  position: fixed;
  top: 89px; /* debajo de TopBar */
  width: 100%;
  height: 60px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: rgb(38, 31, 38);
  margin: 0 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;

  &:hover {
    color: #ffffff;
  }
`;

const CenterSection = styled.div`
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

// 🔹 Redes sociales sticky a la derecha
const StickySocials = styled.div`
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
  /* background-color: #000; */
  padding: 10px;
  border-radius: 50%;
  transition: transform 0.2s;

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

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopBar>
        <img
          src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1748808205/ChatGPT_Image_1_jun_2025_22_03_11_zpymjm.png"
          alt="Webcode Art Logo"
        />
      </TopBar>

      <HeaderContainer>
        <CenterSection>
          <StyledNavLink to="/" onClick={() => navigate("/")}>
            HOME
          </StyledNavLink>
          <StyledNavLink to="/AboutMe" onClick={() => navigate("/AboutMe")}>
            ABOUT
          </StyledNavLink>
          <StyledNavLink to="/projects" onClick={() => navigate("/projects")}>
            PROJECTS
          </StyledNavLink>
          <StyledNavLink
            to="/contactform"
            onClick={() => navigate("/contactform")}
          >
            CONTACT
          </StyledNavLink>
        </CenterSection>
      </HeaderContainer>

      {/* 🔹 Redes sociales fijas al lado derecho */}
      <StickySocials>
        <StickyIcon
          href="https://github.com/amandafeijoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </StickyIcon>
        <StickyIcon
          href="https://linkedin.com/in/amanda-flores-feijoo-93956a156"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </StickyIcon>
        <StickyIcon
          href="https://instagram.com/webcode.art"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </StickyIcon>
        <StickyIcon
          href="https://www.facebook.com/amanda.f.feijoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </StickyIcon>
      </StickySocials>
    </>
  );
};

export default Header;
