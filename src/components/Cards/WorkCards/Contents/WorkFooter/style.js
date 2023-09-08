import styled, { css } from "styled-components";

export const centeredFlex = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const WorkInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  height: 100%;
  border: 1px solid #0093d2;
  border-bottom: 0px;
  padding: 10px 10px;
`;
export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: ${({ direction }) => `${direction}`};
  gap: ${({ gap }) => (gap ? `${gap}px` : "0px")};
  width: 100%;
  height: 100%;
  & .left-states {
    width: 45%;
    text-align: left;
    & .section {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: baseline;
      padding-top: 20px;
    }
    & .text {
      width: 90%;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #858181;
    }
    & .value {
      width: 100%;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #202020;
    }
  }
  & .right-states {
    padding: 10px 10px 0 0;
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    gap: 40px;
    & .actions-states {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;
    }

    & .rate {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
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
  border: 1px solid var(--custom-primary);
  padding: 10px 30px;
  & ul {
    width: 100%;
    padding: 5px;
    & li {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
