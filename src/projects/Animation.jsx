import React, { useState, useEffect } from "react";
import HeaderTop from "../components/HeaderTop";
import animation from "../assets/art/animation.mp4";

export default function Animation({ project, onBack }) {
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
      <HeaderTop project={project} onBack={onBack} />
      <div className="project-main-content">
        <video src={animation} width="100%" muted autoPlay loop playsInline />
      </div>
    </div>
  );
}
