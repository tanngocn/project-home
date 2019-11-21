import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.7;
    box-sizing: border-box;
    font-size: 62.5%;


  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    box-sizing: inherit;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
export default GlobalStyle;
