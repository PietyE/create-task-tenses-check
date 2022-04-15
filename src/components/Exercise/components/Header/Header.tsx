import React from 'react';
import { Box, Fab, Typography } from '@mui/material';
import './Header.scss';

export const Header = () => (
  <header className="exercise-header">
    <Fab size="medium" color="primary" sx={{ mr: 4 }}>
      <Typography
        component="div"
        variant="body1"
        color="secondary"
        sx={{ fontWeight: 700 }}
      >
        1.5
      </Typography>
    </Fab>
    <Box>
      <Typography component="div" variant="h6">
        Proszę napisać poprawną formę przymiotnika😊.
      </Typography>
      <Typography component="div" variant="body1">
        (Напишіть правильну форму прикметника)
      </Typography>
    </Box>
  </header>
);
