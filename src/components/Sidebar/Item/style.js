import styled from 'styled-components';

export const SubElements = styled.div`
  transition: max-height 0.3s;
  max-height: ${({ expand }) => (expand ? '20em' : 0)};
  overflow: hidden;
`;

export const SubElement = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 51px;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  border: 0px;
  border-bottom: 1px;
  border-color: #78748670;
  border-style: inset;
`;

export const Container = styled.div`
  padding: 17px var(--sidebar-padding-x);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 80px;
  background: ${({ active, hovered }) =>
    active || hovered ? 'var(--sidebar-item-active)' : ''};
`;
Container.Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: #787486;
  color: ${({ active, hovered }) =>
    active || hovered ? 'var(--sidebar-active-title)' : ''};
  opacity: ${({ collapsed }) => (collapsed ? '0' : '1')};
  display: inline-block;
  transition: 0.1s;
`;

export const IconContainer = styled.div`
  color: ${({ active, hovered }) =>
    active || hovered ? 'var(--sidebar-active-title)' : '#a8a8a8'};
  display: flex;
  align-items: center;
  min-width: 40px;
`;

export const TitleItem = styled.div`
  & p {
    font-family: 'Inter';
    font-style: normal;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #787486;
  }
`;

Container.Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  & .rightTime {
    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter';
    font-style: normal;
    color: #787486;
  }
  & .rightSection {
    display: flex;
    align-items: center;
    gap: 10px;
    & p {
      display: flex;
      justify-content: center;
      margin: 0px;
    }
  }
`;

Container.Right.ItemNotification = styled.div`
  background-color: #1f98f2;
  padding: 3px 5.5px;
  border-radius: 50%;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
