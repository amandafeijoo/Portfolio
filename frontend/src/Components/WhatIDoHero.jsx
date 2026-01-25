import React from "react";
import {
  HeroWrap,
  HeroInner,
  Kicker,
  Headline,
  Divider,
  Subline,
  Statement,
  SupportingText,
  ScrollHint,
} from "./styles/WhatIDoHero.styles";

export default function WhatIDoHero() {
  return (
    <HeroWrap>
      <HeroInner>
        <Kicker>What I Do</Kicker>

        <Headline>
          Websites designed
          <br />
          to work for your business.
        </Headline>

        <Divider />

        <Subline>
          I design and build complete websites from start to finish.
        </Subline>

        <Statement>
          From how your website looks, to how it works behind the scenes — and
          how it helps you attract the right clients.
        </Statement>

        <SupportingText>
          You don’t need to worry about the technical side.  
          I take care of it, so you can focus on your business.
        </SupportingText>

        <ScrollHint>
          <span>Scroll to explore</span>
          <span className="arrow">↓</span>
        </ScrollHint>
      </HeroInner>
    </HeroWrap>
  );
}
