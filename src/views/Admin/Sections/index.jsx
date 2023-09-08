import { Table } from "antd";
import React, { useEffect, useState } from "react";
import Filters from "../../../components/Filters";
import Typograpy from "../../../components/Typograpy";
import Wrapper from "../../../components/Wrapper";
import { formRegionData } from "./helper";
import "./style.css";
import { AddContainer } from "../Users/style";
import AddButton from "../../../components/AddButton";
import ActionButton from "../../../components/ActionButton";
import { useHideModal, useShowAlert, useShowModal } from "../../../hooks";
import FormCreator from "../../../components/FormCreator";
import Confirm from "../../../components/Confirm";

import regionService from "../../../services/regions";

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
      title: data.title,
      desc: data.desc,
    };
  };

  useEffect(() => {
    setLoading(true);

    regionService
      .getAll()
      .then((res) => {
        let regions = res.map((item, index) => {
          return { ...item, key: index + 1 };
        });
        setData(regions);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bool]);

  //Create section

  const sendRegionData = (data) => {
    regionService
      .create(data)
      .then(() => {
        success("Туман/шаҳар маълумот қўшилди", 2, "bottom");
        setBool(!bool);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error("Туман/шаҳар қўшишда хатолик", 2, "bottom");
      });
  };

  const sendData = (data) => {
    hideModal();
    setLoading(true);

    return sendRegionData(data);
  };

  const addData = () => {
    showBlured({
      title: `Туман/шаҳар qo'shish`,
      maxWidth: "600px",
      height: "400px",
      withHeader: false,
      body: () => (
        <FormCreator
          formData={formRegionData}
          initialVal={initialValuesAdd()}
          cancel={hideModal}
          sendData={sendData}
          id=""
        />
      ),
    });
  };

  //Update Section

  const updateRegionData = (id, data) => {
    regionService
      .update(id, data)
      .then(() => {
        success("Туман/шаҳар янгиланди", 2, "bottom");
        setBool(!bool);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error("Туман/шаҳар янгилашда хатолик", 2, "bottom");
      });
  };

  const updateData = (id, data) => {
    hideModal();
    setLoading(true);

    return updateRegionData(id, data);
  };

  const handleEdit = (data) => {
    showBlured({
      title: `Туман/шаҳар qo'shish`,
      maxWidth: "600px",
      height: "400px",
      withHeader: false,
      body: () => (
        <FormCreator
          id={data._id}
          formData={formRegionData}
          cancel={hideModal}
          initialVal={initialValuesEdit(data)}
          sendData={updateData}
        />
      ),
    });
  };

  //Delete Section

  const deleteRegion = (id) => {
    regionService
      .delete(id)
      .then(() => {
        setBool(!bool);
        success("Туман/шаҳар ўчирилди", 2, "bottom");
      })
      .catch((err) => {
        console.log(err);
        success("Туман/шаҳар ўчиришда хатолик", 2, "bottom");
      });
  };

  const deleteSection = (id) => {
    hideModal();
    setLoading(true);

    deleteRegion(id);
  };
  const handleDelete = (_id) => {
    showBlured({
      title: "O'chirish",
      maxWidth: "400px",
      height: "300px",
      withHeader: false,

      body: () => (
        <Confirm agree={() => deleteSection(_id)} cancel={hideModal} />
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
        <AddButton text={"Туман / шаҳар"} addData={addData} />
      </AddContainer>
      <Typograpy>Туман/шаҳар</Typograpy>
      <Table bordered columns={columns} dataSource={data} pagination={false} />
    </Wrapper>
  );
};
