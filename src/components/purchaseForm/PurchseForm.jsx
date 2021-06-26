import {
  PurchaseFormLabel,
  PurchaseFormWrapper,
  PurchaseFormDivWrapper,
} from './PurchseForm.style';
import Button from '../common/button/Button';
import Input from '../common/input/Input';
import { useState } from 'react';
import { isValidPrice } from '../../services/validation';

const PurchseForm = ({ handleSubmitPrice }) => {
  const [price, setPrice] = useState(0);

  const handleChange = (e) => {
    setPrice(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = isValidPrice(price);
    if (message) return alert(message);
    handleSubmitPrice(price);
  }

  return (
    <PurchaseFormWrapper onSubmit={handleSubmit}>
      <PurchaseFormLabel>구입할 금액을 입력해주세요.</PurchaseFormLabel>
      <PurchaseFormDivWrapper>
        <Input type='number' value={price} onChange={handleChange} fullWidth />
        <Button type="submit" color={'warning'}>확인</Button>
      </PurchaseFormDivWrapper>
    </PurchaseFormWrapper>
  );
};

export default PurchseForm;
