import React from 'react';
import { getColor } from '../../../../utils/getColor';
import DashboardIcon from '../../../DashboardIcon';
import { Wrapper, IconContainer } from './style';

export default ({ name, value }) => (
  <Wrapper>
    <IconContainer>
      {/* <DashboardIcon color='#3380FF' /> */}
      <DashboardIcon color={getColor(Math.min(100, value))} />
    </IconContainer>
    {name}
  </Wrapper>
);
