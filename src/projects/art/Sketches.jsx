import React, { useState, useEffect } from "react";
import HeaderTop from "../../components/headers/HeaderTop";
import Sketch1 from "../../assets/art/sketch1.png";
import Sketch2 from "../../assets/art/sketch2.png";
import Sketch3 from "../../assets/art/sketch3.png";

export default function Sketches({ project, onBack }) {
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
          <img width={"100%"} alt="line art" src={Sketch1} />
          <img width={"100%"} alt="line art and shading" src={Sketch2} />
          <img width={"100%"} alt="charcoal drawing" src={Sketch3} />
        </div>
      </div>
    </div>
  );
}
