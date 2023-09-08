import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // padding: 10px 20px;
  // gap: 35px;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: "row";
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
  border: 1px solid #dadada;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  position: relative;
  top: 0;
`;
