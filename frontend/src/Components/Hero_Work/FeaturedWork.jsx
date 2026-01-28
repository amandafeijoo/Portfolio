import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { ProjectContext } from "../../Context/ProjectContext";

import WorkMedia from "./WorkMedia";
import WorkContent from "./WorkContent";
import WorkProgress from "./WorkProgress";

export default function FeaturedWork() {
  const { projectList } = useContext(ProjectContext);
  const projects = projectList.slice(0, 4);

  const [index, setIndex] = useState(0);
  const project = projects[index];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        py: { xs: 14, md: 22 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          position: "relative",
        }}
      >
        <WorkMedia video={project.videoSrc} />

        <WorkContent project={project} />

        <WorkProgress
          count={projects.length}
          active={index}
          onChange={setIndex}
        />
      </Box>
    </Box>
  );
}
