import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
import Wavify from "react-wavify";
import { FaGithub } from "react-icons/fa";

const slideInAndGrow = keyframes`
  0% {
    transform: translateY(20px) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const slideOutAndShrink = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(20px) scale(0.95);
    opacity: 0;
  }
`;

const SummaryContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  max-width: 700px;
  border: 2px solid rgba(200, 162, 200, 0.5);
  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    margin: 5px;
  }

  @media (min-width: 1025px) {
    padding: 50px;
    margin: 30px;
  }
`;

const SummaryTitle = styled.h2`
  font-size: 2em;
  color: #fff;
  text-shadow: 0 0 3px #000;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const SummaryText = styled.p`
  font-size: 1em;
  color: #fff;
  text-shadow: 0 0 3px #000;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const ProjectCardContainer = styled.div`
  position: relative;
  animation: ${({ inView }) => (inView ? slideInAndGrow : slideOutAndShrink)} 1s
    ease-out forwards;
  opacity: 0;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(200, 162, 200, 0.5);
  overflow: hidden;

  @media (max-width: 1024px) {
    animation: none !important;
    opacity: 1;
    padding: 10px;
    margin: 5px 0;
  }

  @media (max-width: 480px) {
    animation: none !important;
    opacity: 1;
    padding: 5px;
    margin: 2px 0;
  }

  @media (min-width: 1025px) {
    padding: 20px;
    margin: 15px 0;
  }
`;

const ProjectVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border: 3px solid #99aaff;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const ProjectSubtitle = styled.h4`
  font-size: 1.2em;
  color: #666;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #333;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const ProjectTechnologies = styled.p`
  font-size: 0.9em;
  color: #999;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const ProjectLinks = styled.div`
  margin-top: 10px;
`;

const ProjectLink = styled.a`
  margin-right: 10px;
  color: #9370db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const borderAnimation = keyframes`
  0% { border-color: #7799ff; }
  25% { border-color: #ff7799; }
  75% { border-color: #ff99ff; }
  100% { border-color: #7799ff; }
`;

const WaveBackground = styled(Wavify)`
  position: absolute;
  margin-top: 500px;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: -1;
  transform: scaleY(3.5);
  opacity: 0.5;
  @media (max-width: 768px) {
    height: 50px;
    transform: scaleY(2.5);
  }

  @media (max-width: 480px) {
    height: 30px;
    transform: scaleY(1.5);
  }
`;

const ProjectComment = styled.p`
  font-size: 0.9em;
  color: #d8bfd8;  
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;
const SummaryProjects = ({ projects }) => {
  const [visibleCards, setVisibleCards] = useState(
    new Array(projects.length).fill(false)
  );

  const handleInViewChange = (inView, index) => {
    setVisibleCards((prev) => {
      const newVisibleCards = [...prev];
      newVisibleCards[index] = inView;
      return newVisibleCards;
    });
  };

  return (
    <SummaryContainer>
      <SummaryTitle>Projects</SummaryTitle>
      <SummaryText>
        This is a brief summary of the projects. Each project is designed to
        solve specific problems and uses various technologies to achieve its
        goals.
      </SummaryText>
      {projects.map((project, index) => {
        const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.5,
          onChange: (inView) => handleInViewChange(inView, index),
        });

        return (
          <ProjectCardContainer key={index} ref={ref} inView={inView}>
            {(index === 0 || index === 1) && (
              <WaveBackground
                fill="rgba(200, 162, 200, 0.5)"
                paused={false}
                options={{
                  height: 10,
                  amplitude: 10,
                  speed: 0.15,
                  points: 3,
                }}
              />
            )}
            <ProjectVideo autoPlay muted loop>
              <source src={project.videoSrc} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </ProjectVideo>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
            <ProjectComment>{project.comment}</ProjectComment>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTechnologies>{project.technologies}</ProjectTechnologies>
            <ProjectLink href={project.githubLink} target="_blank">
              <FaGithub style={{ marginRight: "5px" }} />
              GitHub
            </ProjectLink>
          </ProjectCardContainer>
        );
      })}
    </SummaryContainer>
  );
};

export default SummaryProjects;
