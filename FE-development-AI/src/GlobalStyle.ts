import { createGlobalStyle } from "styled-components";

// If using global styles:
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`;
