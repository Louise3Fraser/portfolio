import { useRef, useState } from "react";
import photo from "../assets/other/photo.png";
import music from "../assets/other/music.jpg";
import song from "../assets/song.mp3";
import mail from "../assets/other/mail.png";
import gh from "../assets/other/gh.png";
import lin from "../assets/other/in.png";

function LeftColumn() {
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

  return (
    <div className="left-col">
      <div className="louise-intro">
        <img
          src={photo}
          style={{ objectFit: "contain" }}
          height={"45px"}
          alt="Louise :)"
        />
        <div
          style={{
            margin: "0px",
            gap: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Louise Fraser</h1>
          <span style={{ display: "flex", gap: "13px", alignItems: "center" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.linkedin.com/in/louise-fraser-379b0b251/"}
            >
              <img
                alt="LinkedIn icon"
                src={lin}
                width={"15px"}
                height={"100%"}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/Louise3Fraser"}
            >
              <img alt="Github icon" src={gh} width={"15px"} height={"100%"} />
            </a>
            <a href="louise3fraser@gmail.com">
              <img alt="Mail icon" src={mail} width={"15px"} height={"100%"} />
            </a>
          </span>
        </div>
      </div>
      <div className="divider" />
      <div className="music">
        <button
          onClick={handleTogglePlay}
          aria-pressed={playing}
          title={playing ? "Pause" : "Play"}
          className="music-button"
        >
          <img
            src={music}
            alt="Play music"
            height="50"
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
              marginBottom: "5px",
              fontSize: "10px",
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
