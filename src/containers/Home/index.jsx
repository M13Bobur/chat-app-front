import React from 'react';
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import Container from '../../components/Container';

export default () => {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
};
