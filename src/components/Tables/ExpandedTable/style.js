import styled, { css } from "styled-components";
import { ReactComponent as IconClose } from "../../../assets/icons/close.svg";

export const Cell = styled.div`
  position: relative;
  display: flex;
  color: #6e6893;
  border-radius: 20px;
  align-items: center;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  justify-content: ${({ align }) => align && align};
  padding-left: ${({ pl }) => pl && `${pl}px`};
  padding-right: ${({ pr }) => pr && `${pr}px`};
  gap: 10px;
`;

const upArrowIcon = css`
  width: 0;
  height: 0;
  border-top: 0;
  border-left: var(--table-sort-icon-size) solid transparent;
  border-right: var(--table-sort-icon-size) solid transparent;
  border-bottom: var(--table-sort-icon-size) solid #181c32;
`;

const downArrowIcon = css`
  width: 0;
  height: 0;
  border-bottom: 0;
  border-left: var(--table-sort-icon-size) solid transparent;
  border-right: var(--table-sort-icon-size) solid transparent;
  border-top: var(--table-sort-icon-size) solid
    ${({ df }) => (df ? "#9D9D9D" : "#181C32")};
`;

const paddings = css`
  padding: 10px 8px;
  /* padding-left: ${({ left }) =>
    left && "var(--table-left-right-row-paddings)"}; */
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
  --table-margin-first-element-sticky: 125px;
`;

export const Wrapper = styled.div`
  overflow-x: auto;
  padding: 20px;
  width: 100%;
`;

export const THead = styled.thead`
  background: #e3f0ff;
  height: 80px;
`;
export const TH = styled.th`
  text-align: center;
  ${paddings};
  /* white-space: nowrap; */
  position: sticky;
  top: 0;
  padding-left: ${({ pl }) => pl && `${pl}px`};
  z-index: 2;
  & ${Cell} {
    /* height: 45px; */
    display: flex;
    align-items: center;
  }
  &:last-child {
    padding: 0 20px 0 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  &:first-child {
    padding: 0 20px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
`;
export const TD = styled.td`
  position: relative;
  background-color: ${({ bg }) => bg && bg};
  ${paddings};
  &:last-child {
    padding: 0 20px 0 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  &:first-child {
    padding: 0 20px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
`;

export const TR = styled.tr`
  width: 100%;
  padding: 0 20px;
  /* border-top: 1px solid #d9d5ec; */
`;

export const TREmpty = styled.tr`
  height: 12px !important;
  background: transparent !important;
`;
export const TBody = styled.tbody`
  & ${TR} {
    background: #ffffff;
    border-radius: 20px;
  }
  & ${TR}:hover {
    box-shadow: 0px 9px 30px rgba(0, 0, 0, 0.12);
  }
  & ${TR}:hover ${TD} {
    background: #ffffff;
  }
  & ${TR}:hover .teble-status-cell {
    background: #ffffff;
  }
  & ${Cell} {
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  min-width: 100%;
  width: var(--table-table-width);
`;

export const Icon = styled.span`
  position: absolute;
  right: -18px;
  &:before {
    content: "";
    position: absolute;
    right: var(--table-cell-right-padding);
    bottom: -2px;
    ${({ down }) => (!down ? downArrowIcon : upArrowIcon)};
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 16px;
  left: 40px;
  &:focus {
    outline: none;
  }
`;

export const ChildComponent = styled.td`
  position: absolute;
  z-index: 1;
  right: 0;
  transform: translateX(-15%);
  -webkit-transform: translateX(-15%);
  width: 50%;
  max-height: 280px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15),
    0px 44px 50px -9px rgba(0, 0, 0, 0.11) !important;
  border-radius: 20px;
`;

export const Content = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: black;
  width: "unset";
`;

export const Header = styled.div`
  height: 55px;
  border-radius: 8px 8px 0px 0px;
  background: white;
  display: flex;
  border-bottom: 1px solid #ebebf3;
  align-items: center;
  margin: 0 20px;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #3380ff;
  margin: 0;
`;

export const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border: none;
  overflow: hidden;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  transition: 0.5s;
  &:focus {
    outline: none;
    background: #f8f8f8;
  }
  &:hover {
    background: #f8f8f8;
  }
`;

export const Body = styled.div`
  position: relative;
  padding: 20px 0;
  max-height: 264px;
  overflow: auto;
  &::-webkit-scrollbar-track {
    margin-bottom: 10px;
  }
`;
export const Item = styled.div`
  padding: 10px 40px 10px 20px;
  display: flex;
  margin: ${({ timeInterval }) => timeInterval && "0px 5px 5px 5px"};
  color: #282828;
  background: ${({ timeInterval }) => timeInterval && "#f6f7f8"};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: ${({ timeInterval }) => !timeInterval && "#f6f7f8"};
    border-radius: 10px;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RightContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #a8a8a8;
`;

export const ItemText = styled.p`
  padding-left: 20px;
  margin: 0;
`;

export const CloseIcon = styled(IconClose)``;
