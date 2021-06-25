import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TableWrapper = styled.table`
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  border-collapse: collapse;
  border-color: black;

  th,
  td {
    border-bottom: 1px solid gainsboro;
  }
`;

const TrWrapper = styled.tr`
  text-align: center;
`;

const TdThWrapper = styled.td`
  padding: 0.75rem;
`;

export { Wrapper, TableWrapper, TrWrapper, TdThWrapper };
