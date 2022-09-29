import './App.scss';
import 'smart-webcomponents-react/source/styles/smart.default.css';

import { useEffect, useState } from 'react';

import { colorSchemes, ThemeProvider, themes } from '../contexts/themeContext';

import Content from './Content/Content';

import { BrowserRouter } from 'react-router-dom';

function App() {

  const [theme] = useState(() => {

    const theme = {
      colorScheme: colorSchemes.default,
      theme: themes.light
    }

    const newTheme = localStorage.getItem('theme');
    const newColorScheme = localStorage.getItem('colorScheme');

    if (newTheme) {
      theme.theme = newTheme;
    }

    if (newColorScheme) {
      theme.colorScheme = newColorScheme;
    }

    return theme;

  });

  useEffect(() => {

    window.Smart.License = ""; //Paste the activation key here

  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </ThemeProvider>
    </>

  );
}

export default App;
