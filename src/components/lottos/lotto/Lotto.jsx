import { LottoWrapper } from './Lotto.styles';

const Lotto = () => {
  return (
    <LottoWrapper>
      <span className='lotto-icon'>🎟️ </span>
      {/* NOTE: 토글이 눌리면 display: 'inline' 이 되어야함 */}
      <span className='lotto-detail' style={{ display: 'none' }}>
        28, 19, 29, 5, 3, 2
      </span>
    </LottoWrapper>
  );
};

export default Lotto;
