import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font-family-primary: 'Playfair Display';
    --font-weight-normal: 400;
    --font-weight-bold: 700;
    --color-primary: #1A1919;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font: 400 62.5%/1.4 var(--font-family-primary);
  }

  button {
    display: inline-block;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    background-color: transparent;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-bold);
  }
`;

export default GlobalStyles;
