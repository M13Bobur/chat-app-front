import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import React, { useEffect, useState } from "react";

export default ({ imageProps }) => {
  const { fileList, setFileList } = imageProps;
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    if (imageList) {
      setFileList(imageList);
    }
  }, [imageList]);
  const removeImage = (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setImageList(newFileList);
  };
  const handleCHangeImage = (file) => {
    setImageList((prev) => [...prev, file]);
    return false;
  };
  return (
    <>
      <Upload
        action=""
        onRemove={removeImage}
        fileList={imageList}
        beforeUpload={handleCHangeImage}
      >
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
    </>
  );
};
