import { Button, Col, Input, Row, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import Filters from "../../../components/Filters";
import Typograpy from "../../../components/Typograpy";
import Wrapper from "../../../components/Wrapper";
import { Box, Card, formSectorData } from "./helper";
import "./style.css";
import { AddContainer } from "../Users/style";
import AddButton from "../../../components/AddButton";
import ActionButton from "../../../components/ActionButton";
import { useHideModal, useShowAlert, useShowModal } from "../../../hooks";
import FormCreator from "../../../components/FormCreator";
import Confirm from "../../../components/Confirm";

import tgGroupService from "../../../services/tggroup";
import categoryService from "../../../services/categories";
import regionService from "../../../services/regions";

import FullScreen from "../../../components/Spinner/FullScreen";
import { useSelector } from "react-redux";

export default () => {
  const { showBlured } = useShowModal();
  const { hideModal } = useHideModal();
  const { success, error } = useShowAlert();
  const [bool, setBool] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const makeData = (regions, categories, data) => {
    const preData = categories
      .filter((itmn) => itmn.parent == null)
      .map((item, ind) => {
        const reg = regions[0];
        const foo = data.find((itm) => itm.category == item._id);
        if (foo != undefined) {
          return {
            key: ind + 1,
            regionName: reg?.title,
            region: reg?._id,
            categoryName: item.title,
            category: item._id,
            tId: foo?.groupId,
            _id: foo?._id || null,
          };
        } else {
          return {
            key: ind + 1,
            regionName: reg?.title,
            region: reg?._id,
            categoryName: item.title,
            category: item._id,
            tId: "",
            _id: null,
          };
        }
      });
    setData(preData);
  };

  const fetchData = async () => {
    setLoading(true);
    const regions = await regionService.getAll();
    const categories = await categoryService.getAll();
    const data = await tgGroupService.getAll();
    setLoading(false);

    makeData(regions, categories, data);
  };

  useEffect(() => {
    fetchData();
  }, [bool]);

  //Create section

  const sendSectorData = (data) => {
    hideModal();
    setLoading(true);
    tgGroupService
      .create(data)
      .then(() => {
        success("Сектор маълумоти қўшилди", 2, "bottom");
        setBool(!bool);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error("Сектор қўшишда хатолик", 2, "bottom");
      });
  };

  //Update Section

  const updateSectorData = (id, data) => {
    hideModal();
    setLoading(true);
    tgGroupService
      .update(id, data)
      .then(() => {
        success("Сектор янгиланди", 2, "bottom");
        setBool(!bool);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error("Сектор янгилашда хатолик", 2, "bottom");
      });
  };

  const handleEdit = (data) => {
    showBlured({
      title: `Телеграм гуруҳни таҳрирлаш`,
      maxWidth: "600px",
      height: "400px",
      withHeader: false,
      body: () => {
        const [state, setState] = useState(data.tId);
        return (
          <Box>
            <Card>
              <Row align="left" gutter={[16, 8]}>
                <Col span={24} align="left">
                  <div
                    style={{
                      border: "solid #eee 2px",
                      padding: "10px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    {data.regionName}
                  </div>
                </Col>
                <Col span={24} align="left">
                  <div
                    style={{
                      border: "solid #eee 2px",
                      padding: "10px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    {data.categoryName}
                  </div>
                </Col>
                <Col span={24} align="left">
                  <Input
                    name="groupId"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </Col>
              </Row>
              <Space
                style={{ marginTop: "20px", display: "block", align: "right" }}
              >
                <Row justify="end" gutter={[8, 8]}>
                  <Col>
                    <Button onClick={() => hideModal()}>Бекор қилиш</Button>
                  </Col>
                  <Col>
                    <Button
                      onClick={() =>
                        data._id
                          ? updateSectorData(data._id, {
                              region: data.region,
                              category: data.category,
                              groupId: state,
                            })
                          : sendSectorData({
                              region: data.region,
                              category: data.category,
                              groupId: state,
                            })
                      }
                    >
                      {data._id ? "Янгилаш" : "Сақлаш"}
                    </Button>
                  </Col>
                </Row>
              </Space>
            </Card>
          </Box>
        );
      },
    });
  };

  //Delete Section

  const deleteSector = (id) => {
    hideModal();
    setLoading(true);
    tgGroupService
      .delete(id)
      .then(() => {
        setBool(!bool);
        success("Сектор ўчирилди", 2, "bottom");
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error("Сектор ўчиришда хатолик", 2, "bottom");
      });
  };

  const handleDelete = (_id) => {
    showBlured({
      title: "O'chirish",
      maxWidth: "400px",
      height: "300px",
      withHeader: false,

      body: () => (
        <Confirm agree={() => deleteSector(_id)} cancel={hideModal} />
      ),
    });
  };

  // Column table

  const columns = [
    {
      title: "№",
      dataIndex: "key",
      key: "key",
      width: "10%",
      align: "center",
    },

    {
      title: "Регион",
      dataIndex: "regionName",
      key: "regionName",
    },

    {
      title: "Категория",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Телеграм ID",
      dataIndex: "tId",
      key: "tId",
    },
    {
      width: "20%",
      align: "center",
      title: "Амал",
      dataIndex: "",
      key: "x",
      render: (props) => (
        <ActionButton
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          props={props}
        />
      ),
    },
  ];
  if (loading) return <FullScreen />;
  return (
    <Wrapper>
      <Typograpy>Телеграм гуруҳларни бошқариш</Typograpy>
      <Table bordered columns={columns} dataSource={data} pagination={false} />
    </Wrapper>
  );
};
