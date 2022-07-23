import styled from 'styled-components';

import { DefaultTheme } from '../../styles/theme';

export const DetailContent = styled.div`
  display: block;
  width: 90%;
  padding: 0 40px;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    background: ${({ theme }: DefaultTheme) => theme.elements};
    color: ${({ theme }: DefaultTheme) => theme.text};
    cursor: pointer;
    text-align: center;
    outline: none;
    border: none;

    height: 35px;
    width: 130px;
    margin-top: 50px;

    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 300;
    .icon {
      margin-right: 10px;
    }
  }
  .Box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 50px;

    img {
      width: 500px;
      height: 370px;
      object-fit: fill;
      -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0 120px;
      margin-top: 20px;
      color: ${({ theme }: DefaultTheme) => theme.text};
      h3 {
        font-size: 1.7rem;
        font-weight: 900;
      }

      .infoBottom {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-top: 60px;
        font-size: 0.8rem;
        width: 100%;
        span {
          strong {
            font-weight: 600;
          }
          padding: 10px;
          b {
            color: #c3c3c3;
            font-weight: 200;
            padding: 5px 20px;
            margin: 0px 5px;

            background: ${({ theme }: DefaultTheme) =>
              theme.elements};
            color: ${({ theme }: DefaultTheme) => theme.text};
            cursor: pointer;
            text-align: center;
            outline: none;
            border: none;

            height: 35px;
            width: 130px;
            margin-top: 50px;

            -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            font-size: 0.8rem;
            font-weight: 300;
          }
        }
      }

      .infoTop {
        display: grid;
        grid-template-columns: 220px 210px;
        grid-template-areas: 'info1 info2';
        font-size: 0.8rem;

        .cap1,
        .cap2 {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 10px;

          span {
            strong {
              font-weight: 600;
            }

            b {
              color: #c3c3c3;
              font-weight: 200;
            }
          }
        }

        .cap1 {
          grid-area: info1;
        }

        .cap2 {
          grid-area: info2;
        }
      }
    }
  }
`;
