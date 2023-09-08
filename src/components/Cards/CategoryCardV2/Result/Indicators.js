import React from "react";
import "./line.css";

const Result = ({ title, color, percent, small }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px",
        fontStyle: "normal",
        // fontWeight: 500,
        color: " #A8A8A8",
        fontSize: small ? "10px" : "13.0546px",
        lineHeight: "17px",
      }}
    >
      <a
        title={title}
        className="lineClamp"
        style={{ width: "50%", color: "inherit", cursor: "default" }}
      >
        {title}
      </a>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F7F7F7",
          height: "10px",
          borderRadius: "15px",
          position: "relative",
          top: 0,
          right: 0,
        }}
      >
        <span
          style={{
            backgroundColor: color,
            borderRadius: "15px",
            position: "absolute",
            top: 0,
            left: 0,
            width: `${percent}%`,
            height: "100%",
          }}
        />
      </div>

      <span style={{ width: "20%" }}>{percent}%</span>
    </div>
  );
};

export default Result;
