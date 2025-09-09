import React, { useState, useEffect } from "react";
import ProjectHeader from "../components/ProjectHeader";

export default function TenFingers({ project, onBack }) {
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
      <ProjectHeader project={project} onBack={onBack} />
      <div className="project-main-content">
        <p className="italic">
          I was sorting through a box of ceramic frogs when Grandma came
          scurrying into the room with an excited expression on her face.
        </p>
        <p className="italic">“Mason, look at what I found!” </p>
        <p className="italic">
          In her hands she was carrying a small maroon box, about the size of a
          book, lined with gold filigree. She placed it carefully on the pile of
          boxes in front of me. Her nimble fingers unlatched the box, and the
          lid creaked open. At first, I couldn’t make sense of what I was
          looking at. Shriveled up prunes? Gnarled roots? And then I saw
          something glittery pink. Nail polish. It suddenly hit me. They were
          fingers.{" "}
        </p>
        <p className="italic">
          Ten of them, neatly arranged on a bed of velvet, nestled into
          individual slots like little chocolates. Each one seemed to be severed
          quite cleanly, distinct from the others in shape, size, and color.
          There was also no way they were fake. Too much detail–the wrinkles,
          the waxy gleam of the nails, the faint whisper of veins underneath. It
          was an organized display. Thoughtful. Grotesque, yet… sadistically
          beautiful. I slowly looked up at Grandma. She was watching me with a
          curious expression.{" "}
        </p>
        <p className="italic">
          “I found them underneath the floorboards in the basement. Right next
          to the old furnace.”
        </p>
      </div>
    </div>
  );
}
