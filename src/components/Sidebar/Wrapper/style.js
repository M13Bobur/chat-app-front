import styled, { css } from 'styled-components';

const tabletDesktop = css`
  border-right: 1px solid #dbdbdb;
  background: var(--sidebar-background);
  transition: 0.4s width;
  grid-area: sidebar;
  position: relative;
  display: grid;
  grid-template-areas:
    'header'
    'body';
  grid-template-rows: 0px calc(100vh - 46px);
  grid-template-columns: 1fr;
  overflow: hidden;
`;

export const DesktopSidebar = styled.div`
  ${tabletDesktop}
  width: ${({ open }) =>
    open ? 'var(--sidebar-close-width)' : 'var(--sidebar-width)'};
`;
