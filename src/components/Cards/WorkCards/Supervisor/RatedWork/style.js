import styled, { css } from "styled-components";
const centeredFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // padding: 10px;
  // gap: 35px;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ medium }) => (medium ? "row" : "column")};
  justify-content: center;
  align-items: start;
  // padding: 10px;
  gap: 15px;
`;
export const Title = styled.h1`
  height: 100%;
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  // font-weight: 700;
  // font-size: 26px;
  line-height: 30px;
  // text-align: center;
  color: #3d3d3d;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const MainTitle = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const RatingBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #0093d2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  position: relative;
  top: 0;
`;

export const RateComment = styled.div`
  width: 100%;
  border: 1px solid var(--custom-primary);
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  text-align: left;
  & .tags-box {
    width: 100%;
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
        // width: 100.47px;
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
  & span {
    width: 100%;
    display: block;
  }
  & ul {
    width: 100%;
    padding: 5px;

    & li {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
