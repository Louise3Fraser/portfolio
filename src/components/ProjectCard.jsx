import React from 'react';

function ProjectCard({ project, onClick }) {
  return (
    <div onClick={onClick} className='project-card'>
      {project.type === 'video' ? (
        <video src={project.src} width="100%" muted autoPlay loop playsInline />
      ) : (
        <img src={project.src} alt={project.title} width="100%" />
      )}
      <p style={{ marginTop: '8px', marginBottom: "0px"}}>
        <strong>{project.title}</strong><br />
        <small>{project.date}</small>
      </p>
    </div>
  );
}

export default ProjectCard;