import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-weight: 300;
    background-color: ${(props) => props.theme.bgColor};
    color: black;
    line-height: 1.2;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration:none;
  }
`;

export default GlobalStyle;
