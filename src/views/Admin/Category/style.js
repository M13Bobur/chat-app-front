import styled from 'styled-components';

export const ButtonSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: solid 1px #c2c2c2;
  padding: 5px;
  border-radius: 7px;
  cursor: pointer;
  /* box-shadow: 0 2px 0 rgb(0 0 0 / 2%); */
  align-items: center;
  color: ${({ isActive }) => isActive && '#1890FF'};
`;

export const Text = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  text-align: left;
`;
export const Badge = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 0;
  top: -5px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f46363;
  color: #fff;
`;
export const BadgeContainer = styled.div`
  position: relative;
`;
