import styled from 'styled-components';

export const Header = styled.div`
  padding: 0 var(--sidebar-padding-x);
  background: white;
  border-bottom: 1px solid #dbdbdb;
  grid-area: header;
  display: grid;
  place-items: center;
  height: var(--navbar-height);
  box-sizing: border-box;
  z-index: 111;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
