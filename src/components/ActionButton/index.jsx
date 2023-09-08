import React from "react";
import { BtnGroup } from "./style";
import { Button } from "antd";
import { AiOutlineRest, AiTwotoneEdit } from "react-icons/ai";

export default ({ handleEdit, handleDelete, props }) => {
  const handleClick = (type, key) => {
    if (type == "edit") {
      handleEdit(props);
    } else {
      handleDelete(key);
    }
  };
  return (
    <BtnGroup>
      <Button
        className="edit-btn"
        onClick={() => handleClick("edit", props._id)}
        shape="circle"
        icon={<AiTwotoneEdit size={25} />}
      ></Button>
      <Button
        className="del-btn"
        onClick={() => handleClick("delete", props._id)}
        shape="circle"
        icon={<AiOutlineRest size={25} danger="true" />}
      ></Button>
    </BtnGroup>
  );
};
