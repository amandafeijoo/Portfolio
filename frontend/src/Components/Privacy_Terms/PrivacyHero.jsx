import React from "react";
import ThreeContactBackground from "../Contact/ThreeContactBackground";
import {
  HeroWrap,
  HeroInner,
  Kicker,
  Headline,
  Divider,
  Subline,
} from "../Contact/Contact.styles";

export default function PrivacyHero() {
  return (
    <HeroWrap>
      <ThreeContactBackground />

      <HeroInner>
        <Kicker>Legal</Kicker>
        <Headline>Your privacy matters.</Headline>
        <Divider />
        <Subline>
          Transparency, respect, and care in how your personal data is handled.
        </Subline>
      </HeroInner>
    </HeroWrap>
  );
}
