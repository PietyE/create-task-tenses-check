import React from 'react';
import { Box, Typography } from '@mui/material';
import { Sentence } from './components/Sentence';
import { exerciseWords } from '../../../../data/exercicesWords';
import './Task.scss';

export const Task = () => (
  <main className="main">
    <Box>
      <Typography variant="h6" component="div" gutterBottom>
        <span className="key-word-example">Przykład:</span> Książka jest{' '}
        <span className="key-word">lepsza</span> niż film
      </Typography>
      {exerciseWords.map((sentence, index) => (
        <Sentence key={index} keyWord={sentence.keyWord}>
          {sentence.sentence}
        </Sentence>
      ))}
    </Box>
  </main>
);
