import React from 'react';
import { ThemeProvider, Box } from '@mui/material';
import { theme } from './theme/theme';
import './App.scss';
import { Exercise } from './components/Exercise';

const App = () => (
  <ThemeProvider theme={theme}>
    <Box className="wrapper">
      <Exercise />
    </Box>
  </ThemeProvider>
);

export default App;
