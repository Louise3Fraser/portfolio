import React, { useState } from "react";
import Work from "../components/Work";

function MiddleColumn({ onProjectSelect }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    // Clear selected project when changing filters
    onProjectSelect(null);
  };

  const handleProjectSelect = (project) => {
    onProjectSelect(project);
  };
  return (
    <div>
      <p>
        Hi there! I’m Louise, a recent{" "}
        <a href="mailto:louise3fraser@gmail.com">Vanderbilt University</a> graduate with a double major in Computer Science & Psychology. I build
        at the intersection of engineering and design. I’m excited about
        creating technology grounded in human behavior that actually makes a
        difference.
      </p>
      <p>
        Outside of work, I’m usually cooking, hiking, playing videogames, or
        watching movies. I’m currently exploring full-time roles while
        traveling.
      </p>
      <Work
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        onProjectSelect={handleProjectSelect}
      />
    </div>
  );
}

export default MiddleColumn;
