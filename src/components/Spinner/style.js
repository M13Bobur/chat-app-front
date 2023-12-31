import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  height: ${({ maxHeight }) => maxHeight || 'unset'};
  display: flex;
  align-items: center;
  justify-content: center;
`;
