import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const technologies = [
  {
    name: "REACT",
    color: "rgba(97, 218, 251, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    knowledge: 4.5,
  },
  {
    name: "ANGULAR",
    color: "rgba(221, 0, 49, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    knowledge: 4.0,
  },
  {
    name: "DJANGO",
    color: "rgba(9, 46, 32, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    knowledge: 4.5,
  },
  {
    name: "PYTHON",
    color: "rgba(55, 118, 171, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    knowledge: 4.5,
  },
  {
    name: "NODE.JS",
    color: "rgba(51, 153, 51, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    knowledge: 4.5,
  },
  {
    name: "EXPRESS.JS",
    color: "rgba(255, 255, 255, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    knowledge: 4.5,
  },
  {
    name: "JAVASCRIPT",
    color: "rgba(247, 223, 30, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    knowledge: 4.5,
  },
  {
    name: "CSS",
    color: "rgba(21, 114, 182, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    knowledge: 4.5,
  },
  {
    name: "HTML",
    color: "rgba(227, 79, 38, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    knowledge: 4.5,
  },
  {
    name: "NEXT.JS",
    color: "rgba(255, 255, 255, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    knowledge: 4.0,
  },
  {
    name: "POSTGRESQL",
    color: "rgba(51, 103, 145, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    knowledge: 4.5,
  },
  {
    name: "SQL",
    color: "rgba(0, 117, 143, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    knowledge: 4.0,
  },
  {
    name: "MONGODB",
    color: "rgba(9, 46, 32, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    knowledge: 4.5,
  },
  {
    name: "GITHUB",
    color: "rgba(255, 255, 255, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    knowledge: 4.0,
  },
  {
    name: "DOCKER",
    color: "rgba(36, 150, 237, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    knowledge: 4.0,
  },
  {
    name: "MATERIAL-UI",
    color: "rgba(0, 129, 203, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    knowledge: 4.5,
  },
  {
    name: "IOS SIMULATOR",
    color: "rgba(162, 170, 173, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
    knowledge: 4.5,
  },
  {
    name: "ANDROID STUDIO",
    color: "rgba(61, 220, 132, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    knowledge: 4.5,
  },
  {
    name: "GOOGLE CLOUD",
    color: "rgba(66, 133, 244, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg",
    knowledge: 3.5,
  },
  {
    name: "PHOTOSHOP",
    color: "rgba(49, 168, 255, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
    knowledge: 4.5,
  },
  {
    name: "ILLUSTRATOR",
    color: "rgba(255, 154, 0, 0.5)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
    knowledge: 4.5,
  },
];
const KnowledgeBar = styled.div`
  width: 90%;
  height: 10px;
  background-color: rgba(200, 162, 200, 0.5);
  margin-top: 10px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $knowledge }) => $knowledge * 20}%;
    background-color: ${({ $color }) => $color};
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 100%;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 15px;
    max-width: calc(100% - 30px);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    padding: 10px;
    max-width: calc(100% - 20px);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 1fr);
    padding: 0px;
    max-width: 100%;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #99aaff;
  background-color: transparent;
  cursor: pointer;
  width: ${(props) => (props.large ? "320px" : "160px")};
  height: ${(props) => (props.large ? "150px" : "140px")};
  grid-column: ${(props) => (props.span ? `span ${props.span}` : "auto")};
  &:hover {
    background-color: ${(props) => props.color || "transparent"};
  }

  @media (max-width: 1366px) {
    width: ${(props) => (props.large ? "280px" : "140px")};
    height: ${(props) => (props.large ? "130px" : "120px")};
  }

  @media (max-width: 1024px) {
    width: ${(props) => (props.large ? "240px" : "120px")};
    height: ${(props) => (props.large ? "120px" : "100px")};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.large ? "240px" : "110px")};
    height: ${(props) => (props.large ? "100px" : "80px")};
    margin-top: 20px;
    color: #e6e6fa;
  }
`;

const TechLogo = styled.img`
  width: ${(props) => (props.needsBackground ? "50px" : "60px")};
  height: ${(props) => (props.needsBackground ? "50px" : "60px")};
  padding: ${(props) => (props.needsBackground ? "10px" : "10px")};
  background-color: ${(props) =>
    props.needsBackground ? "#FFFFFF" : "transparent"};
  filter: ${(props) => (props.invertColor ? "invert(1)" : "none")};
  position: relative;
  z-index: 2;
  transition: all 0.5s;
  border-radius: ${(props) => (props.needsBackground ? "50%" : "0")};
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1366px) {
    width: ${(props) => (props.needsBackground ? "45px" : "55px")};
    height: ${(props) => (props.needsBackground ? "45px" : "55px")};
  }

  @media (max-width: 1024px) {
    width: ${(props) => (props.needsBackground ? "40px" : "50px")};
    height: ${(props) => (props.needsBackground ? "40px" : "50px")};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.needsBackground ? "30px" : "40px")};
    height: ${(props) => (props.needsBackground ? "30px" : "40px")};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingE = styled.span`
  display: inline-block;
  animation: ${rotate} 15s linear infinite;
  border: 2px solid #99aaff;
  margin-right: 9px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: 2;
  }
  &::before {
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

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
