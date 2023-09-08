import React from "react";
import { Select } from "antd";
import { Wrapper, Title } from "./style";

const { Option } = Select;

export default ({
  handleChange,
  options = [],
  title = "",
  defaultVal,
  disabled,
  id,
  name,
  status,
  size,
  objSelect,
}) => {
  return (
    <Wrapper>
      <Title level={5}>{title}</Title>
      {objSelect == undefined ? (
        <Select
          allowClear
          size={size}
          status={status}
          dropdownStyle={{
            borderRadius: "10px",
          }}
          // style={{
          //   minWidth: 200,
          // }}
          name={name}
          disabled={disabled}
          value={defaultVal}
          onChange={(e) => handleChange(e, id)}
        >
          {options.map((item, idx) => (
            <Option key={`${idx + 1}`} value={item._id ?? item.title}>
              {item.title}
            </Option>
          ))}
        </Select>
      ) : (
        <Select
          style={{
            minWidth: 200,
            border: "none",
          }}
          allowClear
          showSearch
          optionFilterProp="children"
          onChange={(value) => {
            handleChange(value);
          }}
          value={defaultVal}
          // onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {options?.map((item) => {
            return <Option key={item?._id}>{item?.title}</Option>;
          })}
        </Select>
      )}
    </Wrapper>
  );
};
