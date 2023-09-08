import React from "react";
import { List, Wrapper } from "./style";

const MainTitle = ({ data }) => {
  return (
    <Wrapper>
      <div className="line1">
        <List align="start">
          <p>Туман :</p>
          <p style={{ color: "#3380FF" }}>{data?.region?.title ?? ""}</p>
        </List>
        <List align="start">
          <p>Мурожаатчининг телефон рақами :</p>
          <p>{"+" + data?.phone ?? ""}</p>
        </List>
      </div>
      <div className="line2">
        {data?.sectorName && (
          <List align="end">
            <p>Сектор :</p>
            <p>{data?.sectorName}</p>
          </List>
        )}
        <List align="end">
          <p>#ID:</p>
          <p>{data?.workId ?? ""}</p>
        </List>
      </div>
    </Wrapper>
  );
};

export default MainTitle;
