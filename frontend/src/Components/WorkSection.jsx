import { useRef } from "react";
import { useScroll } from "framer-motion";

import WorkFlowLines from "./WorkFlowLines";
import {
  Section,
  CanvasWrapper,
  Content,
  Title,
  Subtitle,
} from "./styles/Work.styles";

export default function WorkSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <Section id="work" ref={sectionRef}>
      <CanvasWrapper>
        <WorkFlowLines height={800} progress={scrollYProgress} />
      </CanvasWrapper>

      <Content>
        <Title>Work</Title>
        <Subtitle>Selected projects & crafted digital experiences</Subtitle>
      </Content>
    </Section>
  );
}
