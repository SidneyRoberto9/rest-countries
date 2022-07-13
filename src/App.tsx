import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

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
        <button onClick={toggleTheme}>App Works</button>
      </AppStyle>
    </ThemeProvider>
  );
}
