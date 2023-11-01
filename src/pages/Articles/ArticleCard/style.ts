import styled from 'styled-components';

export const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 70vw;
  height: 18vh;
  padding: 0.7vh;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  margin-top: 20px;
  font-family: 'Gabarito';
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

export const CardImage = styled.img`
  flex: 0 0 30vh;
  width: 18vh;
  height: 16.5vh;
  border-radius: 5px;
  margin-right: 1vw;
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 3vh;  // Ajustez selon vos besoins
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Content = styled.p`
  font-size: 2vh;
  overflow-wrap: break-word;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 4.2vw;
  width: 100%;
`;
