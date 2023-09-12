import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  & header {
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .leftSection {
      display: flex;
      align-items: center;
      gap: 15px;
      & .title {
        font-weight: 500;
        font-family: 'Inter';
        font-style: normal;
        color: #787486;
        font-size: 17px;
        & .text {
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }
    }

    & .rightSection {
      display: flex;
      align-items: center;
      gap: 15px;
      & .icon {
        width: 30px;
        height: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #cccccccc;
      }
    }
  }

  & main {
    background: #cccccc;
    height: calc(100vh - 85px - 80px);
    overflow: auto;
    padding: 20px;
  }

  & footer {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 20px 0px;
    position: relative;
    & input {
      width: 100%;
      outline: none;
      height: 100%;
      border: 1px solid #cccccc;
      border-radius: 10px;
      padding: 5px 70px 5px 10px;
    }
    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 12px;
      position: absolute;
      right: 15px;
      outline: none;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ leftMsg }) => (leftMsg ? 'flex-start' : 'flex-end')};
  gap: 15px;
  padding-bottom: 20px;
  & .messageRight {
    max-width: 41%;
    width: auto;
    height: auto;
    padding: 10px;
    background-color: white;
    border-radius: 10px 10px 10px 10px;
    font-weight: 500;
    font-family: 'Inter';
    font-style: normal;
    color: #787486;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      right: -10px;
      bottom: 0px;
      border-left: 1px solid white;
      border-top: 1px solid white;
      transform: translate(-50%, -50%) rotate(135deg);
      z-index: 11;
      background-color: white;
    }
  }

  & .messageLeft {
    max-width: 41%;
    width: auto;
    height: auto;
    padding: 10px;
    background-color: white;
    border-radius: 10px 10px 10px 10px;
    font-weight: 500;
    font-family: 'Inter';
    font-style: normal;
    color: #787486;
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      left: 2px;
      bottom: 0px;
      border-left: 1px solid white;
      border-top: 1px solid white;
      transform: translate(-50%, -50%) rotate(135deg);
      background-color: white;
      z-index: 0;
    }
  }
`;
