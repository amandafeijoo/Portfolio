import React from "react";
import {
  Section,
  SectionTitle,
  SectionLead,
  FormCard,
  FormCardTopGlow,
} from "./Contact.styles";

export default function ContactFormSection({ children }) {
  return (
    <Section>
      <SectionTitle>Tell me about your idea</SectionTitle>
      <SectionLead>
        Share a few details and I’ll come back with questions (if needed),
        timeline and a clear next step.
      </SectionLead>

      <FormCard>{children}</FormCard>
    </Section>
  );
}
