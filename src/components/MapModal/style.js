import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  background-color: transparent;
  z-index: 10;
  top: 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
