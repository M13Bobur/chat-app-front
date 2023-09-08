import React from "react";
import {
  CardBody,
  CardHeader,
  CardTitle,
  HorizontalLine,
  PercentBadge,
  ResultsBlock,
  ResultsTitle,
  TasksBody,
  WrapperCard,
  Icon,
} from "./style";
// import Task from "./Result/Task";
import { TbBuildingCommunity } from "react-icons/tb";

import MainResults from "./Result/MainResults";
import Task from "./Result/Task";
import { CountIndicator } from "./Result";
import { getColor } from "../../../utils/getColor";

const CategoryCardV2 = ({
  pageType = "main",
  item = [],
  handleClick,
  hideGeneralIndicators,
}) => {
  const userFilter = (data) => {
    return data?.sort((a, b) => b?.percent - a?.percent)?.slice(-4);
  };
  return (
    <WrapperCard>
      <CardHeader>
        <Icon>
          <TbBuildingCommunity size={20} />
        </Icon>
        <CardTitle>{item?.mainTitle ?? ""}</CardTitle>
      </CardHeader>
      <CardBody>
        <PercentBadge bgColor={getColor(Math.min(100, item.percent))}>
          {item.percent}%
        </PercentBadge>
        <TasksBody>
          <Task value={item?.tasks.marked} title="Белгиланди" color="#282828" />
          <HorizontalLine />
          <Task
            value={item?.tasks.completed}
            title="Бажарилди"
            color="#282828"
          />
        </TasksBody>

        {hideGeneralIndicators ? (
          <Task
            color="#00B5E4"
            title="марта режалаштириш зарур"
            value={Number(item?.tasks.marked) - Number(item?.tasks.completed)}
            large
          />
        ) : (
          <ResultsBlock>
            <ResultsTitle>{item.resultsTitle}</ResultsTitle>

            {pageType === "main" ? (
              <MainResults data={userFilter(item.results)} />
            ) : (
              <CountIndicator
                handleClick={() => handleClick(item.id)}
                data={userFilter(item.results)}
                pageType={pageType}
                count={
                  Number(item?.tasks.marked) - Number(item?.tasks.completed)
                }
              />
            )}
          </ResultsBlock>
        )}
      </CardBody>
    </WrapperCard>
  );
};

export default React.memo(CategoryCardV2);
