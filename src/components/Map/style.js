import styled from "styled-components";

export const Map = styled.div`
  height: 100%;
  width: ${({ smaller }) => (smaller ? "40px" : "55px")};
  height: ${({ smaller }) => (smaller ? "40px" : "55px")};
  background: #e3f0ff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocationButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const StyledText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #00b5e4;
`;
