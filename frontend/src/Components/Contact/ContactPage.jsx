import React, { useEffect } from "react";
import ContactHero from "./ContactHero";
import ContactFormSection from "./ContactFormSection";
import ContactTrust from "./ContactTrust";
import { PageWrap, MainInner, BottomGlow } from "./Contact.styles";
import ContactForm from "../Contact/ContactForm";

export default function ContactPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <PageWrap>
      <ContactHero />

      <MainInner>
        <ContactFormSection>
          <ContactForm />
        </ContactFormSection>

        <ContactTrust />
      </MainInner>

      <BottomGlow />
    </PageWrap>
  );
}
