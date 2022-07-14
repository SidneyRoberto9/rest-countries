import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeContextProvider } from './hooks/useThemeContext';
import Details from './pages/Details';
import Home from './pages/Home';
import { GlobalStyles } from './styles';

export function Router() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}
