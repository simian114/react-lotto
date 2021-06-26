import React, { useEffect, useState } from 'react';
import { LottoList, LottosHeader, LottosWrapper } from './Lottos.styles';
import Toggle from '../common/toggle/Toggle';
import Lotto from './lotto/Lotto';

const Lottos = ({ tickets }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LottosWrapper>
      <LottosHeader>
        <label className='lottos-header__label'>총 5개를 구매하였습니다.</label>
        <div className='toggle-container'>
          <Toggle handleToggle={(checked) => setIsChecked(checked)}/>
        </div>
      </LottosHeader>
      <LottoList >
        {tickets.map((ticket, index) => 
          <Lotto
            key={index}
            ticket={ticket}
            isShowNumber={isChecked}
          />
        )}
      </LottoList>
    </LottosWrapper>
  );
};

export default Lottos;
