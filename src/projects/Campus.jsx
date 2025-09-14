import { useState, useEffect } from "react";
import HeaderTop from "../components/headers/HeaderTop";
import campus from "../assets/art/unimelb-campus.png";

export default function Campus({ project, onBack }) {
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
          <img
            width={"100%"}
            alt="Archway in the University of Melbourne campus"
            src={campus}
          />
        </div>
      </div>
    </div>
  );
}
