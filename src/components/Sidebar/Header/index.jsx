import React from 'react';
import { Header, TitleContainer } from './style';
import Logo from '../../Logo';

const SidebarHeader = () => {
  return (
    <Header>
      <TitleContainer>
        <Logo
          onClick={() => {
            console.log('Click logo');
          }}
        />
      </TitleContainer>
    </Header>
  );
};

export default SidebarHeader;
