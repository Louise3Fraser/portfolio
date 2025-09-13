import { useState, useEffect } from "react";
import ProjectHeader from "../components/headers/ProjectHeader";
import vid from "../assets/itell/itell-vid.mp4";

export default function Itell({ project, onBack }) {
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
        about={`Last year I worked with a team to tackle design challenges for the LEAR Lab's iTELL platform. 
iTELL ("Intelligent Texts for Enhanced Lifelong Learning") is an AI-powered interactive textbook 
framework designed to enhance learning through real-time feedback and user engagement.`}
        tech={["React.js", "Vercel"]}
        skills={["Front-end dev", "Web design"]}
        link={"https://www.the-random-gallery.com/"}
        type={["Solo work"]}
      />
      <div className="project-main-content">
        <p>Preview: </p>
        <video src={vid} width="100%" muted autoPlay loop playsInline />
        {/* <p style={{ paddingTop: "20px" }}>
          The existing platform offered functionality, but user feedback
          highlighted several pain points and areas for improvement. For
          example, the old site has a cluttered interface, overlapping elements
          like notes and the chatbot, and a small logo and header that fail to
          establish a clear visual hierarchy.
        </p> */}
        <p>🚧 More coming soon! 🚧</p>
        <p>✮ ⋆ ˚｡𖦹 ⋆｡ ° ✩</p>
      </div>
    </div>
  );
}
