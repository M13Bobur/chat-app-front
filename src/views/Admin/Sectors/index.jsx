import { Table } from "antd";
import React, { useEffect, useState } from "react";
import Filters from "../../../components/Filters";
import Typograpy from "../../../components/Typograpy";
import Wrapper from "../../../components/Wrapper";
import { formSectorData } from "./helper";
import "./style.css";
import { AddContainer } from "../Users/style";
import AddButton from "../../../components/AddButton";
import ActionButton from "../../../components/ActionButton";
import { useHideModal, useShowAlert, useShowModal } from "../../../hooks";
import FormCreator from "../../../components/FormCreator";
import Confirm from "../../../components/Confirm";

import sectorService from "../../../services/sectors";

import FullScreen from "../../../components/Spinner/FullScreen";

export default () => {
  const { showBlured } = useShowModal();
  const { hideModal } = useHideModal();
  const { success, error } = useShowAlert();
  const [bool, setBool] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const initialValuesAdd = () => {
    return {
      title: "",
      desc: "",
    };
  };

  const initialValuesEdit = (data) => {
    return {
      title: data?.title,
      desc: data?.desc,
      region: data?.region,
      sector: data?.sector,
    };
  };

  useEffect(() => {
    setLoading(true);

    sectorService
      .getAll()
      .then((res) => {
        let sectors = res.map((item, index) => {
          return { ...item, key: index + 1 };
        });
        setData(sectors);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bool]);

  //Create section

  const sendSectorData = (data) => {
    hideModal();
    setLoading(true);
    sectorService
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

  const addData = () => {
    showBlured({
      title: `Сектор qo'shish`,
      maxWidth: "600px",
      height: "400px",
      withHeader: false,
      body: () => (
        <FormCreator
          formData={formSectorData}
          initialVal={initialValuesAdd()}
          cancel={hideModal}
          sendData={sendSectorData}
          id=""
        />
      ),
    });
  };

  //Update Section

  const updateSectorData = (id, data) => {
    hideModal();
    setLoading(true);
    sectorService
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
      title: `Сектор qo'shish`,
      maxWidth: "600px",
      height: "400px",
      withHeader: false,
      body: () => (
        <FormCreator
          id={data._id}
          formData={formSectorData}
          cancel={hideModal}
          initialVal={initialValuesEdit(data)}
          sendData={updateSectorData}
        />
      ),
    });
  };

  //Delete Section

  const deleteSector = (id) => {
    hideModal();
    setLoading(true);
    sectorService
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
      title: "Номи",
      dataIndex: "title",
      key: "title",
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
      <AddContainer>
        <AddButton text={"Сектор"} addData={addData} />
      </AddContainer>
      <Typograpy>Секторлар</Typograpy>
      <Table bordered columns={columns} dataSource={data} pagination={false} />
    </Wrapper>
  );
};
