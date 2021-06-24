import styled, { css } from 'styled-components';

const colors = {
  primary: css`
    &: hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    background-image: linear-gradient(
      to right,
      #314755 0%,
      #26a0da 51%,
      #314755 100%
    );
  `,
  warning: css`
    &: hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    background-image: linear-gradient(
      to right,
      #e52d27 0%,
      #b31217 51%,
      #e52d27 100%
    );
  `,
};

const colorStyle = css`
  ${({ color }) => colors[color]}
`;

const fullWidthStyle = css`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      margin-top: 20px;
    `}
`;

const StyledButton = styled.button`
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
  transition: 0.5s;
  background-size: 200% auto;
  ${fullWidthStyle};
  ${colorStyle}
`;

export default StyledButton;
