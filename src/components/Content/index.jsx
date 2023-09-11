import React from 'react';
import { Content, Wrapper } from './style';
import { Outlet } from 'react-router-dom';

export default () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Outlet />
        </Content>
      </Wrapper>
    </>
  );
};
