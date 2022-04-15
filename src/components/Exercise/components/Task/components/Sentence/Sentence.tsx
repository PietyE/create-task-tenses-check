import React from 'react';
import { Box, Typography } from '@mui/material';
import { SentenceProps } from '../../../../../../types/types';
import { ValidateForm } from './components/ValidateForm';
import './Sentence.scss';

export const Sentence = ({ children, keyWord }: SentenceProps) => (
  <Box className="sentence-box">
    <Typography variant="body1" component="div" sx={{ mr: 3 }}>
      {children}
    </Typography>
    <ValidateForm keyWord={keyWord} />
  </Box>
);
