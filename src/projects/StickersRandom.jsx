import React, { useState, useEffect } from "react";
import HeaderTop from "../components/HeaderTop";
import stickers1 from "../assets/art/stickersr-1.png";
import stickers2 from "../assets/art/stickersr-2.png";
import stickers3 from "../assets/art/stickersr-3.png";
import stickers4 from "../assets/art/stickersr-4.png";

export default function StickersRandom({ project, onBack }) {
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
          <img width={"100%"} alt="Random stickers" src={stickers1} />
          <img width={"100%"} alt="Random stickers" src={stickers2} />
          <img width={"100%"} alt="Random stickers"src={stickers3} />
          <img width={"100%"} alt="Random stickers" src={stickers4} />
        </div>
      </div>
    </div>
  );
}
