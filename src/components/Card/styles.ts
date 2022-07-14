import styled from 'styled-components';

import { DefaultTheme } from '../../styles/theme';

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  overflow: hidden;
  width: 270px;
  height: 340px;
  cursor: pointer;

  img {
    width: 100%;
    height: 160px;
    object-fit: fill;
  }

  .Box {
    background-color: ${({ theme }: DefaultTheme) => theme.elements};
    height: 180px;

    span {
      display: block;
      font-weight: 900;
      font-size: 1.1rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding: 14px 30px;
      color: ${({ theme }: DefaultTheme) => theme.text};
    }

    .info {
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      color: ${({ theme }: DefaultTheme) => theme.text};
      p {
        display: flex;
        flex-direction: row;
        margin: 3px;

        b {
          font-weight: 300;
          filter: brightness(0.8);
        }

        strong {
          font-weight: 600;
          margin-right: 5px;
        }
      }
    }
  }
`;
