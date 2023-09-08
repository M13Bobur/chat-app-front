import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* margin: 15px; */
  padding: 40px 0px;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 13px;
`;

export const PageButtons = styled.div`
  background-color: transparent;
  border-radius: 8px;
  max-width: 300px;
  height: 43px;
  display: grid;
  overflow: hidden;
  grid-template-columns: ${({ repeat }) =>
    repeat ? `repeat(${repeat}, 1fr)` : 'repeat(7, 1fr)'};
`;

export const Button = styled.button`
  border: none;
  border-radius: 0;
  background: transparent;
  color: #8F8F8F;
  font-size: 19px;
  min-width: calc(300px / 7);
  font-weight: 700;
  line-height:21.78px
  cursor: pointer;
  &:hover {
    color: ${({ active }) => !active && '#475569'};
  }
  &:focus {
    outline: none;
  }
  ${({ active }) =>
    active &&
    `
    // background: #5664d2;
    color: #080D85;
  `}
`;

export const ChangeButtons = styled.div`
  width: 90px;
  height: 43px;
  border-radius: 8px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;

export const ChangeButton = styled.button`
  background: transparent;
  width: 32px;
  color: ${({ color }) => color};
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  /* border: none; */
  border: 1px solid rgba(47, 46, 46, 0.65);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:not(:disabled):hover {
    background: #e8e8e8;
  }
  /* &:disabled {
    background: #e8e8e8;
  } */
`;
