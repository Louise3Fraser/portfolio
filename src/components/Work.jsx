import { projects } from "../data/Projects";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Work({ activeFilter, onFilterChange }) {
  const filters = ["all", "code", "design", "art", "writing"];
  const navigate = useNavigate();

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getStatusBadge = (project) => {
    if (project.status === "new") {
      return <span className="status-badge wip-badge">NEW⟲</span>;
    }
    if (project.status === "wip") {
      return <span className="status-badge new-badge">WIP⧗</span>;
    }
    if (project.status === "coming soon") {
      return <span className="status-badge cs-badge">TBA⏲</span>;
    }
    return null;
  };

  const handleProjectClick = (project) => {
    if (project?.id) navigate(`/projects/${project.id}`);
  };

  const handleFilterClick = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div className="terminal-container">
      <nav className="terminal-nav">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`nav-button ${activeFilter === filter ? "active" : ""}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>

      <div className="divider"></div>

      <div className="terminal-content">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-row"
            onClick={() => handleProjectClick(project)}
          >
            <div>{project.title}</div>
            <div>{project.desc}</div>
            <div className="project-time">
              {project.status ? (
                <>{getStatusBadge(project)}</>
              ) : (
                <span className="time-text">{project.date}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
