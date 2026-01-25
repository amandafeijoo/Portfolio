import React from "react";
import { useNavigate } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  CardWrap,
  MediaWrap,
  Video,
  Overlay,
  Badge,
  Title,
  Tagline,
  ActionsRow,
  ActionBtn,
  GhostBtn
} from "./styles/ProjectShowcaseCard.styles";

export default function ProjectShowcaseCard({ project, variant = "featured" }) {
  const navigate = useNavigate();

  const isLive = Boolean(project.web);
  const badgeText = isLive ? "LIVE PROJECT" : "DEMO PROJECT";

  const handlePrimary = (e) => {
    e.preventDefault();
    if (project.web) window.open(project.web, "_blank");
    else navigate(`/demopage/${project.title}`);
  };

  const handleSecondary = (e) => {
    e.preventDefault();
    if (project.githubLink) window.open(project.githubLink, "_blank");
  };

  return (
    <CardWrap $variant={variant} onClick={handlePrimary} role="button" tabIndex={0}>
      <MediaWrap>
        <Video autoPlay muted loop playsInline preload="metadata" poster={project.posterSrc}>
          <source src={project.videoSrc} type="video/mp4" />
        </Video>
      </MediaWrap>

      <Overlay>
        <Badge $type={project.type}>{badgeText}</Badge>
        <Title>{project.title}</Title>
        <Tagline>{project.tagline || project.subtitle}</Tagline>

        <ActionsRow>
          <ActionBtn onClick={handlePrimary}>
            {isLive ? <>Visit Website <LaunchIcon /></> : <>View Case <ArrowForwardIcon /></>}
          </ActionBtn>

          {project.githubLink && (
            <GhostBtn onClick={handleSecondary}>
              GitHub <LaunchIcon />
            </GhostBtn>
          )}
        </ActionsRow>
      </Overlay>
    </CardWrap>
  );
}
