import React from "react";

import {
  Descriptions,
  DescriptionText,
  DescriptionTitle,
  FooterDescription,
} from "./style";

const Description = ({ mainworkData = "", medium, title }) => {
  return (
    <FooterDescription medium={medium}>
      <Descriptions>
        <DescriptionTitle>{title}</DescriptionTitle>
        <DescriptionText medium={medium}>
          <div>{mainworkData ? mainworkData : "Изохлар йўқ!"}</div>
        </DescriptionText>
      </Descriptions>
    </FooterDescription>
  );
};

export default Description;
