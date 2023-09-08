import React from 'react';
import NameCell from './CellName';
import InfoCell from './CellInfo';

export const headerMaker = (data) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  data
    .filter(({ show }) => show)
    .map(({ type, ...rest }) => {
      if (type === 'name') {
        // eslint-disable-next-line react/react-in-jsx-scope
        return {
          ...rest,
          // eslint-disable-next-line react/jsx-props-no-spreading
          Cell: ({ cell: { value } }) => <NameCell {...value} />,
        };
      }
      if (type === 'info') {
        // eslint-disable-next-line react/react-in-jsx-scope
        return {
          ...rest,
          // eslint-disable-next-line react/jsx-props-no-spreading
          Cell: ({ cell: { value } }) => <InfoCell {...value} {...rest} />,
        };
      }
      return rest;
    });

export const subData = Array.from({ length: 7 }).map((_, ind) => ({
  id: ind + 1,
  name: '“Маҳаллабай” ишлаш тизими бўйича амалга оширилаётган ишлар ҳолати, мавжуд муаммолар ва уларнинг ҳал этиш даражаси',
  count: '18 марта',
  total: '100',
}));
