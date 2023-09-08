import React from 'react';

import { createPortal } from 'react-dom';
import { Wrapper, Title, Spinner } from './style';

export default () =>
  createPortal(
    <Wrapper>
      <Spinner />
      <Title>Юкланмоқда...</Title>
    </Wrapper>,
    document.getElementById('spinner-root')
  );
