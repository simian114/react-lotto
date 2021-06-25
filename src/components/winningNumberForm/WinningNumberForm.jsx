import React from 'react';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import { Typography, WinningNumberFormLabel, WinningNumberFormWrapper } from './WinningNumberForm.styles';
import { FlexGrow, FlexWrapper } from '../common/flex/Flex.styles';

const WinningNumberForm = () => {
  return (
    <WinningNumberFormWrapper>
      <WinningNumberFormLabel>
      지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
      </WinningNumberFormLabel>
      <FlexWrapper>
        <div>
          <Typography>당첨 번호</Typography>
          <div>
            <Input type='number' />
            <Input type='number' />
            <Input type='number' />
            <Input type='number' />
            <Input type='number' />
            <Input type='number' />
          </div>
        </div>
        <FlexGrow className="bonus-number-container">
          <Typography>보너스 번호</Typography>
          <FlexWrapper justifyContent={"center"}>
            <Input type='number' className="bonus-number" />
          </FlexWrapper>
        </FlexGrow>  
      </FlexWrapper>
      <Button fullWidth className="open-result-modal-button">결과 확인하기</Button>
    </WinningNumberFormWrapper>
  );
}

export default WinningNumberForm;
