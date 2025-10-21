import { useState, useEffect } from "react";
import HeaderTop from "../../components/headers/HeaderTop";
import gs from "../../assets/gamestudio/gs.png";
import gsVid from "../../assets/gamestudio/gs-vid.mp4";
export default function GameStudio({ project, onBack }) {
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
          <p>
            Currently in development (React, TypeScript, TailwindCSS). The idea
            behind "GameStudio" is to emulate a mobile app experience. I'll be
            putting creative spins on familiar games, and maybe come up with a
            few originals.
          </p>
          <video
            style={{
              borderRadius: "5px",
              border: "1px dashed rgba(255, 255, 255, 0.05)",
            }}
            src={gsVid}
            width="100%"
            muted
            autoPlay
            loop
            playsInline
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/Louise3Fraser/gamestudio"}
          >
            View on github↗
          </a>
          {/* <img alt="Website preview" width={"100%"} src={gs} /> */}
        </div>
      </div>
    </div>
  );
}
