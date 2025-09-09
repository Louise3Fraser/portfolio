import "../App.css";

function HeaderTop({ project, onBack }) {
  return (
    <div style={{padding: "30px", paddingBottom: "0px"}}>
        <div className="top">
          <button onClick={onBack}>← back</button>
          <h1>{project.title}</h1>
          <p className="project-date">{project.date}</p>
        </div>

    </div>
  );
}

export default HeaderTop;
