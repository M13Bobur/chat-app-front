import React from "react";

const Task = ({ title, value, color, small, className }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",        
        paddingLeft: "10px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: small ? "24px" : "32px",
          lineHeight: "120%",
          color: color,
        }}
      >
        {value}
      </h3>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: small ? "8.5px" : "14px",
          lineHeight: small ? "11px" : "15px",
          color: "#A8A8A8",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default Task;
