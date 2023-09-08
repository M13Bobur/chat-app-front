import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import Logo from "../../assets/gerb1.png";

import "./style.css";
import { Button, Col, Input, Row, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import loginIcon from "../../assets/img/icon2.svg";
import userIcon from "../../assets/img/icon1.svg";
import logo from "../../assets//img/Vector.png";
import service from "../../services/auth";
import { useShowAlert } from "../../hooks";
import Spinner from "../../components/Spinner/FullScreen";
import Playmarket from "../../assets/icons/playmarket.svg";
import Appstore from "../../assets/icons/appStore.svg";
import {
  setToken,
  setRole,
  setUsername,
  setFullname,
  setRegionId,
  setgroupId,
  setProvinceId,
} from "../../redux/modules/auth/actions";
import works from "../../services/works";
import { setTotal } from "../../redux/modules/works/actions";

export default () => {
  const { error } = useShowAlert();
  const { total } = useSelector((state) => state.worksReducer);
  const { selectedDate } = useSelector((state) => state.selectedDateReducer);
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isFair, setIsFair] = useState(false);

  const checkRequest = (status) => {
    switch (status) {
      case 404:
        return "Логин топилмади";
      case 403:
        return "Парол киритишда хатолик!";
    }
  };
  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      username: login,
      password,
    };
    service
      .login(data)
      .then((resp) => {
        setLoading(false);
        const decodedToken = jwt_decode(resp.data.token);
        let fullname =
          decodedToken.title.lastName +
          " " +
          decodedToken.title.firstName +
          " " +
          decodedToken.title.middleName;
        localStorage.setItem("user_id", decodedToken._id);
        localStorage.setItem("access_token", resp.data.token);
        localStorage.setItem("role", decodedToken.role);
        localStorage.setItem("username", decodedToken.username);
        localStorage.setItem("fullname", fullname);
        localStorage.setItem("regionId", decodedToken.title.region);
        localStorage.setItem("groupId", decodedToken.title.group);
        localStorage.setItem("provinceId", decodedToken.title.province);
        dispatch(setToken(resp.data.token));
        dispatch(setRole(decodedToken.role));
        dispatch(setRegionId(decodedToken.title.region));
        dispatch(setProvinceId(decodedToken.title.province));
        dispatch(setgroupId(decodedToken.title.group));
        dispatch(setFullname(fullname));
        dispatch(setUsername(decodedToken.username));
        navigate("/", { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        error(
          checkRequest(err.response.status) ??
            "Алоқа билан боғлиқ хатолик! илтимос қайта уриниб кўринг",
          2,
          "topRight"
        );
      });
  };

  if (loading) return <Spinner />;
  return (
    <div className="wrapper">
      <nav className="top__nav">
        <div className="logo">
          <img src={Logo} alt="main_logo" />
        </div>
      </nav>
      <div className="login_area">
        <div className="login__title">
          <h2>Xush kelibsiz!</h2>
        </div>
        <div className="login_content">
          <form
            className="login__form"
            autoComplete="off"
            onSubmit={(e) => formHandler(e)}
          >
            <h3 className="form__title">Tizimga kirish!</h3>

            <div className="form__input">
              <Input
                className="input__mask"
                onChange={(e) => setLogin(e.target.value)}
                name="login"
                value={login}
              />
            </div>
            <div className="form__input">
              <Input.Password
                className="pass__input"
                placeholder="Парол"
                onChange={(e) => setPassword(e.target.value)}
                // className="input-field pass"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
            {/* <div className="fair__moda">
              <Switch
                style={{ backgroundColor: "#10AC84" }}
                defaultChecked={isFair}
                onChange={() => setIsFair(!isFair)}
              />
              <div>Ishonchli qurilma</div>
            </div> */}
            <Button
              htmlType="submit"
              className="login_btn"
              disabled={!(login.length && password.length) ? true : false}
            >
              Кириш
            </Button>
          </form>
        </div>
      </div>

      <div className="footer_text">
        <div className="bottom__info">
          <h3>
            Xar qanday topshiriq yoki xabarnoma nazoratda bo’lsagina natija
            beradi.
          </h3>
          <h2>BIZ SIZGA NATIJANI KAFOLATLAYMIZ!</h2>
        </div>
        <div className="left">
          <h3 className="m-0">Qo‘llab-quvvatlash xizmati</h3>
          <p className="m-0">+998 73 244 35 05</p>
          <p className="m-0">
            © 2022 Farg’ona viloyati “Elektron hokimiyatni rivojlantirish
            markazi” Barcha huquqlar ximoyalangan
          </p>
        </div>
      </div>
    </div>
  );
};
