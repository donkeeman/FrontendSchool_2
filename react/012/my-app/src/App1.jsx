import React from "react";
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Example from "./Components/Example";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

 * {
  box-sizing: border-box;
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <h1>Hi, I'm an app!</h1>
    <h2>Hi, I'm an app!</h2>
    <span>글귀 3</span>
    <Example />
  </React.Fragment>
);

export default App;