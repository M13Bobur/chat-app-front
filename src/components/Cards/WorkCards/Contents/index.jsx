import React, { useState, useEffect } from "react";
import { Container, MainTitle, Title, Body, RatingBox } from "./style";
import MapY from "../../Map/MapModal";
import ImageBlock from "./ImageGallery";
import { useHideModal, useShowModal } from "../../../hooks";
import Description from "./Description";
import WorkRating from "../../WorkRating";
import CardTitle from "./CardMainTitle/index";

import WorkFooter from "./WorkFooter";

import { FlexBox, Rate, WorkInfo } from "./WorkFooter/style";

const TaskCard = ({
  data = {},
  medium,
  noTitle,
  titleLeft,
  canDeleteImage,
  handleDeleteImage,
  handleDescription,
  errorHelper,
  checkList,
  bal,
  handleChecklist,
  noCheckLIst,
  readOnlyFooter,
  withRate,
}) => {
  const { showBlured } = useShowModal();
  // const { role } = useSelector((state) => state.authReducer);
  const [mainImage, setMainImage] = useState({});
  const [geoLocation, setGeoLocation] = useState([]);

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
        {!noTitle && (
          <Title titleLeft={titleLeft}>
            {/* {`${data?.regionName} ${data?.groupName} раҳбари ${data?.userName} томонидан бажарилган ишлар`} */}
            <CardTitle data={data} />
          </Title>
        )}
      </MainTitle>
      <Body medium={medium}>
        <ImageBlock
          // width="550"
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
          mainData={data.desc}
          medium={medium}
          workId={data._id}
          title={data?.subCategoryName}
          value={data?.desc}
          onChange={handleDescription}
          errorHelper={errorHelper}
        />
      </Body>
      {!noCheckLIst && (
        <RatingBox>
          <WorkRating
            data={checkList}
            bal={bal}
            disabled={data?.rate && true}
            onChange={handleChecklist}
            handleShowModal={handleShowModal}
            workId={data?._id}
            currentWork={data}
          />
        </RatingBox>
      )}

      {readOnlyFooter && (
        <WorkFooter
          borderB
          data={data}
          disabledCheckbox
          handleShowModal={handleShowModal}
        />
      )}

      {withRate && (
        <RatingBox>
          <FlexBox gap="150" style={{ alignItems: "center" }}>
            <div style={{ display: "flex" }}>
              <div style={{ fontSize: "25px", fontWeight: "700" }}>
                <span>Модератор томонидан қўйилган балл</span>
              </div>
            </div>
            <div>
              <Rate>{data?.rate}</Rate>
            </div>
          </FlexBox>

          <div
            style={{
              fontSize: "25px",
              fontWeight: "700",
              textAlign: "left",
              width: "100%",
            }}
          >
            Модератор томонидан қўйилган баллга изоҳ
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "400",
              textAlign: "left",
              width: "100%",
            }}
          >
            {data?.rateComment ?? "Изохлар йўқ!"}
          </div>
        </RatingBox>
      )}
    </Container>
  );
};

export default React.memo(TaskCard);
