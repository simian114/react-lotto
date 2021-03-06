import Table from './table/Table';
import Button from '../common/button/Button';
import {
  ButtonContainer,
  ModalClose,
  ModalClosePath,
  ModalInnerWrapper,
  ModalWrapper,
} from './Modal.styles';

const Modal = ({ open }) => {
  return (
    <ModalWrapper open={open}>
      <ModalInnerWrapper>
        <ModalClose>
          <svg viewBox='0 0 40 40'>
            <ModalClosePath d='M 10,10 L 30,30 M 30,10 L 10,30' />
          </svg>
        </ModalClose>
        <h2 className='typography'>π λΉμ²¨ ν΅κ³ π</h2>
        <Table />
        <p className='result-message'>λΉμ μ μ΄ μμ΅λ₯ μ %μλλ€.</p>
        <ButtonContainer>
          <Button>λ€μ μμνκΈ°</Button>
        </ButtonContainer>
      </ModalInnerWrapper>
    </ModalWrapper>
  );
};

export default Modal;
