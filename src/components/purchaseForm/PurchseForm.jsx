import {
  PurchaseFormLabel,
  PurchaseFormWrapper,
  PurchaseFormDivWrapper,
} from './PurchseForm.style';
import Button from '../common/button/Button';
import Input from '../common/input/Input';

const PurchseForm = () => {
  return (
    <PurchaseFormWrapper>
      <PurchaseFormLabel>구입할 금액을 입력해주세요.</PurchaseFormLabel>
      <PurchaseFormDivWrapper>
        <Input type='number' fullWidth />
        <Button color={'warning'}>확인</Button>
      </PurchaseFormDivWrapper>
    </PurchaseFormWrapper>
  );
};

export default PurchseForm;
