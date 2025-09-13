import React, { useState, useEffect } from "react";
import HeaderTop from "../components/headers/HeaderTop";
import times from "../assets/art/times-square.png";

export default function TimesSquare({ project, onBack }) {
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
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <img alt="NYC Times Square" width={"100%"} src={times} />
        </div>
      </div>
    </div>
  );
}
