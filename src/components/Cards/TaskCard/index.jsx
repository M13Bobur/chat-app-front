import React, { useState, useEffect } from "react";
import { Container, MainTitle, Title, Body } from "./style";
import MapY from "../../Map/MapModal";
import ImageBlock from "./ImageGallery";
import { useShowModal } from "../../../hooks";
import Description from "./Description";
import CardTitle from "./CardMainTitle/index";

import WorkFooter from "./WorkFooter";
import MapModal from "components/MapModal";

const TaskCard = ({
  data = {},
  medium,
  titleLeft,
  canDeleteImage,
  handleDescription,
  errorHelper,
  description,
  allowEdit,
  borderLess,
}) => {
  const { showBlured } = useShowModal();
  const [mainImage, setMainImage] = useState({});
  const [geoLocation, setGeoLocation] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (
      data?.media !== undefined &&
      data?.media !== null &&
      data?.media?.length > 0
    ) {
      setMainImage(data?.media && data?.media[0]);
    }

    if (data?.location) {
      const { latitude, longitude } = data.location;
      setGeoLocation([latitude, longitude]);
    }
  }, [data]);

  const handleShowModal = () => {
    setModalOpen(!modalOpen);
  };

  const checkActive = (image) => {
    if (image === mainImage?.image) return true;
  };

  const handleMainImage = (image) => {
    setMainImage(image);
  };
  return (
    <Container medium={medium} borderLess={borderLess}>
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
        />
        <WorkFooter
          borderB
          data={data}
          disabledCheckbox
          handleShowModal={handleShowModal}
        />
      </Body>
      <Description
        allowEdit={allowEdit}
        handleShowModal={handleShowModal}
        mainworkData={data?.title}
        medium={medium}
        workId={data?._id}
        title={data?.subCategory?.title}
        value={description}
        onChange={handleDescription}
        errorHelper={errorHelper}
      />
      {modalOpen && (
        <MapModal
          url={geoLocation}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
    </Container>
  );
};

export default React.memo(TaskCard);
