import { Image } from "antd";
import React, { useState } from "react";
import "./style.css";
const ImageBox = ({ image }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Image
        preview={{
          visible: false,
        }}
        rootClassName="image"
        src={image}
        onClick={() => setVisible(true)}
      />
      <div
        style={{
          display: "none",
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          <Image src={image} />
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default React.memo(ImageBox);
