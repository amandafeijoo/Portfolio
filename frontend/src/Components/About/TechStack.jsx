import React, { useState, useEffect } from "react";
import { useMediaQuery, Typography, Box } from "@mui/material";
import {
  GridContainer,
  GridItem,
  TechLogo,
  KnowledgeBar,
  Divider,
} from "./TechStack.styles";
import { technologies } from "../../data/technologies.js";
import styled from "styled-components";

/* =========================
   MOBILE TECH NAME
========================= */
const TechName = styled.span`
  margin-top: 10px;
  font-size: 0.5rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(201, 184, 138, 0.85);
  text-align: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

const TechStack = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [techName, setTechName] = useState("");

  /* 🔥 SCROLL AL ENTRAR */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseEnter = (name) => {
    if (!isMobile) setTechName(name);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setTechName("");
  };

  return (
    <>
      {isMobile && (
        <Box
          sx={{
            textAlign: "center",
            mb: 2,
            mt: 4,
            px: 3,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -40,
              background:
                "radial-gradient(circle, rgba(201,184,138,0.12), transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2.1rem, 8vw, 2.6rem)",
              color: "rgba(247, 236, 205, 0.9)",
              lineHeight: 1.15,
              mb: 1,
              textShadow: "0 0 24px rgba(201,184,138,0.25)",
            }}
          >
            Technologies
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "rgba(201,184,138,0.85)",
              maxWidth: 320,
              mx: "auto",
              textShadow: "0 0 12px rgba(201,184,138,0.25)",
            }}
          >
            The tools behind every Webcode-Art project.
          </Typography>
        </Box>
      )}

      <GridContainer>
        {!isMobile && (
          <GridItem span={2} large>
            <div
              style={{
                maxWidth: "260px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(247, 236, 205, 0.9)",
                }}
              >
                Technologies
              </span>

              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "rgba(201,184,138,0.85)",
                  textShadow: "0 0 18px rgba(201,184,138,0.35)",
                }}
              >
                Behind Webcode-Art
              </span>

              <Divider style={{ margin: "6px auto 8px" }} />

              <div style={{ minHeight: "22px", marginTop: "6px" }}>
                <span
                  style={{
                    opacity: techName ? 1 : 0,
                    transition: "opacity 0.25s ease",
                    fontSize: "0.75rem",
                    color: "#F4F2ED",
                    letterSpacing: "0.06em",
                  }}
                >
                  {techName || " "}
                </span>
              </div>
            </div>
          </GridItem>
        )}

        {technologies.map((tech, index) => (
          <GridItem
            key={index}
            onMouseEnter={() => handleMouseEnter(tech.name)}
            onMouseLeave={handleMouseLeave}
            $large
            $span={2}
          >
            <TechLogo
              src={tech.logo}
              alt={tech.name}
              needsBackground={[
                "EXPRESS.JS",
                "GITHUB",
                "IOS SIMULATOR",
                "THREE.JS",
              ].includes(tech.name)}
              invertColor={["EXPRESS.JS", "GITHUB", "IOS SIMULATOR"].includes(
                tech.name
              )}
            />

            {isMobile && <TechName>{tech.name}</TechName>}

            <KnowledgeBar $knowledge={tech.knowledge} />
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
};

export default TechStack;
