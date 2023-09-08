import React from 'react';
import { Indicators } from '.';
import { getColor } from '../../../../utils/getColor';

const MainResults = ({ data = [] }) => {
  const styles = {
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    padding: '10px',
    width: '100%',
    flexDirection: 'column',
  };
  return (
    <div style={styles}>
      {data?.map((item, ind) => {
        const title = item.title ?? `${item?.regionName}:${item?.userName}`;
        return (
          <Indicators
            key={`${ind + 1}`}
            color={getColor(Math.min(100, item?.percent))}
            percent={Math.min(100, item?.percent)}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default MainResults;
