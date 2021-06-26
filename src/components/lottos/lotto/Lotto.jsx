import React, { memo } from 'react'
import { LottoWrapper } from './Lotto.styles';

const Lotto = memo(({ ticket, isShowNumber }) => {
  const display = isShowNumber ? 'inline' : 'none';
  return (
    <LottoWrapper>
      <span className='lotto-icon'>🎟️ </span>
      <span className='lotto-detail' style={{ display }}>
        { ticket.join(', ') }
      </span>
    </LottoWrapper>
  );
});

export default Lotto;
