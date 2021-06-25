import styled, { css } from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
`;

const ModalClose = styled.div`
  margin: 20px;
  width: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const ModalClosePath = styled.path`
  stroke: gray;
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 5;
`;

const ModalInnerWrapper = styled.div`
  transition: top 0.25s ease;
  max-width: 350px;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  position: relative;
  padding: 2.5rem;
  .typography {
    text-align: center;
  }
  .result-message {
    text-align: center;
    font-weight: 700;
  }
`;

const ModalWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease;
  z-index: 2;
  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export {
  ButtonContainer,
  ModalClose,
  ModalClosePath,
  ModalInnerWrapper,
  ModalWrapper,
};
