import styled from "styled-components";

export const FooterDescription = styled.div`
  height: 465px;
  max-width: 468px;
  min-width: 468px;
  width: 100%;
  border: 1px solid #dadada;
  border-radius: 10px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 15px;
  overflow-y: auto;
  padding: 15px 0px;
`;
export const Descriptions = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 15px;
`;
export const DescriptionTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid #dadada;
  padding: 10px 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  // text-align: center;
  color: #000000;
`;

export const DescriptionText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  color: #000000;
  padding-top: 10px;
  & .input_body {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: justify;
    color: #000000;
    padding-top: 10px;
  }
  & .inputError {
    border: 1px solid red;
  }
`;
