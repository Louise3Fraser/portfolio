import React, { useRef, useState } from "react";
import indiana from "../assets/other/indiana.png";
import photo from "../assets/other/photo.png";
import music from "../assets/other/music.jpg";
import song from "../assets/song.mp3";

function LeftColumn() {
  const [hovered, setHovered] = useState(false);

  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleTogglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!playing) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.error("Play failed:", err);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };
  // const imageStyle = {
  //   width: "100%",
  //   transition: "transform 1s ease",
  //   transform: hovered ? "scale(0.95) rotate(-.5deg)" : "scale(1) rotate(0deg)",
  // };

  return (
    <div className="left-col">
      <div className="louise-intro">
        <img
          src={photo}
          style={{ objectFit: "contain" }}
          height={"45px"}
          alt="Photo of Louise :)"
        />
        <p style={{ margin: "0px" }}>
          <h1>Louise Fraser</h1>
          <p style={{ color: "#999", padding: "0px" }}>
            louise3fraser@gmail.com
          </p>
          {/* <br />
          louise-fraser ↗ */}
        </p>
      </div>
      <div className="divider" />
      <div className="music">
        <button
          onClick={handleTogglePlay}
          aria-pressed={playing}
          title={playing ? "Pause" : "Play"}
          style={{
            border: "none",
            background: "transparent",
            display: "flex",
            flexDirection: "row",
            padding: 0,
            cursor: "pointer",
            lineHeight: 0,
            gap: "10px",
            alignItems: "flex-end",
          }}
        >
          <img
            src={music}
            alt="Play music"
            height="55"
            className={playing ? "spin-disc" : "disc"}
            style={{
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <p
            style={{
              whiteSpace: "nowrap",
              color: "#999",
              marginBottom: "10px",
            }}
          >
            (psst press me)
          </p>
        </button>
        <audio
          ref={audioRef}
          src={song}
          preload="metadata"
          onEnded={() => setPlaying(false)}
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
