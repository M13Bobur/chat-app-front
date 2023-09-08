export const formSectorData = {
  title: "Телеграм гуруҳни таҳрирлаш",

  data: [
    { type: "text", label: "Регион", name: "regionName", value: "", size: 24 },
    {
      type: "text",
      label: "Категория",
      name: "categoryName",
      value: "",
      size: 24,
    },
    { type: "text", label: "Телеграм ID", name: "tId", value: "", size: 24 },
  ],
};

import styled from "styled-components";

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
