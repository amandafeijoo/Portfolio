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

export default function LegalHero() {
  return (
    <HeroWrap>
      <ThreeContactBackground />

      <HeroInner>
        <Kicker>Legal Notice</Kicker>

        <Headline>
          Transparency and professional responsibility.
        </Headline>

        <Divider />

        <Subline>
          Clear information about the use, ownership and purpose of this website
          and its content.
        </Subline>
      </HeroInner>
    </HeroWrap>
  );
}
