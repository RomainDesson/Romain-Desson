import styled, {keyframes} from "styled-components";

const shrinkShadow = keyframes`
  to { box-shadow: 0px 0px 0px rgba(0, 0, 0, 255); }
`;

const growShadow = keyframes`
    to { box-shadow: 0px 0px 5px rgba(0, 0, 0, 255); }
`;

export const PaginationContainer = styled.div`
   width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 4vh;
`

export const ButtonsContainer = styled.div`
  display: flex;
  grid-gap: 2px;
  
`

export const Button = styled.button`
  padding: 10px;
  background-color: #1E1E1E;
  color: white;
  border: 1px solid white;
  font-size: 1.1em;
  &.shrink {
    animation: ${shrinkShadow} 0.25s forwards;
  }
  &.grow {
    animation: ${growShadow} 0.25s forwards;
  }
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.90);
  }
`
