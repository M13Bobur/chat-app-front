import styled, { css } from 'styled-components';
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* padding: 20px 50px; */
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* max-width: 1350px; */
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;

  & .delete-work {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-left: 50px;
    & .delete-work-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      // padding: 20px;
    }
  }
  & .work {
    width: 100%;
    border-top: none;
    border-left: none;
  }
`;
export const NoData = styled.div`
  width: 100%;
  /* height: calc(100vh - 220px); */
  max-height: 100%;
  margin: 0 auto;
  ${flexCenter}
`;
export const FilterContainer = styled.div`
  /* border-radius: 10px; */
  /* padding: 20px; */
  /* background: #fff; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & .appeals__total {
    font-size: 17px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    align-content: flex-start;
  }
  & .reload__button__area {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    & .reload__button {
      cursor: pointer;
      font-size: 20px;
      color: var(--custom-primary);
    }
    & span {
      margin: 0;
    }
  }
`;
export const Actions = styled.div`
  width: 100%;
  margin: 0 auto;
  ${flexCenter}
  /* flex-direction: column; */
  padding: 10px 0px;

  & #selects {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    & #object-select {
      width: 100%;
      max-width: 50%;
      min-width: 470px;
      display: flex;
      justify-content: end;
      align-items: center;
      font-style: normal;
      font-weight: 500;
      font-size: 15.0239px;
      line-height: 18px;
      text-align: center;
      color: #858181;
      & #title {
        width: 260px;
        padding-right: 10px;
      }
    }
  }
  & .actions-block {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: start;
    gap: 15px;

    & .play__btn {
      align-self: start;
      outline: none;
      border: none;
      background: transparent;
      padding: 5px 10px;
      ${flexCenter};
      color: #0093d2;
      cursor: pointer;
      font-size: 35px;
    }
    & .uploads {
      height: auto;
      ${flexCenter};
      gap: 18px;
      color: #ffffff;
      text-shadow: rgb(43, 191, 255) 2px 0px 0px,
        rgb(43, 191, 255) 1.75517px 0.958851px 0px,
        rgb(43, 191, 255) 1.0806px 1.68294px 0px,
        rgb(43, 191, 255) 0.141474px 1.99499px 0px,
        rgb(43, 191, 255) -0.832294px 1.81859px 0px,
        rgb(43, 191, 255) -1.60229px 1.19694px 0px,
        rgb(43, 191, 255) -1.97998px 0.28224px 0px,
        rgb(43, 191, 255) -1.87291px -0.701566px 0px,
        rgb(43, 191, 255) -1.30729px -1.5136px 0px,
        rgb(43, 191, 255) -0.421592px -1.95506px 0px,
        rgb(43, 191, 255) 0.567324px -1.91785px 0px,
        rgb(43, 191, 255) 1.41734px -1.41108px 0px,
        rgb(43, 191, 255) 1.92034px -0.558831px 0px;
      & .total {
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 75px;
        text-align: center;
        margin-bottom: 0px;
      }
      & .text {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.07em;
        margin-bottom: 0px;
      }
    }
  }
`;
export const SearchInput = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  & .ant-input-affix-wrapper input.ant-input {
    min-width: 150px !important;
    width: 100%;
  }
`;
