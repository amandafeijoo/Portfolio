import ThreeProcessBackground from "./ThreeProcessBackground";
import {
  HeroWrap,
  HeroInner,
  Kicker,
  Headline,
  Divider,
  Subline,
  ThreeWrapper,
} from "./ProcessHero.styles";

export default function ProcessHero() {
  return (
    <HeroWrap>
      <ThreeWrapper>
    <ThreeProcessBackground />
  </ThreeWrapper>

      <HeroInner>
        <Kicker>Process</Kicker>

        <Headline>How I work</Headline>

        <Divider />

        <Subline>
          A clear and thoughtful process — from first idea to final launch.
        </Subline>
      </HeroInner>
    </HeroWrap>
  );
}
