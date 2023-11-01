import styled, {createGlobalStyle, keyframes} from 'styled-components';

type WrapperProps = {
    isCenter: boolean
}

const combinedAnimation = keyframes`
  0% {
    left: 50%;
    top: calc(50% - 10px);
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
  }
  100% {
    left: 50vw;
    top: calc(50% - 10px);
    width: 0px;
    height: 0px;
    transform: translate(-50%, -50%);
  }
`;

const expandLine = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100vh;
  }
`;



const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;

const subtleFloat = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;


const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-39vh);
  }
`;

export const GlobalStyle = createGlobalStyle`
  .fadeIn {
    animation: ${fadeIn} ease 1s;
  }

  .float {
    animation: ${subtleFloat} 3s infinite;
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  z-index: 10;
`;

export const TypingSpan = styled.span`
  font-size: 6vh;
  font-family: 'Gabarito';
  margin-top: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22vw;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0);
  transition: all 0.3s ease, box-shadow 0.6s ease, border 0.6s ease, background-color 0.6s ease, color 0.6s ease;

  &:hover {
    background-color: #f5f5dc;
    border: 2px solid #dcdcaa;
    color: black;
    box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.5);
  }

  &.move-up {
    animation: ${moveUp} 0.5s forwards;
  }
`;

export const Ball = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 50%;
  top: calc(100% - 40px);
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
  &.combined {
    animation: ${combinedAnimation} 0.5s forwards;
  }
`;

export const LineTop = styled.div`
  position: absolute;
  width: 10px;
  height: 0;
  background-color: white;
  top: 50%;
  right: 0; 
  transform: translateY(-50%);
  &.expand {
    animation: ${expandLine} 1s forwards;
  }
`;

export const LineBottom = styled.div`
  position: absolute;
  width: 10px;
  height: 0;
  background-color: white;
  bottom: 50%;
  right: 0;
  transform: translateY(50%);
  &.expand {
    animation: ${expandLine} 1s forwards;
  }
`;

export const MenuList = styled.ul`
  font-family: 'Gabarito';
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.5vh;
`;

export const MenuItem = styled.li`
  margin: 3vh 0;
  display: flex;
  align-items: center;
  opacity: 0;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
    background: white;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &.fade-in {
    animation: ${fadeIn} 1s ease forwards;
  }

  &.selected::after {
    width: 100%;
    bottom: 0;
  }
`;






