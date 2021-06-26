import {
  PurchaseFormLabel,
  PurchaseFormWrapper,
  PurchaseFormDivWrapper,
} from './PurchseForm.style';
import Button from '../common/button/Button';
import Input from '../common/input/Input';
import { useState, useRef } from 'react';
import { isValidPrice } from '../../services/validation';

const PurchseForm = ({ price, handleInputChange, handleSubmitPrice }) => {

  const onChange = ({ target: { value }}) => {
    handleInputChange(value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const message = isValidPrice(price);
    if (message) return alert(message);
    handleSubmitPrice();
  }

  return (
    <PurchaseFormWrapper onSubmit={onSubmit}>
      <PurchaseFormLabel>구입할 금액을 입력해주세요.</PurchaseFormLabel>
      <PurchaseFormDivWrapper>
        <Input type='number' value={price} onChange={onChange} fullWidth />
        <Button type="submit" color={'warning'}>확인</Button>
      </PurchaseFormDivWrapper>
    </PurchaseFormWrapper>
  );
};

export default PurchseForm;
