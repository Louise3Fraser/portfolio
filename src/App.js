import "./App.css";
import LeftColumn from "./columns/Left";
import RightColumn from "./columns/Right";
import MiddleColumn from "./columns/Middle";
import { useEffect, useRef } from "react";

function App() {
  const rightColumnRef = useRef(null);
  const middleColumnRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.innerWidth <= 1024) return;

      const right = rightColumnRef.current;
      const middle = middleColumnRef.current;
      if (!right) return;

      const deltaY = event.deltaY || 0;

      if (right.contains(event.target)) return;

      if (middle && middle.contains(event.target)) {
        const canMiddleScroll = middle.scrollHeight > middle.clientHeight;

        if (canMiddleScroll) {
          const atTop = middle.scrollTop <= 0;
          const atBottom =
            middle.scrollTop + middle.clientHeight >= middle.scrollHeight - 1;

          if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) {
            return;
          }
        } else {
        }
      }

      right.scrollTop += deltaY;
      event.preventDefault();
    };

    document.addEventListener("wheel", handleScroll, { passive: false });
    return () => document.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="left-stack">
        <div className="column left">
          <LeftColumn />
        </div>

        <div className="column middle" ref={middleColumnRef}>
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
