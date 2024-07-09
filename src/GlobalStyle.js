import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
