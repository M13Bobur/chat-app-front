import React from "react";
import { Button } from "./style";

export default ({ text, addData }) => {
  const handleClick = () => {
    addData();
  };
  return <Button onClick={() => handleClick()}> {`${text} қўшиш`} </Button>;
};
