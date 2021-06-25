import styled from 'styled-components';

const LottosWrapper = styled.section`
margin-top: 2.25rem;
`;

const LottosHeader = styled.div`
display: flex;
.lottos-header__label {
  flex: 1 1 auto;
  margin-top: 0px;
  margin-bottom: 0px;
}
.toggle-container {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.25rem;
}
`

const LottoList = styled.ul`
list-style:none;
display: flex;
flex-wrap: wrap;
padding-left: 0;
`;

export {
  LottosWrapper,
  LottosHeader,
  LottoList,
}