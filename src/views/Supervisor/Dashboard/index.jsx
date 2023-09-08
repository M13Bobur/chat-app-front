import { Col, Row, Segmented } from "antd";
import React, { useEffect, useState } from "react";
import { cardData, getHour, getMonthName } from "./helper";
import {
  Card,
  CardItem,
  ChartCard,
  ChartCardHeader,
  IconContainer,
  Text,
} from "./style";
import { colors } from "../../../constants/colors";
import { Pie } from "@ant-design/plots";
import { Area } from "@ant-design/plots";
import service from "../../../services/reports";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState({ day: moment().format("YYYY-MM-DD") });
  const [areaData, setAreaData] = useState([]);
  const { data } = useSelector((state) => state.worksReducer);
  const getData = data;
  const makeData = (key, data) => {
    if (key == "day") {
      let days = Array.from({ length: 24 }).map((_, ind) => ({
        time: ind,
        value: 0,
      }));
      let dat = days.map((item) => {
        let foo = data?.filter((itm) => itm.time == item.time);

        if (foo?.length == 0) {
          return { time: getHour(item.time), value: item.value };
        } else {
          return { time: getHour(item.time), value: foo[0]?.value };
        }
      });
      setAreaData(dat);
    } else if (key == "month") {
      let count = moment().daysInMonth();
      let months = Array.from({ length: count }).map((_, ind) => ({
        time: ind + 1,
        value: 0,
      }));
      let mon = months.map((item) => {
        let foo = data?.filter((itm) => itm.time == item.time);
        if (foo?.length == 0) {
          return item;
        } else {
          return { time: item.time, value: foo[0]?.value };
        }
      });
      setAreaData(mon);
    } else {
      let years = Array.from({ length: 12 }).map((_, ind) => ({
        time: ind,
        value: 0,
      }));
      let yer = years.map((item) => {
        let foo = data?.filter((itm) => itm.time == item.time);
        if (foo?.length == 0) {
          return { time: getMonthName(item.time), value: item.value };
        } else {
          return { time: getMonthName(item.time), value: foo[0]?.value };
        }
      });
      setAreaData(yer);
    }
  };

  useEffect(() => {
    service.getAreaCharts(time).then((res) => {
      makeData(Object.keys(time)[0], res);
    });
  }, [time]);

  const getChartData = (t) => {
    let color = [];
    let d = cardData
      .filter((itm) => itm?.type !== "total")
      .map((item) => {
        color.push(colors[item.status]);
        return {
          type: item.title,
          value: getData[item?.type],
        };
      });
    if (t === "data") {
      return d;
    } else {
      return color;
    }
  };

  const pieConfig = {
    appendPadding: 10,
    data: getChartData("data"),
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    legend: {
      layout: "horizontal",
      position: "bottom",
      maxRow: 3,
    },
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },

    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
    color: getChartData(),
  };

  const areaConfig = {
    data: areaData,
    xField: "time",
    yField: "value",
    xAxis: {
      label: {
        rotate: -Math.PI / 4,
        offset: 18,
        autoHide: false,
      },
    },
  };

  const onChangeTime = (item) => {
    let t = moment().format("YYYY-MM-DD");
    if (item == "Кун") {
      setTime({ day: t });
    } else if (item == "Ой") {
      setTime({ month: t });
    } else {
      setTime({ year: t });
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <Row gutter={[20, 20]}>
        {cardData?.map(
          ({ title, type, icon: Icon, status = "", path }, ind) => (
            <Col lg={8} xl={6} xxl={4} key={ind + 1}>
              <Card
                color={colors[`${status}`]}
                point={path ? true : false}
                onClick={() => (path ? navigate(path) : null)}
              >
                <CardItem>
                  <div>{title}</div>
                  <Text color={colors[`${status}`]}>{getData[type]}</Text>
                </CardItem>
                <CardItem>
                  <IconContainer color={colors[`${status}`]}>
                    <Icon size={25} />
                  </IconContainer>
                </CardItem>
              </Card>
            </Col>
          )
        )}
      </Row>

      <Row gutter={[20, 20]} style={{ marginTop: "40px" }}>
        <Col span={10}>
          <ChartCard>
            <ChartCardHeader>
              <div>Мурожаатлари таҳлили</div>
            </ChartCardHeader>

            <Pie {...pieConfig} />
          </ChartCard>
        </Col>
        <Col span={14}>
          <ChartCard>
            <ChartCardHeader>
              <div>Мурожаатлар келиб тушиш статистикаси</div>
              <Segmented
                options={["Кун", "Ой", "Йил"]}
                onChange={(e) => onChangeTime(e)}
              />
            </ChartCardHeader>
            <Area {...areaConfig} />
          </ChartCard>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
