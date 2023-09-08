import React from "react";
import { List, Wrapper } from "./style";

const MainTitle = ({ data }) => {
  return (
    <Wrapper>
      <div className="line1">
        <List align="start">
          <p>Туман :</p>
          <p>{data?.regionName ?? ""}</p>
        </List>
        <List align="start">
          <p>Ф.И.Ш :</p>
          <p>{data?.userName ?? ""}</p>
        </List>
      </div>
      <div className="line2">
        <List align="end">
          <p>Гуруҳ :</p>
          <p>{data?.groupName ?? ""}</p>
        </List>
        <List align="end">
          <p>#ID:</p>
          <p>{data?.workId ?? ""}</p>
        </List>
      </div>
    </Wrapper>
  );
};

export default MainTitle;
