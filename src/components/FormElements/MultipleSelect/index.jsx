import { InfoCircleFilled } from "@ant-design/icons";
import { Select } from "antd";
import React from "react";
const { Option } = Select;

const MultipleSelect = ({
  onChange,
  placeholder,
  defaultVal,
  className,
  data = [],
  id,
  disabled,
  status,
}) => {
  return (
    <Select
      // mode="multiple"
      status={status}
      allowClear
      showSearch
      prefix={<InfoCircleFilled />}
      disabled={disabled}
      style={{
        width: "100%",
      }}
      className={className}
      placeholder={placeholder}
      value={defaultVal}
      onChange={(e) => onChange(e, id)}
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
    >
      {data?.map((item) => {
        return <Option key={item?._id}>{item?.title}</Option>;
      })}
    </Select>
  );
};

export default MultipleSelect;
