import React, { useState, useEffect, useRef } from "react";
import ProjectList from "../components/ProjectList";

function RightColumn({ selectedProject, onBack, onProjectSelect }) {
  const [isVisible, setIsVisible] = useState(false);
  const columnRef = useRef(null);

  useEffect(() => {
    if (columnRef.current) {
      columnRef.current.scrollTop = 0;
    }

    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [selectedProject]);

  if (selectedProject && selectedProject.component) {
    const ProjectComponent = selectedProject.component;
    return (
      <div ref={columnRef} className="right-column-scroll-container">
        <ProjectComponent project={selectedProject} onBack={onBack} />
      </div>
    );
  }

  return (
    <div
      ref={columnRef}
      className={`project-page-wrapper ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <ProjectList onSelect={onProjectSelect} />
    </div>
  );
}

export default RightColumn;
