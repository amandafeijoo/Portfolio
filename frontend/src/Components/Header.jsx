import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: #ff99aa;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  margin: 0 5px;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    color: #ffffff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 12px;
    justify-content: center;
    width: 100%;
  }
`;

const SocialLink = styled.a`
  color: #000000;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    color: #ffffff;
  }

  svg {
    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
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
        <SocialLink href="https://www.facebook.com/amanda.f.feijoo">
          <FaFacebook size={34} />
        </SocialLink>
      </SocialLinks>
    </HeaderContainer>
  );
};

export default Header;
