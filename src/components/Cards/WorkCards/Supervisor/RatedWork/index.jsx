import React, { useState, useEffect } from "react";
import { Container, Body, MainTitle, Title, RateComment } from "./style";
import ImageBlock from "../../Contents/ImageGallery";

import Description from "../../Contents/Description";
import MapModal from "../../../../Map/MapModal";
import { useShowModal } from "../../../../../hooks";
import WorkFooter from "../../Contents/WorkFooter";
import CardTitle from "../../Contents/CardMainTitle/index";
import { Tag } from "antd";

const TaskCard = ({ data = {}, medium, noTitle, objectsList }) => {
  const { showBlured } = useShowModal();
  const [mainImage, setMainImage] = useState({});
  const [geoLocation, setGeoLocation] = useState("");

  useEffect(() => {
    if (
      data?.media !== undefined &&
      data?.media !== null &&
      data?.media?.length > 0
    ) {
      const latLng = [data?.media[0]?.lat, data?.media[0]?.lng];
      if (latLng !== undefined && latLng !== null) {
        setGeoLocation(latLng);
        setMainImage(data?.media && data?.media[0]);
      }
    }
  }, [data]);

  const handleShowModal = () => {
    showBlured({
      title: "Тадбир ўтказилган жой",
      maxWidth: "1200px",
      height: "600px",
      withHeader: false,
      body: () => <MapModal latLang={geoLocation} />,
    });
  };

  const checkActive = (image) => {
    if (image === mainImage?.image) return true;
  };

  const handleMainImage = (image) => {
    const latLng = [image?.lat, image?.lng];
    setGeoLocation(latLng);
    setMainImage(image);
  };

  return (
    <Container medium={medium}>
      {!noTitle && (
        <MainTitle>
          <Title>
            <CardTitle data={data} />
          </Title>
        </MainTitle>
      )}
      <Body medium={medium}>
        <ImageBlock
          medium={medium}
          imageData={data}
          checkActive={checkActive}
          handleMainImage={handleMainImage}
          mainImage={mainImage}
        />
        <Description
          handleShowModal={handleShowModal}
          mainData={data.desc}
          medium={medium}
          workId={data._id}
          title={data?.subCategoryName}
          value={data?.desc}
        />
      </Body>

      <WorkFooter
        data={data}
        disabledCheckbox
        handleShowModal={handleShowModal}
      />
      <RateComment>
        <ul className="description">
          {data?.rateComment?.length > 0 ? (
            data?.rateComment
              .split("/")
              .map((rate, indx) => <li key={`${indx + 1}`}>{rate}</li>)
          ) : (
            <span>Критериялар танланмаган...!</span>
          )}
        </ul>
        {objectsList.length > 0 && (
          <div className="tags-box">
            <div className="text">Объект:</div>
            <div className="tags">
              {objectsList?.map((item, indx) => (
                <div className="tag" key={`${indx + 1}`}>
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        )}
      </RateComment>
    </Container>
  );
};

export default React.memo(TaskCard);
