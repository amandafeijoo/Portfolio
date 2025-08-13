import React, { useState, useEffect } from "react";
import {
    LargeSection,
    ContactSection,
  } from "./styles/ContactSections.styles";
import { AnimatedLetter, StyledText } from "./styles/ContactHeader.styles";
import { AnimatedTypography } from "./styles/ContactTypography.styles";
import ContactForm from "./ContactForm";
import Circles from "./Circles";
import { ContactFormContainer } from "./styles/ContactForm.styles";
import ContactInfoItem from "./ContactInfoItem";

const ContactPage = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScale(1 + scrollPosition / 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          section.style.opacity = 1;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: "220vh"}}>
      <LargeSection>
        <AnimatedTypography scale={scale} variant="h1" component="h1" sx={{ fontFamily: "'Source Code Pro', monospace", fontSize: "1.7rem", marginTop: "-200px", padding: "20px" }}>
          <StyledText>
            <AnimatedLetter>C</AnimatedLetter>ontact
          </StyledText>
        </AnimatedTypography>
      </LargeSection>

      {/* Info Items */}
      <ContactInfoItem
        label="Email"
        link="mailto:amandaflores@webcode-art.com"
        display="amandaflores@webcode-art.com"
      />
      <ContactInfoItem
        label="LinkedIn"
        link="https://www.linkedin.com/in/amanda-flores-feijoo-93956a156"
        display="Amanda Flores Feijoo"
      />
      <ContactInfoItem
        label="GitHub"
        link="https://github.com/amandafeijoo"
        display="amandafeijoo"
      />

      <Circles />

      <ContactSection>
        <ContactFormContainer>
          <ContactForm />
        </ContactFormContainer>
      </ContactSection>
    </div>
  );
};

export default ContactPage;

  