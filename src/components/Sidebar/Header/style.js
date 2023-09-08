import styled, { css } from 'styled-components';

export const Header = styled.div`
  background: white;
  /* border-bottom: 2px solid #f5f5f5; */
  grid-area: header;
  display: grid;
  place-items: center;
  height: var(--navbar-height);
  box-sizing: border-box;
  padding: 0 var(--sidebar-padding-x);
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
