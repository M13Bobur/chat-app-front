import styled from "styled-components";

export const WrapperCard = styled.div`
  width: 369px;
  background: #e3f0ff;
  box-shadow: 0px 25.2578px 37.8868px rgba(0, 0, 0, 0.08),
    0px 50.5157px 101.031px rgba(0, 0, 0, 0.04);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
`;
export const CardHeader = styled.div`
  min-height: 75px;
  width: 100%;
  border-radius: 16px 16px 0 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
export const CardTitle = styled.h4`
  margin: 0 !important;
  height: 75px;
  padding: 8px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: #282828;
  overflow-y: auto;
  max-width: 100%;
`;

export const CardBody = styled.div`
  height: 300px;
  width: 100%;
  padding: 0px 18px 18px;
  border-radius: 0px 45px 25px 25px;
  background: #fff;
`;
export const TasksBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  position: relative;
  padding: 10px 10px;
  gap: 20px;
`;

export const HorizontalLine = styled.hr`
  height: 1px;
  width: 60px;
  margin-top: 25px;
  background: #cdcdcd;
  transform: rotate(90deg);
  border-width: 0;
`;
export const ResultsBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ResultsTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 13.1547px;
  line-height: 20px;
  color: #7c9cbf;
`;

export const PercentBadge = styled.span`
  ${"" /* height: 83px; */}
  width: 100%;
  padding: 5px 5px 10px 5px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  color: ${({ bgColor }) => bgColor && `${bgColor}`};
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 8px;
  border-radius: 10px;
  background-color: #fff;
  color: var(--sidebar-active-title);
`;
