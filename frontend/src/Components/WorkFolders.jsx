import React, { useState, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ProjectContext } from "../Context/ProjectContext";
import SingleProjectCard from "./SingleProjectCard";

const WorkFolders = () => {
  const { projectList } = useContext(ProjectContext);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        height: "85vh",
        gap: "14px",
        overflow: "hidden",
      }}
    >
      {projectList.map((project, index) => {
        const isActive = index === activeIndex;

        return (
          <Box
            key={project.id}
            onClick={() => setActiveIndex(index)}
            sx={{
              flex: isActive ? 5 : 1,
              transition: "flex 0.75s cubic-bezier(0.4,0,0.2,1)",
              backgroundColor: isActive
                ? "#0f0f0f"
                : "rgba(240,226,214,0.96)",
              borderRadius: "28px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Número */}
            <Typography
              sx={{
                position: "absolute",
                bottom: 36,
                right: 32,
                fontSize: "7rem",
                fontFamily: "Playfair Display, serif",
                color: isActive
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.28)",
              }}
            >
              {index + 1}
            </Typography>

            {/* CONTENIDO SOLO SI ACTIVA */}
            {isActive && (
              <Box
                sx={{
                  p: { xs: 3, md: 6 },
                  height: "100%",
                  overflowY: "auto",
                }}
              >
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

