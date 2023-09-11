import React from 'react';
import Header from './Header';
import Body from './Body';
import { BodyContainer } from './style';
import ContainerLayout from './Wrapper';
import { useSelector } from 'react-redux';

export default () => {
  const open = useSelector((state) => state.sidebarReducer.open);

  return (
    <ContainerLayout>
      <Header />
      <BodyContainer open={open}>
        <Body />
      </BodyContainer>
    </ContainerLayout>
  );
};
