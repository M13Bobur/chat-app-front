import React from 'react';
import Spin from 'antd/lib/spin';
import { Wrapper } from './style';

const Spinner = ({ maxHeight }) => (
  <Wrapper maxHeight={maxHeight}>
    <Spin
      size='large'
      style={{
        width: '100px',
      }}
    />
  </Wrapper>
);

export default React.memo(Spinner);
