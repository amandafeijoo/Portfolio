import { Box } from "@mui/material";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext";
import ProjectContent from "./ProjectContent";

export default function WorkProjectsLayer() {
  const { projectList } = useContext(ProjectContext);

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 20,
        overflowY: "auto", 
        overscrollBehavior: "contain",
        pointerEvents: "auto",
        background: `
  linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.35) 50%,
    rgba(0, 0, 0, 0.7) 100%
  )
`,

        pt: { xs: 14, md: 18 },
        pb: 20,
      }}
    >
      {/* GRID */}
      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",
          px: 3,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 4,
        }}
      >
        {projectList.map((project, index) => (
          <Box
            key={project.id}
            sx={{
              gridColumn:
                index === 0 || index === projectList.length - 1
                  ? "span 2" 
                  : "span 1",

              height:
                index === 0 || index === projectList.length - 1
                  ? { xs: 260, md: 340 }
                  : { xs: 240, md: 280 },
            }}
          >
            <ProjectContent project={project} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
