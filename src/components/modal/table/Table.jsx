import { TableWrapper, TdThWrapper, TrWrapper, Wrapper } from './Table.styles';

const Table = ({ winners }) => {
  return (
    <Wrapper>
      <TableWrapper>
        <thead>
          <TrWrapper>
            <TdThWrapper>일치 갯수</TdThWrapper>
            <TdThWrapper>당첨금</TdThWrapper>
            <TdThWrapper>당첨 갯수</TdThWrapper>
          </TrWrapper>
        </thead>
        <tbody>
          <TrWrapper>
            <TdThWrapper>3개</TdThWrapper>
            <TdThWrapper>5,000</TdThWrapper>
            <TdThWrapper>{winners[3]}개</TdThWrapper>
          </TrWrapper>
          <TrWrapper>
            <TdThWrapper>4개</TdThWrapper>
            <TdThWrapper>50,000</TdThWrapper>
            <TdThWrapper>{winners[4]}개</TdThWrapper>
          </TrWrapper>
          <TrWrapper>
            <TdThWrapper>5개</TdThWrapper>
            <TdThWrapper>1,500,000</TdThWrapper>
            <TdThWrapper>{winners[5]}개</TdThWrapper>
          </TrWrapper>
          <TrWrapper>
            <TdThWrapper>5개 + 보너스볼</TdThWrapper>
            <TdThWrapper>30,000,000</TdThWrapper>
            <TdThWrapper>{winners.bonus}개</TdThWrapper>
          </TrWrapper>
          <TrWrapper>
            <TdThWrapper>6개</TdThWrapper>
            <TdThWrapper>2,000,000,000</TdThWrapper>
            <TdThWrapper>{winners[6]}개</TdThWrapper>
          </TrWrapper>
        </tbody>
      </TableWrapper>
    </Wrapper>
  );
};

export default Table;
