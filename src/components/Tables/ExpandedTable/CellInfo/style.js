import styled from 'styled-components';

const color = (value) => {
  switch (value) {
    case 1:
      return { text: '#007F00', bg: '#CDFFCD' };

    case 2:
      return { text: '#D30000', bg: '#FFE0E0' };

    case 3:
      return { text: '#965E00', bg: '#FFECCC' };
    default:
      return { text: '#000' };
  }
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  /* justify-content: center; */
  align-items: center;
  gap: 20px;
`;
export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
`;

export const Badge = styled.div`
  border-radius: 10px;
  display: flex;
  gap: 5px;
  /* width: 35px; */
  padding: 0px 5px;
  height: 20px;
  display: flex;
  font-size: 12px;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  /* background-color: ${({ value }) => color(value)?.bg || 'transparent'}; */
  color: ${({ value }) => value};
`;
export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #ce8500;
`;
