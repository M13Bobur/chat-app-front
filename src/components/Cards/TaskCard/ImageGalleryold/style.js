import styled from "styled-components";

export const ImagesBlock = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const MainImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  border: 1px solid #c2c2c240;
  width: 100%;
  max-width: 460px;
  overflow: hidden;
  border-radius: 6px;
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
  padding: 20px 0px;
  max-width: 460px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  overflow-y: hidden;
  overflow-x: auto;
`;
export const ImageThumbnail = styled.div`
  min-width: 106px;
  max-width: 106px;
  height: 60px;
  border-radius: 10px;
  outline: ${({ active }) => active && "2px solid #3380FF40"};
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  & img {
    background-origin: center;
    background-size: cover;
    border-radius: 10px;
    object-fit: contain;
  }
`;
export const ImageDate = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  position: absolute;
  bottom: 20px;
  left: ${({ active }) => (active ? "30px" : "15px")};
  text-shadow: 1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
`;
