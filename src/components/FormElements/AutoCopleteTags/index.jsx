import { memo } from "react";
import { Select } from "antd";
import "./style.css";
const { Option } = Select;

const SearchTagInput = ({
  tagsData = [],
  tagValue,
  handleSearchTags,
  handleChangeTags,
}) => {
  const options = tagsData.map((d) => <Option key={d.value}>{d.text}</Option>);
  return (
    <div className="tagsInput">
      <Select
        showSearch
        mode="tags"
        bordered={false}
        value={tagValue}
        placeholder="Теглар"
        style={{
          width: "100%",
        }}
        // defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={handleSearchTags}
        onChange={handleChangeTags}
      >
        {options}
      </Select>
    </div>
  );
};

export default memo(SearchTagInput);
