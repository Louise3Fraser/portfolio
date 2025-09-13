import "./App.css";
import LeftColumn from "./columns/Left";
import RightColumn from "./columns/Right";
import MiddleColumn from "./columns/Middle";
import { useEffect, useRef } from "react";

function App() {
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.innerWidth <= 1024) return;

      if (event.target === rightColumnRef.current) return;

      const deltaY = event.deltaY;
      if (rightColumnRef.current && deltaY) {
        rightColumnRef.current.scrollTop += deltaY;
        event.preventDefault();
      }
    };

    const handleResize = () => {};

    document.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("wheel", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="left-stack">
        <div className="column left">
          <LeftColumn />
        </div>
        <div className="column middle">
          <MiddleColumn />
        </div>
      </div>
      <div className="column right" ref={rightColumnRef}>
        <RightColumn scrollHostRef={rightColumnRef} />
      </div>
    </div>
  );
}

export default App;
