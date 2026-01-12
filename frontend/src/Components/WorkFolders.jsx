import React, { useState, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ProjectContext } from "../Context/ProjectContext";
import SingleProjectCard from "./SingleProjectCard";
import { color, m } from "framer-motion";
import { MdChargingStation } from "react-icons/md";

const WorkFolders = () => {
  const { projectList } = useContext(ProjectContext);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        height: "95vh",
        with: "100%",
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
              flex: isActive ? 9 : 1,
              transition: "flex 0.75s cubic-bezier(0.4,0,0.2,1)",
              backgroundColor: isActive ? "rgba(239, 235, 235, 0.14) " : "rgba(240,226,214,0.96)",
              borderRadius: "28px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Número */}
            {!isActive && (
              <Typography
                sx={{
                  position: "absolute",
                  inset: 0,
                  color: "rgba(0, 0, 0, 0.14)",
                  display: "flex",
                  alignItems: "end",
                  mb: 9,
                  justifyContent: "center",

                  mixblendmode: "multiply",

                  fontSize: "4rem",
                  fontFamily: "Playfair Display, serif",
                  lineHeight: 1,

                  opacity: isActive ? 0 : 1,
                  transform: isActive ? "scale(0.95)" : "scale(1)",
                  transition: "opacity 0.35s ease, transform 0.35s ease",

                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {index + 1}
              </Typography>
            )}

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
