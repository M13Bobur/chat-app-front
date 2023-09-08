import { ButtonSelect, Text, Badge, BadgeContainer } from './style';
import React, { useState } from 'react';
import { Button, Col, Row, Table, Space, Input, Tag, DatePicker } from 'antd';
import Typograpy from '../../../components/Typograpy';
import { AddContainer } from '../Users/style';
import AddButton from '../../../components/AddButton';
import ActionButton from '../../../components/ActionButton';
import { useHideModal, useShowModal } from '../../../hooks';
import {
  childFormData,
  formData,
  initialValuesAdd,
  parentFormData,
} from './helper';
import FormCreator from '../../../components/FormCreator';
import Confirm from '../../../components/Confirm';
import categoryService from '../../../services/categories';
import { useEffect } from 'react';
import { useShowAlert } from '../../../hooks/alert';
import FullScreen from '../../../components/Spinner/FullScreen';
// import { useDataFetcher } from "../../../hooks";
import moment from 'moment';
import { Calendar } from 'react-multi-date-picker';

import { BiEdit } from 'react-icons/bi';

export default () => {
  const [subCategories, setSubCategories] = useState([]);
  const { success, error } = useShowAlert();

  const { showBlured } = useShowModal();
  const { hideModal } = useHideModal();
  const [loading, setLoading] = useState(true);
  const [parentCategories, setParentCategories] = useState([]);
  const [bool, setBool] = useState(true);
  const [active, setActive] = useState(false);
  const [tempData, setTempData] = useState([]);

  const [objects, setObjects] = useState([]);

  useEffect(() => {
    categoryService
      .getAll()
      .then((res) => {
        setTempData(res);
        setParentCategories(res.filter((item) => item.parent == null));
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bool]);

  useEffect(() => {
    const subcat = tempData
      .filter((item) => {
        return item.parent === active;
      })
      .map((item, index) => {
        return { ...item, key: index + 1 };
      });
    setSubCategories(subcat);
  }, [active]);

  // const getUniqueListBy = (arr, key) => {
  //   return [...new Map(arr.map((item) => [item[key], item])).values()];
  // };

  //Add category

  const sendData = (data) => {
    hideModal();
    setLoading(true);
    if (data.parent === '') {
      delete data.parent;
    }
    categoryService
      .create(data)
      .then(() => {
        setBool(!bool);
        setActive(undefined);

        success('Категория маълумоти сақланди', 2, 'bottom');
      })
      .catch((err) => {
        console.log(err);
        error('Категория маълумотини сақлашда хатолик', 2, 'bottom');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const addCategory = () => {
    showBlured({
      title: 'Категория қўшиш',
      maxWidth: '600px',
      height: '400px',
      withHeader: false,
      body: () => (
        <FormCreator
          formData={formData}
          cancel={hideModal}
          sendData={sendData}
          selectOptions={{ parent: parentCategories, object: objects }}
          id=''
          initialVal={initialValuesAdd}
        />
      ),
    });
  };

  // Update

  const initialValuesEdit = (data) => {
    let newData = {
      title: data.title,
    };
    if (data.parent == null)
      newData = { ...newData, shortName: data.shortName };
    if (data.parent)
      newData = { ...newData, parent: data.parent, deadline: data.deadline };
    if (data.object) newData = { ...newData, object: data.object };
    return newData;
  };

  const updateData = (id, data) => {
    hideModal();
    setLoading(true);
    categoryService
      .update(id, data)
      .then(() => {
        setBool(!bool);
        setActive(undefined);
        success('Категория маълумоти янгиланди', 2, 'bottom');
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error('Категория маълумоти янгилашда хатолик', 2, 'bottom');
      });
  };

  const handleEdit = (data) => {
    showBlured({
      title: 'Категорияни таҳрирлаш',
      maxWidth: '650px',
      height: '600px',
      withHeader: false,
      body: () => (
        <FormCreator
          formData={data.parent == null ? parentFormData : childFormData}
          cancel={hideModal}
          sendData={updateData}
          selectOptions={{ parent: parentCategories, object: objects }}
          id={data._id}
          initialVal={initialValuesEdit(data)}
        />
      ),
    });
  };

  // Delete

  const deleteCategory = (id) => {
    hideModal();
    setLoading(true);
    categoryService
      .delete(id)
      .then(() => {
        setBool(!bool);
        if (subCategories.length != []) {
          setSubCategories((prev) => prev.filter((item) => item._id !== id));
        } else {
          setActive(undefined);
        }
        success('Категория ўчирилди', 2, 'bottom');
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        error('Категорияни ўчиришда хатолик', 2, 'bottom');
      });
  };

  const handleDelete = (id) => {
    showBlured({
      maxWidth: '400px',
      height: '300px',
      withHeader: false,
      body: () => (
        <Confirm agree={() => deleteCategory(id)} cancel={hideModal} />
      ),
    });
  };

  const columns = [
    {
      title: 'Nomi',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Muddati',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      width: '100px',
      align: 'center',
      title: 'Action',
      dataIndex: '',
      key: 'y',
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
  return (
    <>
      <AddContainer>
        <AddButton text='Категория' formData={formData} addData={addCategory} />
      </AddContainer>
      <Row>
        <Col span={7}>
          <Typograpy>Асосий категориялар</Typograpy>{' '}
          <Space
            direction='vertical'
            size='middle'
            style={{
              display: 'flex',
              padding: '0 20px',
            }}
          >
            {parentCategories.map((item, index) => (
              <Row key={index + 1}>
                <Col span={24}>
                  <ButtonSelect
                    isActive={active == item._id}
                    onClick={() => setActive(item._id)}
                  >
                    <Text>
                      {item.title.length > 25
                        ? item.title.slice(0, 25) + '...'
                        : item.title}{' '}
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
            ))}{' '}
          </Space>
        </Col>
        <Col span={17}>
          <Typograpy>Суб категориялар</Typograpy>
          <Space
            direction='vertical'
            size='middle'
            style={{
              display: 'flex',
              padding: '0 20px',
            }}
          >
            <Table
              bordered
              columns={columns}
              dataSource={subCategories}
              pagination={false}
            />
          </Space>
        </Col>
      </Row>
    </>
  );
};
