import moment from "moment";
import React from "react";
import MapButton from "../../../../Map";
import { FlexBox, Rate, WorkInfo } from "./style";

const WorkFooter = ({ handleShowModal, data, hideLocation = false }) => {
  const actions = [
    {
      id: 1,
      label: "Дозарб этиб белгиланган кун:",
      value: data?.imDate ? moment(data?.imDate).format("DD.MM.YYYY") : "-",
    },
    {
      id: 2,
      label: "Назоратчи:",
      value: "Усмонов Самад Самадович",
    },
    {
      id: 3,
      label: "Бажарилган кун:",
      value: data?.createdAt
        ? moment(data?.createdAt).format("DD.MM.YYYY")
        : "-",
    },
    {
      id: 5,
      label: "Бахоланган сана",
      value: data?.rateTime ? moment(data?.rateTime).format("DD.MM.YYYY") : "-",
    },    
  ];
  return (
    <>
      {data !== undefined ? (
        <WorkInfo>
          <FlexBox gap="0" direction="row">
            <div className="left-states">
              {actions.map((action, index) => (
                <div key={`${index + 1}`} className="section">
                  <span className="text">{action.label}</span>
                  <span className="value">{action.value}</span>
                </div>
              ))}
            </div>
            <div className="right-states">
              <div className="actions-states">
                <div className="rate">
                  <h3>Модератор томонидан қўйилган балл</h3>
                  <Rate>{data?.rate}</Rate>
                </div>
                {!hideLocation && (
                  <MapButton
                    noTitle
                    smaller
                    handleShowModal={handleShowModal}
                  />
                )}
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
