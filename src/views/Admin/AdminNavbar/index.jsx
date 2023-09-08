import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Text,
  Content,
  RightContent,
  LeftContent,
  Menu,
  MenuItem,
} from "./style";
import { Button } from "antd";
import logo from "../../../assets/gerb.png";
import { clearToken } from "../../../redux/modules/auth/actions";

import { useNavigate } from "react-router-dom";
import { clearSelectedDate } from "../../../redux/modules/dates/actions";
import Logo from "../../../components/Logo";

export default () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isActive, setIsActive] = useState(1);
  const navigate = useNavigate();

  const data = [
    { key: 1, title: "Ҳудуд", href: "/" },
    { key: 2, title: "Сектор", href: "/sectors" },
    { key: 3, title: "Категория", href: "/category" },
    { key: 4, title: "Обектлар", href: "/object" },
    { key: 5, title: "Фойдаланувчилар", href: "/users" },
    { key: 6, title: "Телеграм гуруҳ", href: "/tgroups" },
    // { key: 6, title: "Статистика", href: "/statistica" },
  ];

  const handlePage = (key, href) => {
    setIsActive(key);
    navigate(href);
  };

  useEffect(() => {
    setIsActive(data?.find((item) => item.href === location.pathname)?.key);
  }, [location]);

  const handleLogOut = () => {
    dispatch(clearToken());
    dispatch(clearSelectedDate());
  };

  return (
    <Content>
      <LeftContent>
        {/* <Logo /> */}
        <Text>АДМИН ПАНЕЛ ТЕЗКОР ЕЧИМ</Text>
        <Menu>
          {data.map((item, index) => (
            <MenuItem
              key={index + 1}
              isActive={isActive === item.key}
              onClick={() => {
                handlePage(item.key, item.href);
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      </LeftContent>
      <RightContent>
        {" "}
        <Button
          onClick={() => handleLogOut()}
          style={{ background: "none", border: "none" }}
          shape="circle"
          icon={<FiLogOut color="#00b5e4" size="25" />}
        />
      </RightContent>
    </Content>
  );
};
