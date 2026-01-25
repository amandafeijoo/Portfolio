import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectContext } from "../Context/ProjectContext";
import { detailedDescriptions } from "../data/projectDetails";
import {
  CaseHeroWrap,
  CaseHeroInner,
  Container,
  CaseKicker,
  CaseTitle,
  CaseButton,
  CaseSubtitle,
  CaseDivider,
  CaseVideo,
  CaseContent,
  CaseMeta,
  CaseActions,
  CaseGhostButton,
  GitHubIconButton,
} from "./styles/DemoPage.styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LazyLoad from "react-lazyload";

export default function DemoPage() {
  const { projectId } = useParams();
  const { projectList } = useContext(ProjectContext);

  useEffect(() => window.scrollTo(0, 0), []);

  const project = projectList.find((p) => p.title === projectId);
  if (!project) return null;

  return (
    <>
      {/* =========================
         HERO (HALO + TITLES)
      ========================= */}
      <CaseHeroWrap>
        <CaseHeroInner>
          <CaseKicker>
            {project.web ? "Live Project" : "Demo Project"}
          </CaseKicker>

          <CaseTitle>{project.title}</CaseTitle>

          <CaseSubtitle>{project.comment}</CaseSubtitle>

          <CaseDivider />
        </CaseHeroInner>
      </CaseHeroWrap>

      {/* =========================
         MAIN CONTENT
      ========================= */}
      <Container>
        <LazyLoad height={300} offset={150}>
          <CaseVideo controls>
            <source src={project.demoLink} type="video/mp4" />
          </CaseVideo>
        </LazyLoad>

        <CaseContent
          dangerouslySetInnerHTML={{
            __html: detailedDescriptions[project.title],
          }}
        />

        <CaseMeta>
          <strong>Technologies</strong>
          <span>{project.technologies}</span>
        </CaseMeta>

        <CaseActions>
          {project.githubLink && (
            <GitHubIconButton
              href={project.githubLink}
              target="_blank"
              aria-label="View on GitHub"
            >
              <GitHubIcon />
            </GitHubIconButton>
          )}

          {project.web && (
            <CaseGhostButton href={project.web} target="_blank">
              Visit Website
            </CaseGhostButton>
          )}
        </CaseActions>
      </Container>
    </>
  );
}
