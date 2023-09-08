import styled from "styled-components";

export const Text = styled.div`
  display: inline-block;
  padding: 0px 10px;
  background: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
`;
export const Content = styled.div`
  padding: 0 30px;
  height: var(--navbar-height);
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const LeftContent = styled.div`
  padding: 0 30px;
  height: var(--navbar-height);
  align-items: center;

  display: flex;
`;
export const RightContent = styled.div`
  /* width: 100%; */
  padding: 0 30px;
  height: var(--navbar-height);

  display: flex;
  align-items: center;
`;
export const Menu = styled.div`
  padding: 0 10px;
  height: var(--navbar-height);
  align-items: center;
  display: flex;
`;
export const MenuItem = styled.button`
  height: ${({ isActive }) => (isActive ? "55px" : `var(--navbar-height)`)};
  background-color: #fff;
  border: none;
  cursor: pointer;
  margin: 0 15px;
  border-bottom: ${({ isActive }) =>
    isActive ? "5px solid #1890FF" : "1px solid #eee"};
  color: ${({ isActive }) => isActive && "#1890FF"};
  font-weight: ${({ isActive }) => isActive && "bold"};
`;
// export const =
