import styled from 'styled-components';

export const BodyContainer = styled.div`
  overflow-x: hidden;
  grid-area: body;
  padding: 85px 0px 0px 0px;
  height: 100vh;
  &::-webkit-scrollbar {
    position: absolute;
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(47, 47, 81, 0);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(73, 75, 116, 0);
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    /* background: rgba(47, 47, 81, 0.5); */
    background: #b9acf5;
  }
  &::-webkit-scrollbar-thumb {
    background: #5030e5;
    /* background: rgba(73, 75, 116, 0.5); */
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #9683ef;
    /* background: rgba(73, 75, 116, 0.5); */
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: end;
  padding: 37px var(--sidebar-padding-x) 34px;
`;
