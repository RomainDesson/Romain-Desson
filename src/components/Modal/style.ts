import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 75vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

export const Modal = styled.div`
  width: 75vw;  /* 75% of the viewport width */
  height: 90vh;  /* 90% of the viewport height */
  background-color: #fff;
  border-radius: 10px;
  overflow: auto;  /* Enable scrolling if the content is too tall */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);  /* Optional: Adds a shadow to the modal */
  position: relative;  /* Position relative to the overlay */
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: -10px;  // Ajustez selon la quantité que vous voulez que l'icône dépasse de la modal
  right: -10px;  // Ajustez selon la quantité que vous voulez que l'icône dépasse de la modal
  background-color: white;  // Assurez-vous que l'arrière-plan de l'icône est le même que celui de la modal
  border-radius: 50%;  // Optionnel, pour un effet arrondi
  padding: 8px;  // Optionnel, pour un peu d'espace autour de l'icône
  cursor: pointer;  // Change le curseur au survol
  z-index: 1001;  // Assurez-vous que l'icône est au-dessus de la modal
`;
