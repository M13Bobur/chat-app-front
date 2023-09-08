import React from "react";
import jwt_decode from "jwt-decode";
import { Container, Content } from "./style";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminNavbar from "../../views/Admin/AdminNavbar";

export default () => {
  const { token } = useSelector((state) => state.authReducer);
  const { role } = jwt_decode(token);

  return (
    <>
      <Container>
        {role !== "admin" ? <Navbar /> : <AdminNavbar />}
        <Content bg={role === "admin" ? "#fff" : "#f6f7f8"}>
          <Outlet />
        </Content>
      </Container>
    </>
  );
};
