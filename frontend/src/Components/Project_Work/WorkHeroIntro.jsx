import React from "react";
import ThreeWorkGridBackground from "./ThreeWorkParticlesBackground";
import {
  HeroWrap,
  HeroInner,
  Kicker,
  Headline,
  Subline,
  Divider,
} from "./WorkHeroIntro.styles";
export default function WorkHeroIntro() {
  return (
    <HeroWrap>
      <ThreeWorkGridBackground />

      <HeroInner>
        <Kicker>Selected Work</Kicker>

        <Headline>
          Projects built with <span className="highlight">purpose</span>,
          <br />
          clarity and care.
        </Headline>

        <Divider />

        <Subline>
          A curated selection of real-world platforms and crafted demos —
          designed, developed and shipped with intention.
        </Subline>
      </HeroInner>
    </HeroWrap>
  );
}
