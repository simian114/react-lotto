import Input from '../common/input/Input';
import Button from '../common/button/Button';
import {
  Typography,
  WinningNumberFormLabel,
  WinningNumberFormWrapper,
} from './WinningNumberForm.styles';
import { FlexGrow, FlexWrapper } from '../common/flex/Flex.styles';
import { useState } from 'react';
import { isValidWinningNumber } from '../../services/validation';
import { TICKET } from '../../constants/ticket';
import { INPUT_VALID_MESSAGE } from '../../constants/alertMessage';

const WinningNumberForm = ({ handleSubmit }) => {
  const [inputs, setInputs] = useState(['', '', '', '', '', '', '']);

  const onSubmit = (e) => {
    e.preventDefault();
    const message = isValidWinningNumber(inputs);
    if (message) return alert(message);
    handleSubmit([...inputs]);
  }

  const onChange = ({ target, target: { name, valueAsNumber } }) => {
    target.setCustomValidity(valueAsNumber < TICKET.MIN || valueAsNumber > TICKET.MAX
      ? INPUT_VALID_MESSAGE.SHOULD_BE_IN_VALID_NUMS : ''
    );
    const newInputs = [...inputs];
    newInputs[+name] = valueAsNumber;
    setInputs(newInputs);
  };

  return (
    <WinningNumberFormWrapper onSubmit={onSubmit}>
      <WinningNumberFormLabel>
        지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
      </WinningNumberFormLabel>
      <FlexWrapper>
        <div>
          <Typography>당첨 번호</Typography>
          <div>
            {
              // NOTE: defaultValidation
              [...Array(6).keys()].map((_, index) =>
                <Input
                  required
                  key={index}
                  name={index}
                  value={inputs[index]}
                  onChange={onChange}
                  type='number'
                />
              )
            }
          </div>
        </div>
        <FlexGrow className='bonus-number-container'>
          <Typography>보너스 번호</Typography>
          <FlexWrapper justifyContent={'center'}>
            <Input
              required
              name='6'
              value={inputs[6]}
              type='number'
              onChange={onChange}
              className='bonus-number' />
          </FlexWrapper>
        </FlexGrow>
      </FlexWrapper>
      <Button type="submit" fullWidth className='open-result-modal-button'>
        결과 확인하기
      </Button>
    </WinningNumberFormWrapper>
  );
};

export default WinningNumberForm;
