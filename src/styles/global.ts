import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    font-size: 1.6rem;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  html {
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
  text-align: center;
  
  &:before {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    display: block;
    background-image: url("/src/assets/background.jpg");
    filter: blur(3px) brightness(30%);
  }

}

  h1 {
    color: ${({theme}) => theme.white};
    font-size: 4rem;
    padding-top: 4rem;
  }
  
  body, input, textarea, button, select {
    font-family: "Poppins", sans-serif
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`