import styled from 'styled-components';

import { DefaultTheme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  display: block;
  width: 100%;
  background: ${({ theme }: DefaultTheme) => theme.elements};

  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;
    margin: 0 auto;
    max-width: 1440px;
  }
`;

export const ButtonStyle = styled.button`
  outline: none;
  border: none;
  background: ${({ theme }: DefaultTheme) => theme.elements};
  color: ${({ theme }: DefaultTheme) => theme.text};
  cursor: pointer;
  text-align: center;
  span {
    padding-left: 5px;
    font-weight: 900;
  }
`;
