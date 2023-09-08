import React from "react";
import moment from "moment";
import { MainImage, ImagesBlock, ImageDate } from "./style";
import NO_Image from "../../../../assets/images/no_photo.png";

import Image from "../Image";

const ImagesContainer = ({ mainImage, medium, width }) => {
  const dateFormatter = (time) => {
    return moment(time).format("DD.MM.YYYY HH:mm");
  };

  return (
    <ImagesBlock medium={medium}>
      <MainImage medium={medium} width={width}>
        {Object.keys(mainImage).length > 0 ? (
          <>
            <Image
              image={`${mainImage?.image}`}
              alt={`image ${mainImage?.image}`}
            />
            <ImageDate active>{dateFormatter(mainImage?.time)}</ImageDate>
          </>
        ) : (
          <>
            <img src={NO_Image} alt="no_image" />
          </>
        )}
      </MainImage>
    </ImagesBlock>
  );
};

export default React.memo(ImagesContainer);
