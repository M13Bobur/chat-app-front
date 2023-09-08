import { colors } from '../constants/colors';

export const getColor = (value) => {
  // let round = Math.round(value / 5) * 5;
  return colors[value];
};
