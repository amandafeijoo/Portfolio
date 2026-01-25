// WorkHeroIntro.jsx
import React from "react";
import {
  HeroWrap,
  HeroInner,
  Kicker,
  Headline,
  Subline,
  Divider,
} from "./styles/WorkHeroIntro.styles";

export default function WorkHeroIntro() {
  return (
    <HeroWrap>
      <HeroInner>
        <Kicker>Selected Work</Kicker>

        <Headline>
          Projects built with purpose,
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
