import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#90caf9',
        light: '#c3fdff',
        dark: '#5d99c6',
        contrastText: '#212121',
      },
      secondary: {
        main: '#d1a103',
        light: '#ffff8b',
        dark: '#c9bc1f',
        contrastText: '#212121',
      },
    },
    typography: {
      fontFamily: 'Nunito',
    },
  }),
);
