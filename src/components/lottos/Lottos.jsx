import React from 'react';
import { LottoList, LottosHeader, LottosWrapper } from './Lottos.styles';

const Lottos = () => {
  return (
    <LottosWrapper>
      <LottosHeader>
        <label className="lottos-header__label">총 5개를 구매하였습니다.</label>
        <div className="toggle-container">

          <label className="switch">
            <input type="checkbox" className="lotto-numbers-toggle-button" />
            <span className="text-base font-normal">번호보기</span>
          </label>
        </div>
      </LottosHeader>
      <LottoList>
        <li className="mx-1 text-4xl">🎟️ </li>
        <li className="mx-1 text-4xl">🎟️ </li>
        <li className="mx-1 text-4xl">🎟️ </li>
        <li className="mx-1 text-4xl">🎟️ </li>
        <li className="mx-1 text-4xl">🎟️ </li>
      </LottoList>
    </LottosWrapper>
  );
}

export default Lottos;
