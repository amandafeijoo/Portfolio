import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

import {
  SingleProjectContainer,
  ProjectVideo,
  ProjectTitle,
  ProjectComment,
  ProjectTechnologies,
  WaveBackground,
  actionButtonStyles,
} from "./styles/SingleProjectCard.styles";

const SingleProjectCard = ({ project, inView = true }) => {
  return (
    <SingleProjectContainer inView={inView}>
      {/* WAVE BACKGROUND */}
      <WaveBackground
        fill="rgba(245, 244, 242, 0.35)"
        paused={false}
        options={{
          height: 12,
          amplitude: 14,
          speed: 0.12,
          points: 3,
        }}
      />

      {/* VIDEO */}
      <ProjectVideo autoPlay muted loop playsInline>
        <source src={project.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </ProjectVideo>

      {/* TITLE */}
      <ProjectTitle>{project.title}</ProjectTitle>

      {/* DESCRIPTION / COMMENT */}
      <ProjectComment>{project.comment}</ProjectComment>

      {/* TECHNOLOGIES */}
      <ProjectTechnologies>{project.technologies}</ProjectTechnologies>

      {/* ACTIONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          marginTop: "28px",
          flexWrap: "wrap",
        }}
      >
        {/* GITHUB */}
        <Button
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={actionButtonStyles}
        >
          <GitHubIcon sx={{ mr: 1, fontSize: "1.05rem", opacity: 0.85 }} />
          GitHub
        </Button>

        {/* WEBSITE o DEMO */}
        {project.web ? (
          <Button
            href={project.web}
            target="_blank"
            rel="noopener noreferrer"
            sx={actionButtonStyles}
          >
            <LinkIcon sx={{ mr: 1, fontSize: "1.05rem", opacity: 0.85 }} />
            Website
          </Button>
        ) : (
          <Button
            onClick={(event) => handleDemoClick(event, project.title)}
            sx={actionButtonStyles}
          >
            <LinkIcon sx={{ mr: 1, fontSize: "1.05rem", opacity: 0.85 }} />
            View Demo
          </Button>
        )}
      </div>
    </SingleProjectContainer>
  );
};

export default SingleProjectCard;
