import React from 'react';
import { createTheme, ThemeProvider as TProvider } from '@mui/material/styles';

type TProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<TProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff4655',
        dark: '#d43842',
      },
      secondary: {
        main: '#f44336',
      },
    },
    typography: {
      fontFamily: 'FFMarkW05-Medium',
    },
  });

  return <TProvider theme={theme}>{children}</TProvider>;
};

export default ThemeProvider;
