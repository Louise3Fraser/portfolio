import { useState, useEffect } from "react";
import ProjectHeader from "../components/headers/ProjectHeader";
import stickies from "../assets/ldc/stickies.png";
import webdevmap from "../assets/ldc/webdevmap.png";
import wireframes from "../assets/ldc/wireframes-ldc.png";
import behavior from "../assets/ldc/behavior-map.png";
import prototypes from "../assets/ldc/prototypes-ldc.png";
import styles from "../assets/ldc/style-ldc.png";

export default function LittleDressCode({ project, onBack }) {
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
        about={`For my final semester at Vanderbilt, my web development class was organized 
          into teams and tasked with building a senior project. My team created LittleDressCode, a mobile closet app that allows users to upload and manage their clothing.

`}
        tech={["React.js", "Expo", "AWS"]}
        skills={["UX/UI Design", "Mobile engineering"]}
        type={["Team project", "5 devs"]}
      />
      <div className="project-main-content">
        <h3>⭑ Creating a mobile app that blends fashion and tech</h3>
        <p>
          Over the course of the semester, our team followed a full product
          development cycle. The process was a combination of product design,
          software engineering, and user research.
        </p>
        <p>
          Specifically, this project involved exploration of the following
          areas:
        </p>
        <ol>
          <li>User Research (Weeks 1 – 2)</li>
          <li>Organization & Data Structure (Weeks 2 – 4)</li>
          <li>Wireframing & Prototyping (Weeks 4 – 8)</li>
          <li>Technical Implementation (Weeks 5 – 12)</li>
          <li>Showcase & Reflection (Week 12)</li>
        </ol>
        {/* <img width={"80%"} alt="Team photo" src={team} />{" "} */}
      </div>
      <div className="divider" />

      <div className="project-main-content">
        <h3>⭑ We began by analyzing scope & brainstorming</h3>

        <p>
          How might we simplify navigation while showcasing outfits &
          collections? How might we create a clean, engaging interface? How
          might we encourage community-driven outfit inspiration in the app?
          These are just a few of the questions that guided our initial
          analysis.
        </p>

        <p>
          What our initial research and brainstorming revealed about how users
          want to interact with LDC:
        </p>
        <img width={"100%"} alt="Goals" src={stickies} />

        <p>
          The true challenge isn’t storing clothes, it’s helping users navigate
          them. Our insight was that effortless navigation, not more features,
          is what makes a closet app useful.
        </p>
      </div>
      <div className="divider" />

      <div className="project-main-content">
        <h3>⭑ Next, we spent time considering the organization of the app</h3>

        <p>
          We began with a competitive analysis and peer interviews to understand
          how people intuitively organize their clothes. A 3-tier system (items,
          outfits, and collections) emerged as both natural and flexible. We
          also defined metadata attributes at each level to allow for filtering
          and tagging.
        </p>
        <h4>Closet Organization Model:</h4>
        <img width={"100%"} alt="Goals" src={webdevmap} />
        <h4>User Behavioral Analysis:</h4>
        <img width={"100%"} alt="Goals" src={behavior} />
        <p>
          The following sections summarize the research that guided our app’s
          organization. Together, these findings shaped the 3-tier system of
          items, outfits, and collections that underpins our design.
        </p>
      </div>
      <div className="divider" />

      <div className="project-main-content">
        <h3>⭑ Brainstorming–with a focus on simplicity</h3>

        <p>
          We explored multiple wireframe iterations and user flows to strip the
          app down to its essentials. Our goal was to balance clarity and
          functionality, making it easy for users to log in, navigate their
          closet, and create outfits without friction.
        </p>
        <img width={"100%"} alt="Goals" src={wireframes} />
      </div>
      <div className="divider" />

      <div className="project-main-content">
        <h3>⭑ Prototyping the core experience</h3>

        <p>
          With our wireframes as a foundation, we began creating the
          high-fidelity prototypes. Prototyping allowed us to test flows quickly
          and refine how users interacted with their closets.
        </p>
        <img width={"100%"} alt="Prototypes" src={prototypes} />
        <h4>Our design system in action:</h4>
        <img width={"100%"} alt="Design System" src={styles} />
        <p>
          ↳ Neutral base color palette, bold accent tones, flexible button and
          input styles, iconography, and navigation elements.
        </p>
        <p>✮ ⋆ ˚｡𖦹 ⋆｡ ° ✩</p>
      </div>
    </div>
  );
}
