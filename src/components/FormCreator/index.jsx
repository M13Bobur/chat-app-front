// Render Prop
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import FormElement from './FormElement';
import { Card, Box, Description } from './style';
import { Col, Row, Button, Space } from 'antd';

export default ({
  formData,
  cancel,
  sendData,
  selectOptions,
  id,
  initialVal,
}) => {
  const [options, setOptions] = useState([]);

  const formik = useFormik({
    initialValues: initialVal,
    onSubmit: (values) => {
      id ? sendData(id, values) : sendData(values);
    },
  });
  useEffect(() => {
    if (formik.values.role) {
      const filteredData = formData.data.filter((item) =>
        item.permission.includes(formik.values.role)
      );
      setOptions(filteredData);
    }
  }, [formik.values.role]);

  const handleCancel = () => {
    cancel();
  };
  const checkOptions = () => {
    return options.length > 0 ? options : formData.data;
  };
  return (
    <Box>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <Row align='left' gutter={[16, 8]}>
            {checkOptions().map((item, ind) => (
              <Col span={item.size} key={ind + 1} align='left'>
                <div className='label'>{item.label}</div>
                <FormElement
                  formik={formik}
                  item={item}
                  selectOptions={selectOptions}
                  id={id}
                />
                {item?.description && (
                  <Description className='description'>
                    Изоҳ: {item?.description}
                  </Description>
                )}
              </Col>
            ))}
          </Row>
          <Space
            style={{ marginTop: '20px', display: 'block', align: 'right' }}
          >
            <Row justify='end' gutter={[8, 8]}>
              <Col>
                <Button onClick={() => handleCancel()}>Бекор қилиш</Button>
              </Col>
              <Col>
                <Button type='primary' htmlType='submit'>
                  {id ? 'Янгилаш' : 'Сақлаш'}
                </Button>
              </Col>
            </Row>
          </Space>
        </form>
      </Card>
    </Box>
  );
};
