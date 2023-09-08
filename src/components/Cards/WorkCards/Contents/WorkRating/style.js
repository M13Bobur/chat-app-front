import styled from "styled-components";

export const Item = styled.div`
  background-color: white;
  margin-top: 8px;
  padding: 2px 10px;
  box-shadow: 0px 0px 1px 1px #eee;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 15px;
  flex-direction: column;
  border: 1px solid #dadada;
  border-radius: 10px;
`;
export const FlexBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 15px;
`;

export const Text = styled.div`
  display: inline-block;
  height: 55px;
  min-width: 80px;
  padding: 8px 10px;
  background: #ffffff;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.65);
  border-radius: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 45px;
  text-align: center;
  color: #3380ff;
`;
export const SwitchBox = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  flex-direction: row;
  gap: 20px;
`;
