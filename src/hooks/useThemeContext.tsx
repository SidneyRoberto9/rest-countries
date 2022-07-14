import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../styles/theme';

interface ThemeContextData {
  isDarkTheme: string;
  setIsDarkTheme: (isDarkTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

type ThemeContextProps = {
  children: React.ReactNode;
};

export function ThemeContextProvider({
  children,
}: ThemeContextProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      return 'dark';
    } else {
      return 'light';
    }
  });

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider
        theme={isDarkTheme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    if (isDarkTheme === 'dark') {
      setIsDarkTheme('light');
      localStorage.setItem('theme', 'light');
    }
    if (isDarkTheme === 'light') {
      setIsDarkTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return {
    changeTheme,
  };
};
