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
        background: {
          xs: `
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.88) 0%,
      rgba(0, 0, 0, 0.95) 55%,
      rgba(0, 0, 0, 1) 100%
    )
  `,
          md: `
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.8) 60%,
      rgba(0, 0, 0, 1) 100%
    )
  `,
        },

        pt: { xs: 18, md: 18 },
        pb: { xs: 16, md: 20 },
      }}
    >
      {/* GRID */}
      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",

          px: { xs: 0, md: 3 },
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
          },

          gap: { xs: 5, md: 5 },
        }}
      >
        {projectList.map((project, index) => {
          const isWide = index === 0 || index === projectList.length - 1;

          return (
            <Box
              key={project.id}
              sx={{
                gridColumn: {
                  xs: "span 1",
                  md: isWide ? "span 2" : "span 1",
                },

                height: isWide ? { xs: 220, md: 340 } : { xs: 220, md: 280 },

                width: "100%",
                boxSizing: "border-box",
                overflow: "hidden",

                borderRadius: {
                  xs: 4,
                  md: 4,
                },
              }}
            >
              <ProjectContent project={project} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
