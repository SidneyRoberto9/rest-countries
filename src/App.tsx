import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Content from './components/Content/Content';
import Header from './components/Header/Header';
import { GlobalStyles } from './styles';
import { AppStyle } from './styles/App';
import { darkTheme, lightTheme } from './styles/theme';

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppStyle>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Content />
      </AppStyle>
    </ThemeProvider>
  );
}
