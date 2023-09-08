import React from 'react';
import './style.css';
import { Col, Input, Row, Switch } from 'antd';
import Select from '../../FormElements/Select';

export default ({ item, formik, selectOptions }) => {
  switch (item.type) {
    case 'text':
      return (
        <Input
          onChange={formik.handleChange}
          name={item.name}
          value={formik.values[item.name]}
          maxLength={item?.maxLength || 1000}
        />
      );
    case 'textarea':
      return (
        <Input.TextArea
          onChange={formik.handleChange}
          name={item.name}
          value={formik.values[item.name]}
        />
      );
    case 'password':
      return (
        <Input
          onChange={formik.handleChange}
          name={item.name}
          value={formik.values[item.name]}
        />
      );
    case 'select':
      return (
        <Select
          handleChange={(e) => formik.setFieldValue(item.name, e)}
          options={selectOptions[item.name]}
          title=''
          defaultVal={formik.values[item.name]}
        />
      );
    case 'switch':
      return (
        <Switch
          defaultChecked={formik.values.active}
          onChange={(e) => formik.setFieldValue(item.name, e)}
        />
        // <Select
        //   handleChange={(e) => formik.setFieldValue(item.name, e)}
        //   options={selectOptions[item.name]}
        //   title=""
        //   defaultVal={formik.values.province}
        // />
      );
    case 'tel':
      return (
        <Row gutter={[0, 16]} align='middle'>
          <Col span={5}>
            <div className='num'>+998</div>
          </Col>
          <Col span={19}>
            <Input
              placeholder='911324567'
              maxLength={9}
              minLength={9}
              type='text'
              onChange={formik.handleChange}
              name={item.name}
              value={formik.values[item.name]}
            />
          </Col>
        </Row>
      );
    default:
      break;
  }
};
