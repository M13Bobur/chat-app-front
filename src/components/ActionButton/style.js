import styled, { css } from "styled-components";

export const btnStyle = css`
  background: none;
  border: none;
  margin: 0;
  color: #c2c2c2;
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
