function ProjectCard({ project, onClick }) {
  return (
    <div onClick={onClick} className="project-card">
      {project.type === "video" ? (
        <video src={project.src} width="100%" muted autoPlay loop playsInline />
      ) : (
        <img src={project.src} alt={project.title} width="100%" />
      )}
      <div
        style={{
          marginTop: "8px",
          gap: "20px",
          marginBottom: "0px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p style={{ margin: "0px" }}>{project.title}</p>
        <p style={{ margin: "0px", color: "#999" }}>{project.date}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
