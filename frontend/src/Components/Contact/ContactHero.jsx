import React from "react";
import ThreeContactBackground from "./ThreeContactBackground";
import {
  HeroWrap,
  HeroInner,
  Kicker,
  Headline,
  Divider,
  Subline,
  HeroRow,
  HeroPill,
} from "./Contact.styles";

export default function ContactHero({ compact = false }) {
  return (
    <HeroWrap $compact={compact}>
      <ThreeContactBackground />
      <HeroInner>
        <Kicker>Contact</Kicker>
        <Headline>Let’s build something exceptional.</Headline>
        <Divider />
        <Subline>
          Tell me about your project. I usually reply within 24–48 hours with
          next steps and a clear plan.
        </Subline>

        <HeroRow>
          <HeroPill>Full-Stack • React + Django</HeroPill>
          <HeroPill>Design-driven • Performance-first</HeroPill>
          <HeroPill>Based in Norway • Remote worldwide</HeroPill>
        </HeroRow>
      </HeroInner>
    </HeroWrap>
  );
}
