import styled from "styled-components";
import {animated} from "react-spring";

export const BubbleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BubbleContainer = styled(animated.div)<{ margin: string, top: string, left: string }>`
  position: absolute;
  height: 15vh;
  width: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), rgba(200, 200, 200, 0.3), rgba(150, 150, 150, 0.2));
  box-shadow:
          0px 0px 10px 2px rgba(200, 200, 200, 0.3),
          5px 5px 15px 5px rgba(150, 150, 150, 0.1),
            -5px -5px 15px 5px rgba(150, 150, 150, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
  opacity: 0.9;
  margin: ${(props) => props.margin};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  padding: 10px;
  transition: transform 0.3s ease-in-out;  // Déplacé ici
  &:hover {
    transform: scale(1.05);
  }
`;


