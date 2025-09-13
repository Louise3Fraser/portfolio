import { useState, useEffect } from "react";
import ProjectHeader from "../components/headers/ProjectHeader";

export default function IXL({ project, onBack }) {
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
        about={`For this design challenge, the goal was to create a new flexible homework assignment feature for IXL, enabling teachers to combine skills, lessons, and videos within a single assignment to better support student learning.`}
        tech={["Figma", "Adobe Illustrator"]}
        skills={["UX/UI Design", "UX Research"]}
        type={["Design challenge"]}
      />
      <div className="project-main-content">
        <p>
          Currently, teachers are only able to assign skills via one of three
          ways: 1) telling students the skill code (e.g., A.1), 2) sharing the
          URL, or 3) “starring” the skill in IXL. These methods lack a
          centralized, traditional assignment system, making it difficult to
          manage, track, and assign content in one cohesive place.
        </p>
        <p>🚧 More coming soon! 🚧</p>
        <p>✮ ⋆ ˚｡𖦹 ⋆｡ ° ✩</p>
      </div>
    </div>
  );
}
