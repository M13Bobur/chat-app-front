import { Col, Row, Button } from 'antd';
import React from 'react';
import { Indicators } from '.';
import { getColor } from '../../../../utils/getColor';
import Task from './Task';
import './line.css';

const CountIndicator = ({ data, pageType, handleClick, count = 0 }) => {
  const styles = {
    width: '100%',
    gap: '10px',
  };

  return (
    <Row gutter={24} style={styles}>
      <Col
        className='gutter-row'
        span={18}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'flex-end',
        }}
      >
        {data.map((item, ind) => {
          const title = item.title ?? `${item?.regionName}:${item?.personName}`;
          return (
            <Indicators
              key={`${ind + 1}`}
              color={getColor(Math.min(100, item.percent))}
              percent={item.percent}
              title={title}
              small={true}
            />
          );
        })}
      </Col>
      <Col
        className='gutter-row'
        span={5}
        style={{
          marginTop: pageType === 'user' ? '-10px' : '',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {pageType === 'user' ? (
          <Task
            className='withLine'
            color='#00B5E4'
            title='марта режалаштириш зарур'
            value={count}
            small
          />
        ) : (
          <Button
            style={{
              height: ' 35.36px',
              width: '113.66px',
              borderRadius: '3.79px',
            }}
            onClick={handleClick}
            type='primary'
          >
            Батафсил
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default CountIndicator;
