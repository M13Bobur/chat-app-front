import styled from 'styled-components';
import { ReactComponent as IconDown } from '../../../../assets/icons/down.svg';
import { ReactComponent as IconUp } from '../../../../assets/icons/up.svg';

export const Wrapper = styled.div`
  background: ${({ active }) => (active ? '#3380FF' : '#e3f0ff')};
  border-radius: 4px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DownIcon = styled(IconDown)``;
export const UpIcon = styled(IconUp)``;
