import { useState, useEffect } from "react";
import ProjectHeader from "../../components/headers/ProjectHeader";

export default function Moti({ project, onBack }) {
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
        about={`Moti is an iOS mindfulness app designed to cultivate 
            mindfulness through guided meditations and community engagement.`}
        tech={["Figma", "Adobe Illustrator"]}
        skills={["UX/UI Design", "UX Research"]}
        type={["Solo work"]}
      />
      <div className="project-main-content">
        <p>
          Many individuals struggle to maintain consistency with daily
          meditation. Factors such as busy schedules, lacking motivation, and
          not seeing results right away can hinder a person’s ability to develop
          their own mindfulness routine.{" "}
        </p>
        <p>
          The primary goal of Moti is to create an engaging and supportive app
          that encourages individuals to develop these essential mindfulness
          habits. By providing motivation tools, such as daily reminders and
          community support, Moti aims to make daily meditation a reachable
          goal.{" "}
        </p>
        <p>🚧 More coming soon! 🚧</p>
        <p>✮ ⋆ ˚｡𖦹 ⋆｡ ° ✩</p>
      </div>
    </div>
  );
}
