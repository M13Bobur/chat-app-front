import styled from 'styled-components';

export const Box = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  margin: 20px 20px 20px 40px;
  justify-content: center;
  & .ant-input {
    height: 42px;
    border-radius: 10px;
    margin: 3px 0;
  }
`;
export const Description = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-style: italic;
`;
export const Button = styled.button`
  margin: 10px;
  padding: 5px 20px;
  cursor: pointer;

  background-color: ${(props) =>
    props.bool ? `var(--custom-primary)` : `#f00`};
  border: 1px solid
    ${(props) => (props.bool ? `var(--custom-primary)` : `#f00`)};
  color: white;
  font-weight: bold;
  border-radius: 5px;
`;
