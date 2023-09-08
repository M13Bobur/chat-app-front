import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  & .line1 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }
  & .line2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const List = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => `${align}`};
  color: #000;
  gap: 10px;
  & p {
    margin: 0;
  }
  & p:first-child {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #a8a8a8;
  }
  & p:last-child {
    // width: 50%;
  }
`;
