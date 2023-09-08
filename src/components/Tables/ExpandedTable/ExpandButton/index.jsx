import React from 'react';
import { Wrapper, DownIcon, UpIcon } from './style';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default ({ handleExpand, value, active }) => (
  <Wrapper onClick={handleExpand} active={active}>
    {value ? (
      <FiChevronUp size={20} color={active ? '#fff' : '#a8a8a8'} />
    ) : (
      <FiChevronDown size={20} color='#a8a8a8' />
    )}
  </Wrapper>
);
