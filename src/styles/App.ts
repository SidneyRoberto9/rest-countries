import styled from 'styled-components';

import { DefaultTheme } from '.';

export const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    //exemple
    font-weight: 600;
    color: ${({ theme }: DefaultTheme) => theme.body};
  }
`;
