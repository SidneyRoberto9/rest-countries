import styled from 'styled-components';

import { DefaultTheme } from '../../styles/theme';

export const InputSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 40px;
  background: ${({ theme }: DefaultTheme) => theme.elements};
  color: ${({ theme }: DefaultTheme) => theme.text};
  cursor: pointer;
  text-align: center;

  height: 45px;
  width: 400px;

  .icon {
    width: 60px;
  }
  input {
    outline: none;
    border: none;
    background: ${({ theme }: DefaultTheme) => theme.elements};
    color: ${({ theme }: DefaultTheme) => theme.text};
    width: 80%;
    font-size: small;

    &::placeholder {
      color: ${({ theme }: DefaultTheme) => theme.text};
    }
  }

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
