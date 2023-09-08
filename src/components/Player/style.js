import styled, { keyframes } from "styled-components";
const animation = keyframes`  
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }  
`;
export const PlayTracke = styled.div`
  width: 0%;
  height: 14px;
  background-color: var(--custom-primary);
  border-radius: 6px;
  animation-play-state: ${({ playing }) => (playing ? "running" : "paused")};
  animation-name: ${({ playing }) => (playing ? animation : "")};
  animation-duration: ${({ duration }) => duration + 0.7 + "s"};
  animation-iteration-count: infinite;
`;
export const PlayBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
