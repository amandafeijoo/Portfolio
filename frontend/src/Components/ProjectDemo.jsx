import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDemo = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <video controls>
        <source src={project.demoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{project.description}</p>
      <p>{project.comment}</p>
      <p>Technologies: {project.technologies}</p>
    </div>
  );
};

export default ProjectDemo;