import React from "react";
import { getColor } from "../../../utils/getColor";
import "./style.css";

export default ({ persent }) => {
  return (
    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
      <div className="bg-box">
        <div
          className="color-box"
          style={{
            backgroundColor: getColor(persent),
            width: Math.round(persent) + "%",
          }}
        ></div>
      </div>
      <div className="percent">{Math.round(persent)}%</div>
    </div>
  );
};
