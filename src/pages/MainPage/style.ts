import styled, {keyframes} from "styled-components";

const reduceAnimation = keyframes`
  0% {
    width: 50%
  }
  100% {
    width: 25%
  }
`;

const augmenteAnimation = keyframes`
  0% {
    width: 50%
  }
  100% {
    width: 75%
  }
`;

export const MainPageContainer = styled.div`
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const LeftSideContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #1E1E1E;
  color: white;
  &.reduced {
    animation: ${reduceAnimation} 0.5s forwards;
  }
`;

export const RightSideContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #FAF3E0;
  position: relative;
  &.augmented {
    animation: ${augmenteAnimation} 0.5s forwards;
  }
`;


