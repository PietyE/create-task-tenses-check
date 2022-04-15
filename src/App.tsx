import React from 'react';
import { ThemeProvider, Box } from '@mui/material';
import { theme } from './theme/theme';
import { Exercise } from './components/Exercise';
import './App.scss';

const App = () => (
  <ThemeProvider theme={theme}>
    <Box className="wrapper">
      <Exercise />
    </Box>
  </ThemeProvider>
);

export default App;
