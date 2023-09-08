import { DatePicker } from "antd";
import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import moment from "moment";
import { FiCalendar } from "react-icons/fi";
import { setSingleDate } from "../../redux/modules/dates/actions";

export default () => {
  const { singleDate } = useSelector((state) => state.selectedDateReducer);
  const dispatch = useDispatch();

  const handleChangeDateInput = (_, dateString) => {
    const data = moment(dateString).format("YYYY-MM-DD");
    dispatch(setSingleDate(data));
  };

  return (
    <div className="d-picker">
      <div className="range-text">
        <FiCalendar style={{ fontSize: "18px", marginRight: "10px" }} /> Ҳисобот
        даври{" "}
      </div>
      <DatePicker
        defaultValue={moment(singleDate)}
        format="DD MMM YYYY"
        onChange={handleChangeDateInput}
      />
    </div>
  );
};
