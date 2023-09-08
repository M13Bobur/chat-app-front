import styled, { css } from "styled-components";

export const btnStyle = css`
  background: none;
  border: none;
  margin: 0 10px;
  color: #c2c2c2;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AddContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;
export const BtnGroup = styled.div`
  & .edit-btn {
    ${btnStyle}
  }
  & .del-btn {
    ${btnStyle}
  }
  & .edit-btn:hover {
    color: var(--custom-primary);
  }
  & .del-btn:hover {
    color: #ff0000;
  }
`;
