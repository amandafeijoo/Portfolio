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
} from "./styles/SingleProjectCard.styles";

const SingleProjectCard = ({ project, inView = true }) => {
  return (
    <SingleProjectContainer inView={inView}>
      {/* WAVE BACKGROUND */}
      <WaveBackground
        fill="rgba(200,164,106,0.35)"
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
          sx={{
            fontFamily: "'Source Code Pro', monospace",
            px: 3,
            py: 1.4,
            borderRadius: "999px",
            border: "1px solid rgba(200,164,106,0.45)",
            color: "#c8a46a",
            letterSpacing: "0.14em",
            fontSize: "0.7rem",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "rgba(200,164,106,0.12)",
              boxShadow: "0 0 22px rgba(200,164,106,0.25)",
            },
          }}
        >
          <GitHubIcon sx={{ mr: 1, fontSize: "1.05rem" }} />
          GITHUB
        </Button>

        {/* WEBSITE */}
        {project.web && (
          <Button
            href={project.web}
            target="_blank"
            sx={{
              fontFamily: "'Source Code Pro', monospace",
              px: 3,
              py: 1.4,
              borderRadius: "999px",
              border: "1px solid rgba(200,164,106,0.45)",
              color: "#c8a46a",
              letterSpacing: "0.14em",
              fontSize: "0.7rem",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(200,164,106,0.12)",
                boxShadow: "0 0 22px rgba(200,164,106,0.25)",
              },
            }}
          >
            <LinkIcon sx={{ mr: 1, fontSize: "1.05rem" }} />
            WEBSITE
          </Button>
        )}
      </div>
    </SingleProjectContainer>
  );
};

export default SingleProjectCard;
