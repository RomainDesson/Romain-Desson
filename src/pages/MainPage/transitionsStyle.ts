import { createGlobalStyle } from "styled-components";

export const TransitionsStyles = createGlobalStyle`
  .page-enter {
    transform: translateY(100%);
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .page-enter-active {
    transform: translateY(0%);
    transition: transform 300ms ease-in-out;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .page-exit {
    transform: translateY(0%);
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .page-exit-active {
    transform: translateY(100%);
    transition: transform 300ms ease-in-out;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
