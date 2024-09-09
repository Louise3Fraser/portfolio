import React, { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { motion } from "framer-motion";
import "../pages-css/Experience.css";

export default function ExperienceCards({ job }) {
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.up("sm"));

  useEffect(() => {
    const highlights = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    highlights.forEach((highlight) => {
      observer.observe(highlight);
    });

    return () => {
      highlights.forEach((highlight) => {
        observer.unobserve(highlight);
      });
    };
  }, []);

  return (
    <div className="fade-in-section">
      <div className="experience-cards" style={{padding: "20px", flexDirection: isSmallScreen ? "row" :"column"}}>
        <p
          className="small"
          style={{
            color: "#5b1136",
            flex: isSmallScreen ? "1 0 25%" : "",
            marginBottom: "10px",
            flexDirection: "column"
          }}
        >
          {job.date}
        </p>
        <div className="info">
          <div className="experience-card-heading">
            <p className="job">{job.place}</p>
            <p className="job">|</p>
            <p className="job">{job.title}</p>
            <motion.button
              className="link"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(job.url)}
            >
              <CallMissedOutgoingIcon
                style={{ color: "#5b1136", cursor: "pointer" }}
              />
            </motion.button>
          </div>
          <ul>
            {job.description.map((item) => (
              <li className="body-sub">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
