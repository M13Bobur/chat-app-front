import styled, { css } from 'styled-components';

export const Cell = styled.div`
  position: relative;
`;

const paddings = css`
  padding: 10px 8px;
`;

export const Container = styled.div`
  position: relative;
  --table-table-width: auto;
  --table-left-right-row-paddings: 25px;
  --table-cell-right-padding: 36px;
  --table-cell-left-padding: 16px;
  --table-sort-icon-size: 5px;
  --table-row-background-color: transparent;
  --table-row-between: 14px;
  --table-margin-first-element-sticky: 39px;
`;

export const Wrapper = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  height: ${({ height }) => height && height};
  border: 1px solid #d9d5ec;
`;
const stickyTH = css`
  &:nth-child(1) {
    left: 0;
    z-index: 3;
    background-color: white;
  }
  ${({ notCheckable }) =>
    !notCheckable &&
    `
      &:nth-child(2) {
      left: var(--table-margin-first-element-sticky);
      background-color: white;
      z-index: 3;
    }
  `}
`;

const stickyTD = css`
  & td:nth-child(1) {
    position: sticky;
    left: 0;
    z-index: 1;
    background-color: white;
  }
  ${({ notCheckable }) =>
    !notCheckable &&
    `
      & td:nth-child(2) {
      position: sticky;
      left: var(--table-margin-first-element-sticky);
      z-index: 1;
      background-color: white;
      border-right: 1px solid #ddd;
    }
  `}
`;
export const THead = styled.thead``;
export const TH = styled.th`
  ${paddings};
  height: ${({ height }) => height && `${height}px`};
  width: ${({ width }) => width && `${width}px`};
  white-space: nowrap;
  position: sticky;
  top: 0;
  left: 0;
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  background: #fff;
  z-index: 2;
  ${stickyTH}
  & ${Cell} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const TD = styled.td`
  background-color: ${({ bg }) => bg && bg};
  ${paddings};
  text-align: center;
  white-space: nowrap;
  border-right: 1px solid #dddddd;
`;

export const TR = styled.tr`
  ${stickyTD};
  &${TD}:nth-child(${({ notCheckable }) => (notCheckable ? 1 : 2)})
    ${Cell},
    &${TH}:nth-child(${({ notCheckable }) => (notCheckable ? 1 : 2)})
    ${Cell} {
  }
`;
export const TREmpty = styled.tr`
  height: 12px !important;
  background: transparent !important;
`;
export const TBody = styled.tbody`
  & ${TR} {
    border-bottom: 1px solid #d9d5ec;
  }
  & ${TR}:hover {
    background: #f4f2ff;
  }
  & ${TR}:hover ${TD} {
    background: #f4f2ff;
  }
  & ${TR}:hover .teble-status-cell {
    background-color: #f4f2ff;
  }
  & ${Cell} {
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  min-width: 100%;
  width: var(--table-table-width);
  background-color: #fff;
`;
