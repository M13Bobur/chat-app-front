import { ButtonSelect, Text } from "./style";
import React, { useState } from "react";
import { Col, Row, Table, Space, Button, Select } from "antd";
import Typograpy from "../../../components/Typograpy";
import { AddContainer } from "../Users/style";
import AddButton from "../../../components/AddButton";
import ActionButton from "../../../components/ActionButton";
import { useHideModal, useShowModal } from "../../../hooks";
import { formData, initialValuesAdd, parentFormData } from "./helper";
import FormCreator from "../../../components/FormCreator";
import Confirm from "../../../components/Confirm";
import sectorService from "../../../services/sectors";
import regionService from "../../../services/regions";
import objectService from "../../../services/objects";
import { useEffect } from "react";
import { useShowAlert } from "../../../hooks/alert";
import FullScreen from "../../../components/Spinner/FullScreen";
import Spinner from "../../../components/Spinner";
import { Pagination } from "antd";
import { objectConstructor } from "../../../utils/objectConstructor";
import { AiOutlineFilter } from "react-icons/ai";

export default () => {
  const [subObjects, setSubObjects] = useState([]);
  const { success, error } = useShowAlert();
  const [sections, setSections] = useState({});
  const { showBlured } = useShowModal();
  const { hideModal } = useHideModal();
  const [loading, setLoading] = useState(true);
  const [subLoading, setSubLoading] = useState(false);
  const [parentObjects, setParentObjects] = useState([]);
  const [bool, setBool] = useState(true);
  const [active, setActive] = useState(undefined);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState(false);
  const [filterItems, setFilterItems] = useState({ region: "", group: "" });
  const { constructorMethod } = objectConstructor();
  const { Option } = Select;
  useEffect(() => {
    objectService
      .getAll()
      .then((res) => {
        setParentObjects(res);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bool]);

  useEffect(() => {
    regionService
      .getAll()
      .then((res) => {
        setSections((prevSections) => ({
          ...prevSections,
          region: res,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
    sectorService
      .getAll()
      .then((res) => {
        setSections((prevSections) => ({
          ...prevSections,
          sector: res,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (active) {
      let data = { parent: active, page: page, limit: limit };
      data = filterItems?.region
        ? { ...data, region: filterItems.region }
        : data;
      data = filterItems?.sectors
        ? { ...data, sectors: filterItems.group }
        : data;
      setSubLoading(true);
      objectService
        .getAllSubsListByParentId(data)
        .then((res) => {
          let data = res.docs.map((item, ind) => ({
            ...item,
            regionName: item.region?.title,
            sectorName: item.sector?.title,
            key: ind + 1,
          }));

          setSubObjects({ data, totalPages: res.totalPages });
        })
        .finally(() => {
          setSubLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [active, limit, page, filterItems]);

  //Add object

  const sendData = (data) => {
    hideModal();
    setLoading(true);
    if (data.parent === "") {
      delete data.parent;
    }
    objectService
      .create(data)
      .then(() => {
        setActive(undefined);
        setBool(!bool);
        success("Объект маълумоти сақланди", 2, "bottom");
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error("Объект маълумотини сақлашда хатолик", 2, "bottom");
      });
  };
  const addObject = () => {
    showBlured({
      title: "Объект қўшиш",
      maxWidth: "600px",
      height: "400px",
      withHeader: false,
      body: () => (
        <FormCreator
          formData={formData}
          cancel={hideModal}
          sendData={sendData}
          selectOptions={{ ...sections, parent: parentObjects }}
          id=""
          initialVal={initialValuesAdd}
        />
      ),
    });
  };

  // Update

  const initialValuesEdit = (data) => {
    return data.parent
      ? {
          title: data.title,
          desc: data.desc,
          parent: data.parent,

          region: data.region?._id,
          sector: data.sector?._id,
        }
      : {
          title: data.title,
          desc: data.desc,

          // region: data?.region?._id,
          // sector: data?.sector?._id,
        };
  };

  const updateData = (id, data) => {
    hideModal();
    setLoading(true);
    objectService
      .update(id, data)
      .then(() => {
        setBool(!bool);
        success("Объект маълумоти янгиланди", 2, "bottom");
      })
      .finally(() => {
        setLoading(false);
        setActive(undefined);
      })
      .catch((err) => {
        console.log(err);
        error("Объект маълумоти янгилашда хатолик", 2, "bottom");
      });
  };

  const handleEdit = (data) => {
    showBlured({
      title: "Объектни таҳрирлаш",
      maxWidth: "650px",
      height: "600px",
      withHeader: false,
      body: () => (
        <FormCreator
          formData={data.parent == null ? parentFormData : formData}
          cancel={hideModal}
          sendData={updateData}
          selectOptions={{ ...sections, parent: parentObjects }}
          id={data._id}
          initialVal={initialValuesEdit(data)}
        />
      ),
    });
  };

  // Delete

  const deleteObject = (id) => {
    hideModal();
    setLoading(true);
    if (subObjects?.data.length != []) {
      setSubObjects((prev) => ({
        ...prev,
        data: prev.data.filter((item) => item._id !== id),
      }));
    }
    objectService
      .delete(id)
      .then(() => {
        setBool(!bool);
        success("Объект ўчирилди", 2, "bottom");
      })
      .finally(() => {
        setLoading(false);
        setActive(undefined);
      })
      .catch((err) => {
        console.log(err);
        error("Объектни ўчиришда хатолик", 2, "bottom");
      });
  };

  const handleDelete = (id) => {
    showBlured({
      maxWidth: "400px",
      height: "300px",
      withHeader: false,
      body: () => <Confirm agree={() => deleteObject(id)} cancel={hideModal} />,
    });
  };

  const onChangePage = (p) => {
    setPage(p);
  };

  const onShowSizeChange = (current, pageSize) => {
    setLimit(pageSize);
  };

  const columns = [
    {
      title: "Шаҳар (Туман)",
      dataIndex: "regionName",
      key: "1",
    },
    {
      title: "Сектор",
      dataIndex: "sectorName",
      key: "2",
    },
    {
      title: "Nomi",
      dataIndex: "title",
      key: "3",
    },

    {
      width: "20%",
      align: "center",
      title: "Action",
      dataIndex: "",
      key: "y",
      render: (props) => (
        <ActionButton
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          props={props}
        />
      ),
    },
  ];

  // const handleActive = (id) => {
  //   setActive(id);
  // };

  if (loading) return <FullScreen />;
  return (
    <>
      <AddContainer>
        <AddButton text="Объект" formData={formData} addData={addObject} />
      </AddContainer>
      <Row>
        <Col span={8}>
          <Typograpy>Объектлар</Typograpy>{" "}
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: "flex",
              padding: "0 20px",
            }}
          >
            {parentObjects.map((item, index) => (
              <Row key={index + 1}>
                <Col span={24}>
                  <ButtonSelect
                    isActive={active == item._id}
                    onClick={() => {
                      setFilter(false);
                      setFilterItems({});
                      setPage(1);
                      setActive(item._id);
                    }}
                  >
                    <Text>
                      {item.title.length > 28
                        ? item.title.slice(0, 28) + "..."
                        : item.title}{" "}
                    </Text>
                    <Text>
                      {active == item._id ? (
                        <ActionButton
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                          props={item}
                        />
                      ) : null}
                    </Text>
                  </ButtonSelect>
                </Col>
              </Row>
            ))}{" "}
          </Space>
        </Col>
        <Col span={16}>
          {subLoading ? (
            <div style={{ paddingTop: "150px" }}>
              <Spinner />
            </div>
          ) : (
            <>
              <Typograpy>Суб объектлар</Typograpy>

              <Space
                direction="vertical"
                size="middle"
                style={{
                  width: "100%",
                  height: "45px",
                  padding: "0 20px",
                }}
              >
                {active ? (
                  <Row>
                    <Col span={22}>
                      {filter ? (
                        <Space>
                          Шаҳар (Туман)
                          <Select
                            value={filterItems?.region}
                            style={{ maxWidth: 300, minWidth: 200 }}
                            allowClear
                            onChange={(value) =>
                              setFilterItems((prevVal) => ({
                                ...prevVal,
                                region: value,
                              }))
                            }
                          >
                            {sections.region?.map((item, ind) => (
                              <Option key={ind + 1} value={item._id}>
                                {item.title}
                              </Option>
                            ))}
                          </Select>
                          Гуруҳ
                          <Select
                            value={filterItems?.group}
                            style={{ width: 150 }}
                            allowClear
                            onChange={(value) =>
                              setFilterItems((prevVal) => ({
                                ...prevVal,
                                group: value,
                              }))
                            }
                          >
                            {sections.group?.map((item, ind) => (
                              <Option key={ind + 1} value={item._id}>
                                {item.title}
                              </Option>
                            ))}
                          </Select>
                          {/* <Button type="primary" onClick={handleFilter}>
                          ok
                        </Button> */}
                        </Space>
                      ) : null}
                    </Col>
                    <Col span={2} style={{ textAlign: "right" }}>
                      <Button
                        // className="edit-btn"
                        onClick={() => setFilter(!filter)}
                        shape="circle"
                        type="text"
                        icon={<AiOutlineFilter size={25} />}
                      >
                        {" "}
                      </Button>
                    </Col>
                  </Row>
                ) : null}
              </Space>
              <Space
                direction="vertical"
                size="middle"
                style={{
                  display: "flex",
                  padding: "0 20px",
                  justifyContent: "center",
                }}
              >
                {active && (
                  <Table
                    bordered
                    columns={columns}
                    dataSource={subObjects?.data}
                    pagination={false}
                  />
                )}
                {subObjects?.totalPages > 1 ? (
                  <Pagination
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    style={{ textAlign: "center" }}
                    current={page === 0 ? 1 : page}
                    pageSize={limit}
                    onChange={onChangePage}
                    total={subObjects?.totalPages}
                    // size="large"
                  />
                ) : null}
              </Space>
            </>
          )}
        </Col>
      </Row>
    </>
  );
};
