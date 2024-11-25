import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaTimes } from "react-icons/fa";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ff99aa;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  margin: 0 10px;

  &:hover {
    color: #ffffff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 30px;
`;

const SocialLink = styled.a`
  color: #000000;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    color: #ffffff;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LeftSection>
        <StyledNavLink to="/" onClick={() => navigate("/")}>
          AMANDA FLORES
        </StyledNavLink>
      </LeftSection>
      <CenterSection>
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
      <SocialLinks>
        <SocialLink href="https://github.com/amandafeijoo">
          <FaGithub size={34} />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/amanda-flores-feijoo-93956a156">
          <FaLinkedin size={34} />
        </SocialLink>
        <SocialLink href="https://instagram.com/mandyfeijoo">
          <FaInstagram size={34} />
        </SocialLink>
        <SocialLink href="https://twitter.com/yourusername">
          <FaTimes size={34} />
        </SocialLink>
      </SocialLinks>
    </HeaderContainer>
  );
};

export default Header;
