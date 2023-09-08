import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import "./style.css";
const ImageBox = ({ image, images }) => {
  const [visible, setVisible] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const countHandler = (file) => {
    let current;
    images.forEach((item, indx) => {
      if (item.image === file) {
        current = indx;
      }
    });
    return current;
  };
  const handlePreview = (image) => {
    if (image) {
      setActiveImage(image);
      setVisible(true);
    }
  };
  return (
    <>
      <Row
        gutter={[14, 10]}
        justify={images.length > 3 ? "center" : "start"}
        align="middle"
      >
        {images.map((item) => (
          <Col
            span={7}
            key={item.image}
            className="image__box"
            onClick={() => handlePreview(item?.image)}
          >
            <img className="image" src={item?.image} alt={`${image}asdasd`} />
          </Col>
        ))}
      </Row>

      <div
        style={{
          display: "none",
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            current: countHandler(activeImage),
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          {images?.map((item, index) => (
            <Image key={index + 1} src={item?.image} />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default React.memo(ImageBox);
