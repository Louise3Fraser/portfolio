import { useState, useEffect } from "react";
import HeaderTop from "../../components/headers/HeaderTop";
import melbourne from "../../assets/art/melbourne.png";

export default function Downtown({ project, onBack }) {
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
            alt="Downtown Melbourne, Australia"
            src={melbourne}
          />
        </div>
      </div>
    </div>
  );
}
