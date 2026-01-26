import React from "react";
import { Section, SectionTitle, SectionLead, FormCard } from "./Contact.styles";

export default function ContactFormSection({ children }) {
  return (
    <Section>
      {/* 🟣 TÍTULO DE ACCIÓN */}
      <SectionTitle>Tell me about your project</SectionTitle>

      {/* 🟣 TEXTO DE CONTEXTO */}
      <SectionLead>
        Share a few details about what you’re looking to build. I’ll get back to
        you with next steps, availability, and a clear plan.
      </SectionLead>

      <FormCard>{children}</FormCard>
    </Section>
  );
}
