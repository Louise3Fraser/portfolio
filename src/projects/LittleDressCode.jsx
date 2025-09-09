import React, { useState, useEffect } from "react";
import ProjectHeader from "../components/ProjectHeader";
import code from "../assets/random-gallery/rg-architecture.png";

export default function LittleDressCode({ project, onBack }) {
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
        about={`For my final semester at Vanderbilt, my web development class was organized 
          into teams and tasked with building a senior project. My team created LittleDressCode, a mobile closet app that allows users to upload and manage their clothing.

`}
        tech={["React.js", "Vercel"]}
        skills={["Front-end dev", "Web design"]}
        link={"https://www.the-random-gallery.com/"}
        type={"Solo work"}
      />
      <div className="project-main-content">
        <h2 style={{color: "#666"}}>
          Creating a mobile app that blends fashion and tech
        </h2>
        <p>
          Over the course of the semester, our team followed a full product
          development cycle. The process was a combination of product design,
          software engineering, and user research. Specifically, this project
          involved exploration of the following areas:
        </p>
         <p>
          🚧 More coming soon! 🚧
        </p>
        <p>✮ ⋆ ˚｡𖦹 ⋆｡ ° ✩</p>
      </div>
    </div>
  );
}
