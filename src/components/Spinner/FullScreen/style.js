import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.p`
  color: #fff;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 600;
`;

const spin = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  animation: 1s ${spin} infinite;
  &::after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;

    border-radius: 50%;
    border: 8px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
`;
