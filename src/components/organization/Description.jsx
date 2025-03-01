import React, { useEffect } from "react";
import "../../pages-css/Projects.css";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Description({ icon, section, title, desc, yes }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="descriptions" style={{ marginBottom: "0px" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        {icon ? (
          <img
            loading="lazy"
            alt="img"
            src={icon}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <></>
        )}
        <h4 className="section">{section}</h4>
      </div>
      {/* <div style={{display:"grid", gridTemplateColumns: "1fr 1fr"}}> */}
      <div>
        {title ? (
          <h4 className="job-header" style={{ paddingBottom: "20px" }}>
            {title}
          </h4>
        ) : (
          <></>
        )}

        {/* <hr style={{ width: "100%" }} /> */}

        <div
          style={{
            display: "flex",
            flexDirection: yes ? "row" : "column",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "flex-start",
            }}
          >
            {desc.map((p, index) => {
              return <>{p}</>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
