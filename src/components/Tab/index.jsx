import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { NavLink } from "react-router-dom";
import { governorTabs, secretaryTabs } from "./helper";
import { Badge, DatePicker } from "antd";
import moment from "moment";
import {
  setSelectedDate,
  setSingleDate,
} from "../../redux/modules/dates/actions";
import { useLocation } from "react-router-dom";
import MultiDatePicker from "../FormElements/MultiDatePicker";
import { useState } from "react";

export default () => {
  const { role } = useSelector((state) => state.authReducer);
  const { total } = useSelector((state) => state.worksReducer);
  const { selectedDate, singleDate, determinedDate, hideRange } = useSelector(
    (state) => state.selectedDateReducer
  );
  const [selectDate, setSelectDate] = useState();

  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;
  const location = useLocation();
  const handleChangeDateInput = (_, dateString) => {
    dispatch(setSelectedDate(dateString));
  };
  const onChangeDatepicker = (_, dateString) => {
    dispatch(setSingleDate(dateString));
  };
  const onChangeSelect = (dateString) => {
    dispatch(setSingleDate(dateString));
    setSelectDate(dateString);
  };

  const tabItems = {
    governor: governorTabs,
    groupsecretary: secretaryTabs,
    groupadmin: secretaryTabs,
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <div className="tab-nav">
          {tabItems[role].map((item, index) => (
            <Badge
              style={{
                zIndex: 10,
                top: 10,
                // height: "auto",
                padding: "5px 7px",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
              key={`${index + 1}`}
              count={item.href.match("/new-works") && total}
              to={item.href}
              className={({ isActive }) =>
                isActive ? "active-tabs-container" : "tabs"
              }
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "active-tabs-container" : "tabs"
                }
              >
                {item.title}
              </NavLink>
            </Badge>
          ))}
        </div>
        <div className="right-datepicker">
          {location.pathname !== "/search" && hideRange && <p>Ҳисобот даври</p>}
          {location.pathname === "/daily-rating" ||
          location.pathname === "/sent-works" ? (
            <DatePicker
              onChange={onChangeDatepicker}
              // value={selectedDate[0]}
              defaultValue={moment(singleDate)}
            />
          ) : location.pathname !== "/search" &&
            location.pathname !== "/new-works" &&
            hideRange ? (
            <RangePicker
              defaultValue={[moment(selectedDate[0]), moment(selectedDate[1])]}
              onChange={handleChangeDateInput}
              format="YYYY-MM-DD"
            />
          ) : null}
          {location.pathname === "/new-works" && (
            <MultiDatePicker
              dates={determinedDate ? determinedDate : []}
              onChange={onChangeSelect}
              startDate={moment(singleDate)._d}
            />
          )}
        </div>
      </div>
    </div>
  );
};
