import "../App.css";
import HeaderTop from "./HeaderTop";

function ProjectHeader({ project, onBack, tech, about, skills, link, type }) {
  return (
    <div>
      <div className="overview">
        <HeaderTop project={project} onBack={onBack} />
        <div className="project-media">
          <img alt={project.desc} src={project.image} width="100%" />
        </div>
      </div>

      <div className="divider" />
      <p
        style={{
          paddingTop: "30px",
          paddingLeft: "30px",
          paddingRight: "30px",
          marginBottom: tech ? "20px" : "0px"
        }}
      >
        {about}
      </p>
      <div className="project-quick-info">
        {tech && (
          <div className="info">
            <h2>Technology</h2>
            <ul>
              {tech &&
                tech.map((item) => {
                  return <li>{item}</li>;
                })}
            </ul>
          </div>
        )}
        {skills && (
          <div className="info">
            <h2>Skills</h2>
            <ul>
              {skills &&
                skills.map((item) => {
                  return <li>{item}</li>;
                })}
            </ul>
          </div>
        )}

        {type && (
          <div className="info">
            <h2>Type</h2>
            <ul>
              <li>{type}</li>
            </ul>
          </div>
        )}
        {link && (
          <div className="info">
            <h2>Link</h2>
            <ul>
              {link && (
                <a target="_blank" rel="noopener noreferrer" href={link}>
                  See live↗
                </a>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="divider" />
    </div>
  );
}

export default ProjectHeader;
