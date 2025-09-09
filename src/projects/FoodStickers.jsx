import React, { useState, useEffect } from "react";
import HeaderTop from "../components/HeaderTop";
import stickers1 from "../assets/art/food-stickers-2.png";
import stickers2 from "../assets/art/food-stickers-3.png";

export default function FoodStickers({ project, onBack }) {
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
      <HeaderTop project={project} onBack={onBack} />
      <div className="project-main-content">
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <img alt="Food stickers" width={"100%"} src={stickers1} />
          <img alt="Food stickers" width={"100%"} src={stickers2} />
        </div>
      </div>
    </div>
  );
}
