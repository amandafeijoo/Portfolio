import React from "react";
import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  ButtonBase,
  CardActions,
  CardActionArea,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import {
  cardStyles,
  buttonStyles,
  techTypography,
  descTypography,
  subtitleTypography,
  commentTypography,
  titleTypography,
  ProjectVideo,
} from "./styles/ProjectCard.styles";

const ProjectCard = ({
  videoSrc,
  posterSrc,
  title,
  comment,
  subtitle,
  description,
  technologies,
  githubLink,
  demoLink,
  web,
}) => {
  const navigate = useNavigate();

  const handleDemoClick = (event) => {
    event.preventDefault();
    navigate(`/demopage/${title}`);
  };

  return (
    <Card sx={cardStyles}>
      <CardActionArea>
        <LazyLoad height={200} offset={100} once>
          <ProjectVideo
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </ProjectVideo>
        </LazyLoad>
        <CardContent>
          <Typography gutterBottom variant="h6" sx={titleTypography}>
            {title}
          </Typography>

          {subtitle && (
            <Typography variant="subtitle1" sx={subtitleTypography}>
              {subtitle}
            </Typography>
          )}

          {comment && (
            <Typography variant="body2" sx={commentTypography}>
              {comment}
            </Typography>
          )}

          <Typography variant="body2" sx={descTypography}>
            {description}
          </Typography>

          <Typography variant="body2" sx={techTypography}>
            <strong>Tech Stack:</strong> {technologies}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: "center" }}>
        {githubLink && (
          <ButtonBase
            component="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={buttonStyles}
          >
            <GitHubIcon />
            View on GitHub
          </ButtonBase>
        )}

        {web ? (
          <ButtonBase
            component="a"
            href={web}
            target="_blank"
            rel="noopener noreferrer"
            sx={buttonStyles}
          >
            <LinkIcon sx={{ marginRight: "8px" }} />
            Visit Website
          </ButtonBase>
        ) : (
          <ButtonBase
            component="a"
            href={demoLink}
            onClick={handleDemoClick}
            sx={buttonStyles}
          >
            <LinkIcon sx={{ marginRight: "8px" }} />
            View Demo
          </ButtonBase>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

