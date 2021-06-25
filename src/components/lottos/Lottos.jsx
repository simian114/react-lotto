import React from 'react';
import { LottoList, LottosHeader, LottosWrapper } from './Lottos.styles';
import Toggle from '../common/toggle/Toggle';

const Lottos = () => {
  return (
    <LottosWrapper>
      <LottosHeader>
        <label className='lottos-header__label'>총 5개를 구매하였습니다.</label>
        <div className='toggle-container'>
          <Toggle />
        </div>
      </LottosHeader>
      <LottoList>
        <li className='mx-1 text-4xl'>🎟️ </li>
        <li className='mx-1 text-4xl'>🎟️ </li>
        <li className='mx-1 text-4xl'>🎟️ </li>
        <li className='mx-1 text-4xl'>🎟️ </li>
        <li className='mx-1 text-4xl'>🎟️ </li>
      </LottoList>
    </LottosWrapper>
  );
};

export default Lottos;
