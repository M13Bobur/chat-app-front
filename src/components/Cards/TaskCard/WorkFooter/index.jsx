import moment from "moment";
import React from "react";
import { getColor } from "utils/getColor";
import { getStatus } from "utils/statusMaker";
import MapButton from "../../../Map";
import { FlexBox, WorkInfo } from "./style";

const WorkFooter = ({ handleShowModal, data = {} }) => {
  const actions = [
    // {
    //   id: 0,
    //   label: "Ташкилот номи:",
    //   value: data?.user?.organization ?? "-",
    //   isBlue: false,
    //   show: true,
    // },
    {
      id: 3,
      label: "Келиб тушган кун:",
      value: data?.createdAt
        ? moment(data?.createdAt).format("DD.MM.YYYY HH:mm")
        : "-",
      isBlue: false,
      show: true,
    },
    {
      id: 5,
      label: "Мурожаат холати",
      value: getStatus(data.status),
      isBlue: false,
      show: true,
      color: getColor(data.status),
    },
    {
      id: 2,
      label: "Манзил:",
      value: data?.address ?? "-",
      isBlue: false,
      show: true,
    },
    {
      id: 0,
      label: "Ижро учун белгиланган вақт(соат) :",
      value: data?.subCategory?.deadline ?? "-",
      isBlue: false,
      show: data?.subCategory?.deadline ? true : false,
    },
    {
      id: 1,
      label: "Ижро муддати :",
      value: data?.subCategory?.deadline
        ? moment(data?.startDate)
            .add(Number(data?.subCategory?.deadline), "hours")
            .format("DD.MM.YYYY, HH:mm")
        : "-",
      isBlue: false,
      show: data?.startDate ? true : false,
    },

    // {
    //   id: 6,
    //   label: "Модератор томонидан қўйилган балл",
    //   value: data?.rate,
    //   isBlue: true,
    //   show: data?.rateTime && true,
    // },
  ];
  return (
    <>
      {data !== undefined ? (
        <WorkInfo>
          <FlexBox gap="0">
            {actions.map(
              (action, index) =>
                action.show && (
                  <div key={`${index + 1}`} className="section">
                    <span className="text">{action.label}</span>
                    <span
                      className={`${action?.isBlue ? "blueText" : ""} value`}
                      style={action?.color && { color: `${action.color}` }}
                    >
                      {action.value}
                    </span>
                  </div>
                )
            )}

            <div className="section">
              <span className="text">Харитада кўриш</span>
              <div className="value">
                <MapButton noTitle smaller handleShowModal={handleShowModal} />
              </div>
            </div>
          </FlexBox>
        </WorkInfo>
      ) : (
        <>No data</>
      )}
    </>
  );
};

export default React.memo(WorkFooter);
