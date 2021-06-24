import React from 'react';
import {
  PurchaseFormLabel,
  PurchaseFormWrapper,
  PurchaseFormDivWrapper,
} from './PurchseForm.style';
import Button from '../common/button/Button';

const PurchseForm = () => {
  return (
    <PurchaseFormWrapper>
      <PurchaseFormLabel>구입할 금액을 입력해주세요.</PurchaseFormLabel>
      <PurchaseFormDivWrapper>
        <input
          type='number'
          className='w-100 mr-2 pl-2'
          placeholder='구입 금액'
        />
        <Button color={'warning'}>확인</Button>
      </PurchaseFormDivWrapper>
    </PurchaseFormWrapper>
  );
};

export default PurchseForm;
