import Table from './table/Table';
import Button from '../common/button/Button';
import {
  ButtonContainer,
  ModalClose,
  ModalClosePath,
  ModalInnerWrapper,
  ModalWrapper,
} from './Modal.styles';

const Modal = ({ open, handleClose, handleRetry, winners, yields }) => {
  return (
    <ModalWrapper open={open}>
      <ModalInnerWrapper>
        <ModalClose onClick={handleClose}>
          <svg viewBox='0 0 40 40'>
            <ModalClosePath d='M 10,10 L 30,30 M 30,10 L 10,30' />
          </svg>
        </ModalClose>
        <h2 className='typography'>🏆 당첨 통계 🏆</h2>
        <Table winners={winners} />
        <p className='result-message'>당신의 총 수익률은 {yields}%입니다.</p>
        <ButtonContainer>
          <Button onClick={handleRetry}>다시 시작하기</Button>
        </ButtonContainer>
      </ModalInnerWrapper>
    </ModalWrapper>
  );
};

export default Modal;
