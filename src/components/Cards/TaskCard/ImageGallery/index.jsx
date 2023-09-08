import React from "react";
import moment from "moment";
import {
  MainImage,
  ImageList,
  ImageThumbnail,
  ImagesBlock,
  ImageDate,
} from "./style";
import NO_Image from "assets/images/no_photo.png";
// import VideoFrame from "assets/images/effect_blur.jpg";

import Image from "../Image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useHideModal, useShowModal } from "hooks/modal";
import Confirm from "../../../Confirm";
// import ModalPlayer from "components/ModalPlayer";
import { useState } from "react";
// import { PlayCircleOutlined } from "@ant-design/icons";

const ImagesContainer = ({
  imageData = {},
  mainImage = {},
  handleMainImage,
  checkActive,
  medium,
  width,
  canDeleteImage,
  deleteImage,
}) => {
  const { showBlured } = useShowModal();
  const { hideModal } = useHideModal();

  const dateFormatter = (time) => {
    return moment(time).format("DD.MM.YYYY HH:mm");
  };

  const handleDeleteImage = (image) => {
    showBlured({
      title: "Расмни олиб ташлаш",
      maxWidth: "400px",
      height: "400px",
      withHeader: false,
      body: () => (
        <Confirm agree={() => deleteImage(image)} cancel={hideModal} />
      ),
    });
  };

  return (
    <>
      <ImagesBlock medium={medium}>
        <MainImage medium={medium} width={width}>
          {Object.keys(mainImage).length > 0 ? (
            <>
              <Image
                image={`${mainImage?.image}`}
                images={imageData?.media}
                alt={`image ${mainImage?.image}`}
              />
              {/* <ImageDate active>{dateFormatter(mainImage?.time)}</ImageDate> */}
              {canDeleteImage && (
                <button
                  className="deleteBtn"
                  onClick={() => handleDeleteImage(mainImage)}
                >
                  <AiOutlineCloseCircle />
                </button>
              )}
            </>
          ) : (
            <>
              <img src={NO_Image} alt="no_image" />
            </>
          )}
        </MainImage>
        {/* <ImageList medium={medium}>
          {imageData !== undefined && imageData?.media?.length > 0 ? (
            <>
              {imageData?.media?.map((item, index) => (
                <ImageThumbnail
                  onClick={() => handleMainImage(item)}
                  key={index}
                  active={checkActive(item.image)}
                >
                  <img
                    width="100%"
                    height="100%"
                    loading="lazy"
                    src={`${item?.image}`}
                    alt={`img file ${item?.image}`}
                  />
                </ImageThumbnail>
              ))}
            </>
          ) : (
            <ImageThumbnail
              onClick={() => {}}
              // key={index}
              active={checkActive(false)}
            >
              <img
                width="100%"
                height="100%"
                src={NO_Image}
                alt="no_images list"
              />
            </ImageThumbnail>
          )}
        </ImageList> */}
      </ImagesBlock>
    </>
  );
};

export default React.memo(ImagesContainer);
