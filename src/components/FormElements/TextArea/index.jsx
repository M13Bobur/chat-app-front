import { memo } from "react";
import { Input } from "antd";
const { TextArea } = Input;

const TextAutoSize = ({ placeholder, descriptionValue, handleDescription }) => {
  return (
    <>
      <TextArea
        value={descriptionValue}
        onChange={handleDescription}
        placeholder={placeholder}
        autoSize={{
          minRows: 2,
          maxRows: 5,
        }}
      />
    </>
  );
};

export default memo(TextAutoSize);
