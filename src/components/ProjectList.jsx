import { projects } from "../data/Projects";
import ProjectCard from "./ProjectCard";

function ProjectList({ onSelect }) {
  return (
    <div>
      {projects.map((project) => (
        <>
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onSelect(project)}
          />
          <div className="divider" />
        </>
      ))}
    </div>
  );
}

export default ProjectList;
