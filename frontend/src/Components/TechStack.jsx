import React, { useState } from "react";
import {
  GridContainer,
  GridItem,
  TechLogo,
  KnowledgeBar,
  RotatingE
} from "./styles/TechStack.styles";
import { technologies } from "../data/technologies";

const TechStack = () => {
  const [techName, setTechName] = useState("");
  const [defaultText, setDefaultText] = useState("Explore my skills");

  const handleMouseEnter = (name) => {
    setTechName(name);
    setDefaultText("Technical Skill:");
  };

  const handleMouseLeave = () => {
    setTechName("");
    setDefaultText("Explore my skills");
  };

  return (
    <GridContainer>
      <GridItem span={2} large>
        <span>
          {defaultText === "Explore my skills" ? (
            <>
              <RotatingE>{defaultText.charAt(0)}</RotatingE>
              {defaultText.slice(1)}
            </>
          ) : (
            defaultText
          )}
        </span>
        <span style={{ color: "#61DAFB", marginLeft: "10px" }}>{techName}</span>
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
