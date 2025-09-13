import { useState, useEffect } from "react";
import ProjectHeader from "../components/headers/ProjectHeader";

export default function Solitaire({ project, onBack }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`project-page-wrapper ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <ProjectHeader
        project={project}
        onBack={onBack}
        about={`Made for my web dev class, this is a full-stack web solitaire site.`}
        tech={["HTML/CSS", "JavaScript", "Node"]}
        skills={["Full-stack", "Web design"]}
        type={["Solo work"]}
      />
      <div className="project-main-content">
        <p>✮ ⋆ ˚｡𖦹 ⋆｡ ° ✩</p>
      </div>
    </div>
  );
}
