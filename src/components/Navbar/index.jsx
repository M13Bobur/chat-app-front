import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RightOptions from "./RightOptions";
import { Content } from "./style";
import { clearToken } from "../../redux/modules/auth/actions";
import { clearSelectedDate } from "../../redux/modules/dates/actions";
import { clearNewWorksTotal } from "../../redux/modules/works/actions";
import Clock from "components/RealtimeDate";

export default () => {
  const dispatch = useDispatch();
  const { fullname, role } = useSelector((state) => state.authReducer);
  const handleLogout = () => {
    dispatch(clearToken());
    dispatch(clearNewWorksTotal());
    dispatch(clearSelectedDate());
  };

  return (
    <Content>
      <span
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "20px",
          color: "#0E0908",
        }}
      >
        <Clock />
      </span>

      <RightOptions handleLogout={handleLogout} user={fullname} />
    </Content>
  );
};
