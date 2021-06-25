import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    height: 100%;
    font-size: 16px;
  }

  #app {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
