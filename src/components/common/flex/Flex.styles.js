import styled, { css } from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
`;

const FlexGrow = styled.div`
  flex-grow: 1;
  ${({ grow }) =>
    grow == 0 &&
    css`
      flex-grow: 0;
    `}
`;

export { FlexWrapper, FlexGrow };
