import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  background: #ffffff;
  box-shadow: ${({ borderLess }) =>
    !borderLess && "0px 2px 12px rgba(0, 0, 0, 0.1)"};
  border-radius: 10px;
  border: ${({ borderLess }) => !borderLess && "1px solid #c2c2c250"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 30px;
  margin-bottom: 10px;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 15px;
  gap: 10px;
`;
export const Title = styled.h1`
  height: 100%;
  width: 100%;
  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  /* padding: 10px; */
  line-height: 30px;
  color: #3d3d3d;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #dadada;
`;

export const MainTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  font-size: 16px;
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
