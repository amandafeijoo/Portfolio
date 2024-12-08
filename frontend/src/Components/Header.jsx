import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

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

  @media (max-width: 480px) {
    padding: 5px; /* Móviles pequeños */
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 10px; /* Móviles */
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    padding: 15px; /* Tabletas */
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    padding: 20px; /* Pantallas pequeñas */
  }

  @media (min-width: 1201px) {
    padding: 25px; /* Pantallas grandes */
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  margin: 0 10px;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }

  @media (max-width: 1024px) {
    margin: 10px 0; /* Ajuste para tabletas */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 10px;
  }

  @media (max-width: 1024px) {
    margin-top: 15px; /* Ajuste para tabletas */
  }
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
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    width: 100%; /* Ajuste para tabletas */
  }
`;

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 100%; /* Ajuste para tabletas */
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
