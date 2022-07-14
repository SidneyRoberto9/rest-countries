import styled from 'styled-components';

import { DefaultTheme } from '../../styles/theme';

export const FilterContainer = styled.div`
  .dropdown {
    margin-top: 40px;
    background: ${({ theme }: DefaultTheme) => theme.elements};
    color: ${({ theme }: DefaultTheme) => theme.text};

    height: 45px;
    width: 200px;

    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    position: relative;

    &::before {
      content: '';
      position: absolute;

      right: 0px;
      top: 15px;
      z-index: 10000;
      width: 8px;
      height: 8px;
      border: 2px solid ${({ theme }: DefaultTheme) => theme.text};
      border-top: 2px solid
        ${({ theme }: DefaultTheme) => theme.elements};
      border-right: 2px solid
        ${({ theme }: DefaultTheme) => theme.elements};
      transform: rotate(-45deg);
      transition: transform 0.5s;
      pointer-events: none;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      background: ${({ theme }: DefaultTheme) => theme.elements};
      color: ${({ theme }: DefaultTheme) => theme.text};
      border-radius: 5px;
      cursor: pointer;
      text-align: left;
      padding-left: 20px;

      &::placeholder {
        color: ${({ theme }: DefaultTheme) => theme.text};
      }
    }

    .option {
      position: absolute;
      top: 55px;
      width: 220px;

      background: ${({ theme }: DefaultTheme) => theme.elements};
      box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      overflow: hidden;
      display: none;

      div {
        padding: 12px 20px;

        cursor: pointer;

        &:hover {
          background-color: ${({ theme }: DefaultTheme) =>
            theme.input};
        }
      }
    }
  }

  .dropdown.active::before {
    top: 22px;
    transform: rotate(-225deg);
  }
  .dropdown.active .option {
    display: block;
  }
`;
