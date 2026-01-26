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

        {/* 🟣 TÍTULO */}
        <Headline>Let’s build something together.</Headline>

        <Divider />

        {/* 🟣 TEXTO */}
        <Subline>
          Ready to start a project, or just exploring an idea? Tell me a bit
          about what you’re looking for and I’ll get back to you with next
          steps, availability, and an estimated timeline.
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
