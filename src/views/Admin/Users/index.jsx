import { Button, Col, Row, Select, Space, Table } from "antd";
import React, { useState } from "react";
import ActionButton from "../../../components/ActionButton";
import AddButton from "../../../components/AddButton";
import Confirm from "../../../components/Confirm";
import FormCreator from "../../../components/FormCreator";
import Typograpy from "../../../components/Typograpy";
import { useHideModal, useShowAlert, useShowModal } from "../../../hooks";
import { Container, AddContainer } from "./style";
import { formData, initialValuesAdd } from "./helper";
import { useEffect } from "react";
import userService from "../../../services/users";
import regionService from "../../../services/regions";
import FullScreen from "../../../components/Spinner/FullScreen";
import { AiOutlineFilter } from "react-icons/ai";

export default () => {
  const { Option } = Select;
  const [users, setUsers] = useState([]);
  const [bool, setBool] = useState([]);
  const [loading, setLoading] = useState(false);
  const { success, error } = useShowAlert();
  const [sections, setSections] = useState({
    role: [
      { _id: "admin", title: "admin" },

      { _id: "moderator", title: "moderator" },
    ],
  });
  const [filterItems, setFilterItems] = useState({ region: "", group: "" });
  const [filter, setFilter] = useState(false);

  const { showBlured } = useShowModal();
  const { hideModal } = useHideModal();

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
  }, []);

  useEffect(() => {
    setLoading(true);
    let data = {};
    filterItems?.region !== ""
      ? (data = { ...data, region: filterItems.region })
      : null;

    userService
      .getUsersByFilter(data)
      .then((res) => {
        let users = res.map((item, index) => {
          return {
            ...item,
            phone: item?.role === "groupadmin" ? "+998" + item?.phone : "-",
            key: index + 1,
          };
        });
        setUsers(users);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bool, filterItems]);

  const changeData = (data) => {
    if (data?.role == "admin") {
      return {
        firstName: data.firstName,
        lastName: data.lastName,
        middleName: data.middleName,
        username: data.username,
        password: data.password,
        role: data.role,
      };
    }

    if (data?.role == "moderator") {
      return {
        firstName: data?.firstName,
        lastName: data?.lastName,
        middleName: data?.middleName,
        username: data?.username,
        password: data?.password,
        region: data?.region,
        phone: data?.phone,
        role: data?.role,
      };
    }
  };

  // Create

  const sendData = (data) => {
    hideModal();
    setLoading(true);
    let changeFormData = changeData(data);

    userService
      .create(changeFormData)
      .then((res) => {
        setBool(!bool);
        success("Фойдаланувчи маълумоти сақланди", 2, "bottom");
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error("Фойдаланувчи маълумоти сақлашда хатолик", 2, "bottom");
      });
  };
  const addUser = () => {
    showBlured({
      title: "Фойдаланувчи қўшиш",
      maxWidth: "650px",
      height: "600px",
      withHeader: false,
      body: () => (
        <FormCreator
          formData={formData}
          cancel={hideModal}
          sendData={sendData}
          selectOptions={sections}
          id=""
          initialVal={initialValuesAdd}
        />
      ),
    });
  };

  // Update

  const initialValuesEdit = (data) => {
    return changeData(data);
  };

  const updateData = (id, data) => {
    hideModal();
    setLoading(true);
    userService
      .update(id, data)
      .then(() => {
        setBool(!bool);
        success("Фойдаланувчи маълумоти янгиланди", 2, "bottom");
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error("Фойдаланувчи маълумоти янгилашда хатолик", 2, "bottom");
      });
  };

  const handleEdit = (data) => {
    setLoading(true);
    userService
      .getOne(data._id)
      .then((resp) => {
        setLoading(false);
        showBlured({
          title: "Фойдаланувчини таҳрирлаш",
          maxWidth: "650px",
          height: "600px",
          withHeader: false,
          body: () => (
            <FormCreator
              formData={formData}
              cancel={hideModal}
              sendData={updateData}
              selectOptions={sections}
              id={resp._id}
              initialVal={initialValuesEdit(resp)}
            />
          ),
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        error("Фойдаланувчи маълумоти олишда хатолик", 2, "bottom");
      });
  };

  // Delete

  const deleteUser = (id) => {
    hideModal();
    setLoading(true);
    userService
      .delete(id)
      .then(() => {
        setBool(!bool);
        success("Фойдаланувчи маълумоти ўчирилди", 2, "bottom");
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error("Фойдаланувчи маълумоти ўчиришда хатолик", 2, "bottom");
      });
  };

  const handleDelete = (data) => {
    showBlured({
      title: "O'chirish",
      maxWidth: "400px",
      height: "300px",
      withHeader: false,

      body: () => <Confirm agree={() => deleteUser(data)} cancel={hideModal} />,
    });
  };

  const columns = [
    {
      title: "№",
      dataIndex: "key",
      key: "key",
      width: "5%",
      align: "center",
    },
    {
      title: "Фамилия",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Исм",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Туман/Шахар",
      dataIndex: "region",
      key: "region",
    },

    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      align: "center",
    },
    {
      title: "Телефон рақами",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    {
      width: "15%",
      align: "center",
      title: "Амал",
      dataIndex: "",
      key: "x",
      render: (props) => (
        <ActionButton
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          props={props}
        />
      ),
    },
  ];
  if (loading) return <FullScreen />;

  const combineData = (users) => {
    const newData = users.map((item) => {
      const region =
        sections.region &&
        sections.region.find((itm) => itm._id === item.region);

      return {
        ...item,
        region: region?.title,
      };
    });
    return newData
      .sort((a, b) => (a.region < b.region ? -1 : 1))
      .map((item, ind) => ({ ...item, key: ind + 1 }));
  };

  return (
    <Container>
      <AddContainer>
        <AddButton text="Фойдаланувчи" addData={addUser} />
      </AddContainer>
      <Typograpy>Фойдаланувчилар </Typograpy>

      <Row>
        <Col span={24}>
          <Space>
            Шаҳар (Туман)
            <Select
              value={filterItems?.region != "" ? filterItems?.region : null}
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
            {/* <Button type="primary" onClick={handleFilter}>
                          ok
                        </Button> */}
          </Space>
        </Col>
      </Row>

      <Table
        bordered
        columns={columns}
        dataSource={combineData(users)}
        pagination={false}
      />
    </Container>
  );
};
