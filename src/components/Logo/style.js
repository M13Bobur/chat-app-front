import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 18px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  color: #282828;
`;

export const HeaderTitle = styled.div`
  width: 150px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #0D062D;
  display: flex;
  align-items: center;
  & img{
    margin: 0px 9px 0px 0px;
  }
`

export const HeaderIcon = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.7;
`;