import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './Router';
export function App() {

  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
    
}
