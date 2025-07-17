import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import {
  TopBar,
  HeaderContainer,
  StyledNavLink,
  CenterSection,
  StickySocials,
  StickyIcon,
} from "./styles/Header.styles";

const Header = () => {
  return (
    <>
      <TopBar>
        <img
          src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1748808205/ChatGPT_Image_1_jun_2025_22_03_11_zpymjm.png"
          alt="Webcode Art Logo"
          onClick={() => (window.location.href = "/")}
        />
      </TopBar>

      <HeaderContainer>
        <CenterSection>
          <StyledNavLink as={NavLink} to="/">HOME</StyledNavLink>
          <StyledNavLink as={NavLink} to="/AboutMe">ABOUT</StyledNavLink>
          <StyledNavLink as={NavLink} to="/projects">PROJECTS</StyledNavLink>
          <StyledNavLink as={NavLink} to="/contactpage">CONTACT</StyledNavLink>
        </CenterSection>
      </HeaderContainer>

      <StickySocials>
        <StickyIcon href="https://github.com/amandafeijoo" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </StickyIcon>
        <StickyIcon href="https://linkedin.com/in/amanda-flores-feijoo-93956a156" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </StickyIcon>
        <StickyIcon href="https://instagram.com/webcode.art" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </StickyIcon>
        <StickyIcon href="https://www.facebook.com/amanda.f.feijoo" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </StickyIcon>
      </StickySocials>
    </>
  );
};

export default Header;

