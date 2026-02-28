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
        <Headline>
          Let’s build something <span className="highlight">together</span>.
        </Headline>
        <Divider />

        {/* 🟣 TEXTO */}
        <Subline>
          Starting a new project or refining an idea? Share a few details and
          I’ll guide you through next steps, availability and a realistic
          timeline.
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
