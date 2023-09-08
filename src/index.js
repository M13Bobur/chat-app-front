import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./root";
import { ConfigProvider } from "antd";
import en_GB from "antd/lib/locale-provider/en_GB";
import moment from "moment";
import "moment/locale/en-gb";
moment.locale("en-gb");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={en_GB}>
    <Root />
  </ConfigProvider>
);
reportWebVitals();
