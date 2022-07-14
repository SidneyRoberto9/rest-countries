import styled from 'styled-components';

export const MainContent = styled.main`
  display: block;
  width: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 40px;
    align-items: center;
    margin: 0 auto;
    max-width: 1440px;
  }

  .Cards {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 40px;
    align-items: center;
    margin: 0 auto;
    max-width: 1440px;
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 80px;
  }
`;
