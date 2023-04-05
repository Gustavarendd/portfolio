import { createGlobalStyle } from 'styled-components';
import backgroundImage from './assets/Backgrounds/bottom.jpeg';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  padding: 0px;
  font-size: 1.25rem;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  
display: flex;
flex-direction: column;
}

h3{
  font-size: 1.6rem;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} 
`;
