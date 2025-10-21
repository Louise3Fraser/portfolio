import React, { useState, useEffect } from "react";
import HeaderTop from "../../components/headers/HeaderTop";
import stampsGreen from "../../assets/art/stamps-green.png";
import procreate from "../../assets/art/procreate.png";

export default function Stamps({ project, onBack }) {
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
          <img width={"100%"} alt="Leaf stamps" src={stampsGreen} />
          <img width={"100%"} alt="Leaf stamps in Procreate" src={procreate} />
        </div>
      </div>
    </div>
  );
}
