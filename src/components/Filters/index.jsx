import React from "react";
import { Button } from "antd";
import { Wrapper } from "./style";

const Filters = ({ list = [], handleActive, active }) => {
  return (
    <Wrapper>
      {list.map(({ title, value, id }, ind) => (
        <Button
          key={`${ind + 1}`}
          type="primary"
          size="large"
          style={{
            backgroundColor: active != value ? "#fff" : "rgb(51, 128, 255)",
            color: active != value ? "rgb(51, 128, 255)" : "rgb(255,255,255)",
            border: active != value ? "1px solid #f0f0f0" : "none",
            borderRadius: "10px",
          }}
          onClick={() => handleActive({ value, id })}
        >
          {title}
        </Button>
      ))}
    </Wrapper>
  );
};

export default React.memo(Filters);
