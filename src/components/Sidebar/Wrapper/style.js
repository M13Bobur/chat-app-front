import styled, { css } from 'styled-components';

const tabletDesktop = css`
  border: 1px solid rgba(131, 131, 131, 0.14);
  background: var(--sidebar-background);
  width: var(--sidebar-width);
  transition: 0.2s width;
  grid-area: sidebar;
  position: relative;
  display: grid;
  z-index: 11;
  grid-template-areas:
    'header'
    'body';
  grid-template-rows: 76px calc(100vh - 76px);
  grid-template-columns: 1fr;
  overflow: hidden;
`;

export const DesktopSidebar = styled.div`
  ${tabletDesktop}
`;
