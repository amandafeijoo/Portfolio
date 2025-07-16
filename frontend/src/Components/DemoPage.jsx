import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectContext } from "../Context/ProjectContext";
import { detailedDescriptions } from "../data/projectDetails";
import {
  Container,
  AnimatedLetter,
  StyledText,
  StyledVideo,
  DescriptionContainer,
} from "./styles/DemoPage.styles"; 
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LazyLoad from "react-lazyload";

const DemoPage = () => {
  const { projectId } = useParams();
  const { projectList } = useContext(ProjectContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectList.find((p) => p.title === projectId);

  if (!project) {
    return <div>Demo not found</div>;
  }

  return (
    <Container>
      <StyledText>
        <AnimatedLetter>{project.title.charAt(0)}</AnimatedLetter>
        {project.title.slice(1)}
      </StyledText>

      <LazyLoad height={200} offset={100}>
        <StyledVideo controls>
          <source src={project.demoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      </LazyLoad>

      <DescriptionContainer
        dangerouslySetInnerHTML={{
          __html: `<p>${project.comment}</p><p>Technologies: ${project.technologies}</p><hr style="border: 1px solid #d8bfd8;" />${detailedDescriptions[project.title]}`,
        }}
      />

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Button
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: "'Source Code Pro', monospace",
            padding: "12px 22px",
            backgroundColor: "rgba(200, 162, 200, 0.3)",
            borderRadius: "12px",
            color: "#a080a0",
            display: "flex",
            textDecoration: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(200, 162, 200, 0.5)",
              color: "#d8bfd8",
            },
            "& svg": {
              color: "white",
              marginRight: "8px",
            },
          }}
        >
          <GitHubIcon />
          View on GitHub
        </Button>
      </div>
    </Container>
  );
};

export default DemoPage;

