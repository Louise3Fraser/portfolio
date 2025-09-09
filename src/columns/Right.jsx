import React, { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";

function RightColumn({ selectedProject, onBack, onProjectSelect }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
        window.scrollTo(0, 0);

    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [selectedProject]);

  if (selectedProject && selectedProject.component) {
    const ProjectComponent = selectedProject.component;
    return <ProjectComponent project={selectedProject} onBack={onBack} />;
  }

  return (
    <div
      className={`project-page-wrapper ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <ProjectList onSelect={onProjectSelect} />
    </div>
  );
}

export default RightColumn;
