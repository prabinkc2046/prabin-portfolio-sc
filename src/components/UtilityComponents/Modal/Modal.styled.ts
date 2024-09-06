import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed; /* Fixed position to make it relative to the viewport */
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  z-index: 1000;
`;

export const ModalContent = styled.div`
  padding: 20px;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: inherit;
  cursor: pointer;
  border: 2px solid white;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: font-size 0.3s ease;

  &:hover {
    font-size: 50px;
  }
`;
