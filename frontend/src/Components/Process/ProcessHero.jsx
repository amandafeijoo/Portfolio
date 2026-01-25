import ThreeProcessBackground from "./ThreeProcessBackground";
import {
  HeroWrap,
  HeroInner,
  Kicker,
  Headline,
  Divider,
  Subline,
} from "./ProcessHero.styles";

export default function ProcessHero() {
  return (
    <HeroWrap>
      <ThreeProcessBackground />

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
