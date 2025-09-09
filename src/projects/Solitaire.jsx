import { useState, useEffect } from "react";
import ProjectHeader from "../components/ProjectHeader";

export default function Solitaire({ project, onBack }) {
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
        about={`Last year I worked with a team to tackle design challenges for the LEAR Lab's iTELL platform. 
iTELL ("Intelligent Texts for Enhanced Lifelong Learning") is an AI-powered interactive textbook 
framework designed to enhance learning through real-time feedback and user engagement.`}
        tech={["React.js", "Vercel"]}
        skills={["Front-end dev", "Web design"]}
        link={"https://www.the-random-gallery.com/"}
        type={"Solo work"}
      />
      <div className="project-main-content">
        <p>Preview: </p>

        <p>✮ ⋆ ˚｡𖦹 ⋆｡ ° ✩</p>
      </div>
    </div>
  );
}
