import { createGlobalStyle } from 'styled-components';

import { DefaultTheme } from './theme';

export const GlobalStyles = createGlobalStyle`
 
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    background: ${({ theme }: DefaultTheme) => theme.bg};
    color: ${({ theme }: DefaultTheme) => theme.text};
  }
`;
