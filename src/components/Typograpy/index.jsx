import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default ({ children }) => (
  <Title
    style={{
      textAlign: "center",
      fontSize: "20px",
      fontFamily: "Roboto",
      fontWeight: "500",
      color: "#A8A8A8",
    }}
  >
    {children}
  </Title>
);
