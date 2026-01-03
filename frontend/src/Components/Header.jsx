import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import {
  HeaderWrapper,
  HeaderInner,
  Left,
  Logo,
  Center,
  MenuLink,
  Right,
  ActionButton,
  Burger,
  MobileMenu,
  MobileLinks,
  MobileSocials,
  StickySocials,
  StickyIcon,
} from "./styles/Header.styles";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const mobileLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Process", to: "/process" },
    { label: "Work", to: "/projects" },
    { label: "About", to: "/aboutme" },
    { label: "Contact", to: "/contactpage" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <HeaderWrapper>
        <HeaderInner>
          <Left>
            <Logo
              src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767482033/webcode-brushes_1_pcvyz9.png"
              alt="Webcode Art Logo"
              onClick={() => {
                setOpen(false);
                window.location.href = "/";
              }}
            />
          </Left>

          {/* ===== DESKTOP MENU ===== */}
          <Center>
            <MenuLink as={NavLink} to="/">HOME</MenuLink>
            <MenuLink as={NavLink} to="/services">SERVICES</MenuLink>
            <MenuLink as={NavLink} to="/process">PROCESS</MenuLink>
            <MenuLink as={NavLink} to="/projects">WORK</MenuLink>
            <MenuLink as={NavLink} to="/aboutme">ABOUT</MenuLink>
            <MenuLink as={NavLink} to="/contactpage">CONTACT</MenuLink>
          </Center>

          <Right>
            <ActionButton>LET’S TALK</ActionButton>

            {/* ===== BURGER MOBILE ===== */}
            <Burger onClick={() => setOpen((prev) => !prev)}>
              <span />
              <span />
              <span />
            </Burger>
          </Right>
        </HeaderInner>
      </HeaderWrapper>

      {/* ================= MOBILE MENU ================= */}
      <MobileMenu open={open}>
        <MobileLinks>
          {mobileLinks.map((item) => (
            <motion.div
              key={item.label}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.12 }}
            >
              <NavLink to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </MobileLinks>

        {/* ===== SOCIALS MOBILE ===== */}
        <MobileSocials>
          <a href="https://github.com/amandafeijoo" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/amanda-flores-feijoo-93956a156" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/webcode.art" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/amanda.f.feijoo" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </MobileSocials>
      </MobileMenu>

      {/* ================= DESKTOP SOCIALS ================= */}
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

