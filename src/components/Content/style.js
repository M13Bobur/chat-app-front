import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: var(--navbar-height) 1fr;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  /* height: calc(100vh - var(--navbar-height)); */
  height: 100vh;
  background-color: #fff;
  padding: 0px 30px;
`;
