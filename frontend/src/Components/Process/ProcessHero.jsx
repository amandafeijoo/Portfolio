import {
  HeroWrap,
  HeroInner,
  Kicker,
  Headline,
  Subline,
  ThreeWrapper,
} from "./ProcessHero.styles";

import ProcessHeroBackground from "./ProcessHeroBackground";

export default function ProcessHero() {
  return (
    <HeroWrap>
      <ThreeWrapper>
        <ProcessHeroBackground />
      </ThreeWrapper>
      <HeroInner>
        <Kicker>Process</Kicker>
        <Headline>How I work</Headline>
        <Subline>
          A clear and thoughtful process — from first idea to final launch.
        </Subline>
      </HeroInner>
    </HeroWrap>
  );
}
