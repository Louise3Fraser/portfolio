import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectList from "../components/ProjectList";

export default function ProjectIndex() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`project-page-wrapper ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <ProjectList onSelect={(p) => navigate(`/projects/${p.id}`)} />
    </div>
  );
}
