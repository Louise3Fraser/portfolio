import "./App.css";
import LeftColumn from "./columns/Left";
import RightColumn from "./columns/Right";
import MiddleColumn from "./columns/Middle";
import { useEffect, useRef, useState } from "react";

function App() {
  const rightColumnRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleBackToList = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.target === rightColumnRef.current) return;

      const deltaY = event.deltaY;
      if (rightColumnRef.current && deltaY) {
        rightColumnRef.current.scrollTop += deltaY;
        event.preventDefault();
      }
    };
    document.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="column left">
        <LeftColumn />
      </div>
      <div className="column middle">
        <MiddleColumn onProjectSelect={handleProjectSelect} />
      </div>
      <div className="column right" ref={rightColumnRef}>
        <RightColumn
          selectedProject={selectedProject}
          onBack={handleBackToList}
          onProjectSelect={handleProjectSelect}
        />
      </div>
    </div>
  );
}

export default App;
