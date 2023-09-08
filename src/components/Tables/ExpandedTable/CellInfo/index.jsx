import React from 'react';
import { getColor } from '../../../../utils/getColor';
import { Wrapper, Badge, BadgeContainer } from './style';

export default ({ value, userRank, column = false }) => {
  const checkRating = (value) => {
    if (value >= 81) return 'Аъло';
    if (value >= 61 && value <= 80) return 'Яхши';
    if (value >= 41 && value <= 60) return 'Қониқарли';
    if (value >= 25 && value <= 40) return 'Қониқарсиз';
    if (value <= 24) return 'Ёмон';
  };
  return (
    <Wrapper column={column}>
      <BadgeContainer>
        {userRank && (
          <span
            style={{
              fontStyle: 'italic',
              fontSize: '12px',
            }}
          >
            Рейтинг:
          </span>
        )}
        {userRank && (
          <Badge value={getColor(userRank)}>{checkRating(userRank)}</Badge>
        )}
      </BadgeContainer>
      <span
        style={{
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        {value}
      </span>
    </Wrapper>
  );
};
