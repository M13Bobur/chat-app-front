import React, { useState, useEffect } from "react";
import { Container, MainTitle, Title, Body, RatingBox } from "./style";
import MapY from "../../../Map/MapModal";
import ImageBlock from "../Contents/ImageGallery";
import { useShowModal } from "../../../../hooks";
import Description from "../Contents/Description";
import WorkRating from "../Contents/WorkRating";
import CardTitle from "../Contents/CardMainTitle/index";

const SupervisorCard = ({
  data = {},
  medium,
  titleLeft,
  canDeleteImage,
  handleDeleteImage,
  handleDescription,
  errorHelper,
  checkList,
  bal,
  handleChecklist,
  rate,
}) => {
  const [geoLocation, setGeoLocation] = useState([]);
  const [mainImage, setMainImage] = useState({});

  const { showBlured } = useShowModal();
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
    } else {
      setGeoLocation("40.5 71.25");
    }
  }, [data]);

  const handleShowModal = () => {
    showBlured({
      title: "Тадбир ўтказилган жой",
      maxWidth: "1200px",
      height: "600px",
      withHeader: false,
      body: () => <MapY latLang={geoLocation} />,
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
      <MainTitle titleLeft={titleLeft}>
        <Title titleLeft={titleLeft}>
          <CardTitle data={data} />
        </Title>
      </MainTitle>
      <Body medium={medium}>
        <ImageBlock
          medium={medium}
          imageData={data}
          checkActive={checkActive}
          handleMainImage={handleMainImage}
          mainImage={mainImage}
          canDeleteImage={canDeleteImage}
          deleteImage={handleDeleteImage}
        />
        <Description
          handleShowModal={handleShowModal}
          mainData={data?.desc}
          medium={medium}
          workId={data?._id}
          title={data?.subCategoryName}
          value={data?.desc}
          onChange={handleDescription}
          errorHelper={errorHelper}
        />
      </Body>
      <RatingBox>
        <WorkRating
          data={checkList}
          bal={bal}
          selectedRates={rate}
          disabled={data?.rate && true}
          onChange={handleChecklist}
          handleShowModal={handleShowModal}
          workId={data?._id}
          currentWork={data}
        />
      </RatingBox>
    </Container>
  );
};

export default React.memo(SupervisorCard);
