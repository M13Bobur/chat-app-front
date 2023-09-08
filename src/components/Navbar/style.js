import styled from "styled-components";

export const Content = styled.div`
  /* width: 100%; */
  padding: 0 30px;
  height: var(--navbar-height);
  box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  background-color: var(--navbar-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  width: 216px;
  padding: 0 10px 0 20px;
  height: 58px;
  background: #f6f7f8;
  border-radius: 12.6265px;
  justify-content: end;
  gap: 10px;
  color: #a4a4a4;
  cursor: pointer;
`;
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  color: #a8a8a8;
  max-width: 180px;
  text-align: right;
  line-height: 16px;
  column-gap: 15px;
`;
export const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #3380ff;
`;
export const LogoContainer = styled.div`
  width: 30px;
  height: 30px;
`;
export const Username = styled.div`
  font-family: "Roboto";
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #a8a8a8;
`;
