import styled, { css } from "styled-components";

export const centeredFlex = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const WorkInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
export const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  & .section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 10px;
    font-size: 16px;
  }
  & .text {
    width: 60%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    display: flex;
    align-items: center;
    /* text color/9D */
    color: #a8a8a8;
  }
  & .value {
    width: 50%;
    align-self: flex-start;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    text-align: left;
    color: #202020;
  }
  & .blueText {
    color: #3380ff;
  }
`;
export const Rate = styled.div`
  min-width: 64px;
  height: 64px;
  padding: 10px 10px;
  background: #ffffff;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.65);
  border-radius: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #0093d2;
  ${centeredFlex}
`;
export const RateComment = styled.div`
  width: 100%;
  padding-left: 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #282828;
  & .description {
    margin: 0;
    padding: 0;
    & li {
      margin: 0;
      padding: 2.5px 0;
      width: 100%;
      text-align: left;
    }
  }
`;
