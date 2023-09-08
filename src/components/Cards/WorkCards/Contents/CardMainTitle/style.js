import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
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
    justify-content: center;
    align-items: flex-end;
  }
`;
export const List = styled.div`
  width: 100%;
  height: 100%;
  font-size: 22px !important;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => `${align}`};
  color: #000;
  ${"" /* gap: 5px; */}
  & p {
    margin: 0;
  }
  & p:first-child {
    // width: 15%;
    font-weight: 400;
  }
  & p:last-child {
    // width: 50%;
  }
`;
