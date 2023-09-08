import styled from 'styled-components';

export const Box = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  justify-content: center;
  width: 100%;
  padding: 40px;
  & .ant-input {
    height: 42px;
    border-radius: 10px;
    margin: 3px 0;
  }
  & .footer__buttons {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    & .footer__button {
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;
export const Form = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0 40px;
`;
