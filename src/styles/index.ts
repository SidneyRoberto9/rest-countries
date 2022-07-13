import { createGlobalStyle } from 'styled-components';

export interface DefaultTheme {
  theme: {
    body: string;
    text: string;
  };
}

export const GlobalStyles = createGlobalStyle`
 
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    background: ${({ theme }: DefaultTheme) => theme.body};
    color: ${({ theme }: DefaultTheme) => theme.text};
  }
`;
