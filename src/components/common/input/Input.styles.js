import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  text-align: center;
  width: 30px;
  height: 36px;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    `}
`;

export { StyledInput };
