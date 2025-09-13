import React, { useState, useEffect } from "react";
import ProjectHeader from "../components/headers/ProjectHeader";
import code from "../assets/random-gallery/rg-architecture.png";

export default function RandomGallery({ project, onBack }) {
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
      <ProjectHeader
        project={project}
        onBack={onBack}
        about={`Curiosity is at the root of everything I do. I built this site to explore 
          the weird and wonderful corners of history: from mysterious artifacts to rare discoveries 
          that don’t always get the spotlight. The site is a celebration of the oddly fascinating. `}
        tech={["React.js", "Vercel"]}
        skills={["Front-end dev", "Web design"]}
        link={"https://www.the-random-gallery.com/"}
        type={["Solo work"]}
      />
      <div className="project-main-content">
        <img
          width={"100%"}
          alt="Code screenshots for The Random Gallery"
          src={code}
        />
        <p style={{ paddingTop: "20px" }}>
          For my tech stack, I used React, CSS, Vercel, and Beehiiv. I was able
          to finish developing the site in just under a week, but I am still
          updating the site (i.e., adding new items) when I can!
        </p>
        <p>
          This is all for now. Feel free to check out the live site. More
          details coming soon!
        </p>
        <p>✮ ⋆ ˚｡𖦹 ⋆｡ ° ✩</p>
      </div>
    </div>
  );
}
