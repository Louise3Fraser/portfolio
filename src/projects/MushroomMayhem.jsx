import React, { useState, useEffect } from "react";
import ProjectHeader from "../components/ProjectHeader";
import sprites from "../assets/mm/mm-sprites.png"

export default function MushroomMayhem({ project, onBack }) {
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
        about={`Mushroom Mayhem is a platform game created on Unity Game Engine. 
            The player controls a tiny mushroom character and must navigate 
            obstacles–spikes and enemies alike–to complete various levels amongst a cozy forest.`}
        tech={["Unity", "C#"]}
        skills={["Game development", "Graphic design"]}
        type={"Team work"}
      />
      <div className="project-main-content">
        <img width={"100%"} alt="Game hand-drawn sprites" src={sprites} />
        <p style={{ paddingTop: "20px" }}>
         The art of the game was hand-drawn and created using Adobe Illustrator and Procreate.

        </p>
        <p>
          This is all for now. More
          details coming soon!
        </p>
        <p>✮ ⋆ ˚｡𖦹 ⋆｡ ° ✩</p>
      </div>
    </div>
  );
}
