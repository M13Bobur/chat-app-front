import styled from "styled-components";

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
  background-color: ${({ bg }) => bg && bg};
  padding: 10px 60px;
`;
