import React from 'react';
import { Box, Typography } from '@mui/material';

import './Task.scss';

export const Task = () => (
  <main className="main">
    <Box>
      <Typography variant="h6" component="div" gutterBottom>
        <span className="key-word-example">Przykład:</span> Książka jest{' '}
        <span className="key-word">lepsza</span> niż film
      </Typography>
    </Box>
  </main>
);
