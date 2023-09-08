import styled from "styled-components";

export const SubElements = styled.div`
  transition: max-height 0.3s;
  max-height: ${({ expand }) => (expand ? "30em" : 0)};
  overflow: auto auto;
`;

export const SubElement = styled.div`
  /* height: 40px; */
  padding: 5px 0;
  display: flex;
  align-items: center;
  padding-left: 51px;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  padding: 3px 5px 0 5px;
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  padding: 0 var(--sidebar-padding-x);
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 52px;
  background: ${({ active, hovered }) =>
    active || hovered ? "var(--sidebar-item-active)" : ""};
  position: relative;

  & .sidebar__list__badge {
    position: absolute;
    top: 15px;
    right: 10px;
  }
`;
Container.Left = styled.div`
  display: flex;
`;

export const CustomBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 15px;

  /* min-height: 40px; */
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${(props) => (props.color ? props.color : "#000")};
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

export const Title = styled.span`
  font-size: 13px;
  color: #282828;
  font-weight: 550;
  max-width: 170px;

  color: ${({ active, hovered }) =>
    active || hovered ? "var(--sidebar-active-title)" : ""};
  opacity: ${({ collapsed }) => (collapsed ? "0" : "1")};
  display: inline-block;
  transition: 0.1s;
`;

export const IconContainer = styled.div`
  color: ${({ active, hovered }) =>
    active || hovered ? "var(--sidebar-active-title)" : "#a8a8a8"};
  display: flex;
  align-items: center;
  min-width: 25px;
`;
