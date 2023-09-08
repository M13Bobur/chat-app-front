import styled from "styled-components";

export const ImagesBlock = styled.div`
  height: ${({ medium }) => (medium ? "460px" : "640px")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 20px;
  margin-bottom: 20px;
`;
export const MainImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ medium }) => (medium ? "460px" : "640px")};
  border: 1px solid #dadada;
  width: 100%;
  // max-width: 1048px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  top: 0;
  left: 0;
  & .deleteBtn {
    background-color: transparent;
    color: re;
    font-size: 30px;
    border: none;
    outline: none;
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 1000;
    color: #0093d2;
    position: absolute;
    top: 20px;
    right: 10px;
    cursor: pointer;
    display: none;
  }
  &:hover .deleteBtn {
    display: inline-block;
  }
`;

export const ImageList = styled.div`
  height: ${({ medium }) => (medium ? "460px" : "640px")};
  width: 200px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const ImageThumbnail = styled.div`
  height: 138.82px;
  width: 199.23px;
  max-height: 140px;
  max-width: 200px;
  border-radius: 6px;
  border: ${({ active }) => active && "3px solid #0093d2"};
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  & img {
    background-origin: center;
    background-size: cover;
  }
`;
export const ImageDate = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${({ active }) => (active ? "30px" : "10px")};
  line-height: ${({ active }) => (active ? "35px" : "10px")};
  text-align: center;
  color: #3380ff;
  position: absolute;
  bottom: 5px;
  left: ${({ active }) => (active ? "17px" : "15px")};
`;
