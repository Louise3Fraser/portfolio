import { useState, useEffect } from "react";
import ProjectHeader from "../../components/headers/ProjectHeader";

export default function Reveal({ project, onBack }) {
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
        about={`Hover to reveal the image underneath! (modeled after the Google Creative Fellowship site)
          Had a fun time experimenting with event listeners, canvas 2D rendering.`}
        tech={["html", "js", "css"]}
        skills={["2d canvas rendering", "Event listeners"]}
        gh={"https://github.com/Louise3Fraser/reveal-effect"}
        type={["Solo work"]}
      />
      <div className="project-main-content">
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reveal-effect-eight.vercel.app"
          >
            Live link↗
          </a>
        </h3>
      </div>
    </div>
  );
}
