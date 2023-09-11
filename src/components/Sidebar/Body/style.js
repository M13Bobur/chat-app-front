import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
`;

export const SearchSidebar = styled.div`
  height: 70px;
  padding: 17px;
  display: flex;
  align-items: center;
  position: relative;

  & .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 32px;
  }
  & input {
    width: 100%;
    height: 35px;
    padding: 0px 40px 0px 10px;
    outline: none;
    border: 1px solid #cccccc;
    border-radius: 10px;
  }
`;

export const SidebarUsers = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 85px - 80px);
  transition: all 0.3s;

  ::-webkit-scrollbar-track {
    visibility: hidden;
  }

  ::-webkit-scrollbar-thumb {
    visibility: hidden;
  }
  &:hover {
    ::-webkit-scrollbar-track {
      background: rgba(47, 47, 81, 0);
      border-radius: 8px;
      visibility: visible;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(73, 75, 116, 0);
      border-radius: 8px;
      visibility: visible;
    }
    ::-webkit-scrollbar-track {
      background: #b9acf5;
    }
    ::-webkit-scrollbar-thumb {
      background: #5030e5;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #9683ef;
    }
  }
`;
