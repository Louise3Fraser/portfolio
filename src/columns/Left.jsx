import React, { useState } from "react";
import indiana from "../assets/other/indiana.png";
import photo from "../assets/other/photo.png";
import music from "../assets/other/music.jpg";

function LeftColumn() {
  const [hovered, setHovered] = useState(false);

  const imageStyle = {
    width: "100%",
    transition: "transform 1s ease",
    transform: hovered ? "scale(0.95) rotate(-.5deg)" : "scale(1) rotate(0deg)",
  };

  return (
    <div className="left-col">
      <div className="louise-intro">
        <img
          src={photo}
          style={{ objectFit: "contain", }}
          height={"45px"}
          alt="Photo of Louise :)"
        />
        <p style={{margin: "0px"}}>
          <h1>Louise Fraser</h1>
          <p style={{color: "#999", padding: "0px"}}>louise3fraser@gmail.com</p>
          {/* <br />
          louise-fraser ↗ */}
        </p>
      </div>
      <div className="divider"/>
      <div className="music">
         <img
          src={music}
          style={{ objectFit: "contain", borderRadius: "100%" }}
          height={"55px"}
          alt="Photo of Louise :)"
        />

      </div>
      {/* <img
        src={indiana}
        alt="Indianapolis Map"
        style={imageStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      /> */}
    </div>
  );
}

export default LeftColumn;
