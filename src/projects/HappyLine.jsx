import { useState, useEffect } from "react";
import ProjectHeader from "../components/ProjectHeader";

export default function HappyLine({ project, onBack }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

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
        about={`Last winter I took the psychology class, "Emotion," and, as a nonstandard final project, I opted to design a mobile application. I predicted this would be the perfect opportunity to combine my interest in psychology and design. HappyLine is a mobile application that fosters daily gratitude and the cultivation of positive emotions, activities proven to provide positive effects on one’s overall well-being.`}
        tech={["Figma", "Procreate"]}
        skills={["UX/UI Design", "UX Research", "Psychology"]}
        type={"Class project"}
      />
      <div className="project-main-content">
        <p>
          Upon opening the app, users are prompted to write a single positive
          sentence, or a “HappyLine.” Doing so will grant them access to the
          app’s homepage. Once in the app, users can write more HappyLines, view
          their previous entries, and view insights.
        </p>
        <p>🚧 More coming soon! 🚧</p>
        <p>✮ ⋆ ˚｡𖦹 ⋆｡ ° ✩</p>
      </div>
    </div>
  );
}
