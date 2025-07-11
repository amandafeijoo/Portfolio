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
import { keyframes } from "@mui/system";
import styled from "styled-components";

const borderAnimation = keyframes`
  0% { border-color: #7799ff; }
  25% { border-color: #ff7799; }
  50% { border-color: #99ff77; }
  75% { border-color: #ff99ff; }
  100% { border-color: #7799ff; }
`;

const ProjectVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border: 3px solid #99aaff;
  object-fit: cover;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto 20px;
  }

  @media (max-width: 480px) {
    width: 95%;
    margin: 0 auto 15px;
    margin-top: 10px;
  }
`;

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
    <Card
      sx={{
        maxWidth: 450,
        height: "100%",
        margin: {
          xs: "20px auto",
          sm: "40px auto",
          md: "60px auto",
        },
        fontFamily: "'Source Code Pro', monospace",
        backgroundColor: "rgba(30, 58, 138, 0.12)",
        border: "2px solid rgba(200, 162, 200, 0.5)",
        borderRadius: "16px",
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s ease",
        overflow: "hidden",
        "&:hover": {
          transform: "scale(1.05)",
        },
        "@media (max-width: 480px)": {
          "&:hover": {
            transform: "none",
          },
        },
      }}
    >
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
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontFamily: "'Source Code Pro', monospace",
              textAlign: "center",
              color: "#6A0DAD",
              marginTop: "-40px",
              borderBottom: "2px solid",
              animation: `${borderAnimation} 5s infinite`,
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
                color: "#333",
                marginBottom: "10px",
                whiteSpace: "pre-line",
              }}
            >
              {subtitle}
            </Typography>
          )}

          {comment && (
            <Typography
              variant="body2"
              component="div"
              sx={{
                color: "#333",
                backgroundColor: "rgba(30, 58, 138, 0.12)",
                marginBottom: "10px",
                fontStyle: "italic",
                whiteSpace: "pre-line",
              }}
            >
              {comment}
            </Typography>
          )}

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "'Source Code Pro', monospace",
              textAlign: "justify",
              border: "1px solid rgba(200, 162, 200, 0.5)",
              borderRadius: "10px",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
              padding: "10px",
            }}
          >
            {description}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginTop: "20px",
              fontFamily: "'Source Code Pro', monospace",
              fontWeight: "bold",
              whiteSpace: "pre-line",
            }}
          >
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
            sx={{
              fontFamily: "'Source Code Pro', monospace",
              padding: "12px 22px",
              backgroundColor: "rgba(200, 162, 200, 0.5)",
              borderRadius: "12px",
              color: "#d8bfd8",
              display: "flex",
              textDecoration: "none",
              boxSizing: "border-box",
              transition:
                "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(200, 162, 200, 0.3)",
              },
              "& svg": {
                color: "white",
                marginRight: "8px",
              },
            }}
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
            sx={{
              fontFamily: "'Source Code Pro', monospace",
              padding: "12px 22px",
              backgroundColor: "rgba(200, 162, 200, 0.5)",
              borderRadius: "12px",
              color: "#d8bfd8",
              display: "flex",
              textDecoration: "none",
              boxSizing: "border-box",
              transition:
                "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(200, 162, 200, 0.3)",
              },
              "& svg": {
                color: "white",
                marginRight: "8px",
              },
            }}
          >
            <LinkIcon sx={{ marginRight: "8px" }} />
            Visit Website
          </ButtonBase>
        ) : (
          <ButtonBase
            component="a"
            href={demoLink}
            onClick={handleDemoClick}
            sx={{
              fontFamily: "'Source Code Pro', monospace",
              padding: "12px 22px",
              backgroundColor: "rgba(200, 162, 200, 0.5)",
              borderRadius: "12px",
              color: "#d8bfd8",
              display: "flex",
              textDecoration: "none",
              boxSizing: "border-box",
              transition:
                "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(200, 162, 200, 0.3)",
              },
              "& svg": {
                color: "white",
                marginRight: "8px",
              },
            }}
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
