import React, { useState, useContext } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ProjectContext } from "../../Context/ProjectContext";
import SingleProjectCard from "./SingleProjectCard";

const WorkFolders = () => {
  const { projectList } = useContext(ProjectContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  /* ======================
       MOBILE → STACK NORMAL
    ====================== */
  if (!isDesktop) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6, mb: 12 }}>
        {projectList.map((project) => (
          <SingleProjectCard key={project.id} project={project} />
        ))}
      </Box>
    );
  }

  /* ======================
       DESKTOP → FOLDERS
    ====================== */
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "95vh",
        gap: "18px",
        overflow: "hidden",
        mt: 4,
        mb: 20,
      }}
    >
      {projectList.map((project, index) => {
        const isActive = index === activeIndex;

        return (
          <Box
            key={project.id}
            onClick={() => setActiveIndex(index)}
            sx={{
              flex: isActive ? 8 : 1,
              borderRadius: "42px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              backgroundColor: isActive
                ? "rgba(10,10,10,0.98)"
                : "rgba(245,235,220,0.96)",
              transition: "flex 0.9s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {/* NÚMERO */}
            {!isActive && (
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 48,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(4rem, 6vw, 7rem)",
                  fontWeight: 600,
                  color: "rgba(147, 121, 78, 0.65)",
                  pointerEvents: "none",
                }}
              >
                {index + 1}
              </Typography>
            )}

            {/* CONTENIDO */}
            {isActive && (
              <Box sx={{ p: 5, height: "100%", overflowY: "auto" }}>
                <SingleProjectCard project={project} />
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default WorkFolders;
