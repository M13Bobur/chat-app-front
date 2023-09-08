import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  // margin: 0 auto;
  cursor: ${(state) => (state.point ? "pointer" : "default")};
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  border-left: solid 6px ${({ color }) => (color ? color : "#000")};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 50, 0.1);
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 10px;
  justify-content: center;
  font-weight: 500;
`;

export const Text = styled.div`
  font-size: 24px;
  color: ${({ color }) => (color ? color : "#000")};
  font-weight: bold;
`;

export const IconContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  width: 46px;
  height: 46px;
  background-color: ${({ color }) => (color ? color : "#000")};
  border-radius: 23px;
  justify-content: center;
  align-items: center;
`;

export const ChartCard = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 50, 0.1);
  flex-direction: column;
  height: 486px;
`;

export const ChartCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 30px 0;
  font-size: 18px;
  font-weight: 500;
`;
