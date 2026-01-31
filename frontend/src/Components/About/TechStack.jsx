import React, { useState } from "react";
import {
  GridContainer,
  GridItem,
  TechLogo,
  KnowledgeBar,
  Divider,
} from "./TechStack.styles";
import { technologies } from "../../data/technologies.js";

const TechStack = () => {
  const [techName, setTechName] = useState("");
  const [defaultText, setDefaultText] = useState(
    "Technologies\nbehind Webcode-Art"
  );

  const handleMouseEnter = (name) => {
    setTechName(name);
    setDefaultText("Technical Skill:");
  };

  const handleMouseLeave = () => {
    setTechName("");
    setDefaultText("Technologies\nbehind Webcode-Art");
  };

  return (
    <GridContainer>
      <GridItem span={2} large>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "6px",
          }}
        >
          <span
            style={{
              fontSize: "1rem",
              letterSpacing: "0.08em",
              color: "#B8B4AA",
              textShadow: "0 0 12px rgba(201,184,138,0.25)",
            }}
          >
            Technologies
          </span>

          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "#F4F2ED",
              textShadow: "0 0 18px rgba(201,184,138,0.35)",
            }}
          >
            Behind Webcode-Art
          </span>
          <Divider />
        </div>

        {techName && (
          <span
            style={{
              marginTop: "12px",
              color: "#F4F2ED",
              fontSize: "0.9rem",
              letterSpacing: "0.06em",
              textShadow: "0 0 12px rgba(201,184,138,0.35)",
            }}
          >
            {techName}
          </span>
        )}
      </GridItem>

      {technologies.map((tech, index) => (
        <GridItem
          key={index}
          color={tech.color}
          onMouseEnter={() => handleMouseEnter(tech.name)}
          onMouseLeave={handleMouseLeave}
          $large={true}
          $span={2}
        >
          <TechLogo
            src={tech.logo}
            alt={tech.name}
            needsBackground={["EXPRESS.JS", "GITHUB", "IOS SIMULATOR"].includes(
              tech.name
            )}
            invertColor={["EXPRESS.JS", "GITHUB", "IOS SIMULATOR"].includes(
              tech.name
            )}
          />
          <KnowledgeBar $knowledge={tech.knowledge} $color={tech.color} />
        </GridItem>
      ))}
    </GridContainer>
  );
};
export default TechStack;
