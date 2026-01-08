import WorkFlowLines from "./WorkFlowLines";
import {
  Section,
  CanvasWrapper,
  Content,
  Title,
  Subtitle,
} from "./styles/Work.styles";

export default function WorkSection() {
  return (
    <Section id="work">
      {/* Fondo animado */}
      <CanvasWrapper>
        <WorkFlowLines height={600} />
      </CanvasWrapper>

      {/* Contenido */}
      <Content>
        <Title>Work</Title>
        <Subtitle>
          Selected projects & crafted digital experiences
        </Subtitle>
      </Content>
    </Section>
  );
}


