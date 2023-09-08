import styled, { css } from "styled-components";
const centeredFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterDescription = styled.div`
  max-width: 100%;
  min-width: 100%;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 15px;
  overflow-y: auto;
`;
export const Descriptions = styled.div`
  border: 1px solid #c2c2c240;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  padding: 5px 10px;
`;
export const DescriptionTitle = styled.div`
  width: 100%;
  padding: 10px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
  color: #000000;
`;
export const DescAlert = styled.span`
  width: 100%;
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #717171;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const DescriptionText = styled.div`
  font-style: normal;
  font-weight: ${({ medium }) => (medium ? "400" : "700")};
  font-size: 14px;
  line-height: 21px;
  text-align: justify;
  color: #000000;
  padding-top: 10px;
  & .tags-box {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & .text {
      ${centeredFlex};
      font-style: normal;
      font-weight: 500;
      font-size: 23px;
      line-height: 26px;
      text-align: center;
      color: #3d3d3d;
      padding: 5px 15px;
    }
    & .tags {
      height: 100%;
      & .tag {
        ${centeredFlex};
        padding: 2px 5px;
        border-radius: 4px;
        font-style: normal;
        font-weight: 800;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
      }
    }
  }
  & p {
    margin: 0;
    padding: 0;
  }
  & .input_body {
    font-style: normal;
    font-weight: ${({ medium }) => (medium ? "400" : "700")};
    font-size: 18px;
    line-height: 21px;
    text-align: justify;
    color: #000000;
    padding-top: 10px;
  }
  & .inputError {
    border: 1px solid red;
  }
`;
