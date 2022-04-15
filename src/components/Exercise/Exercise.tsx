import React from 'react';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { Task } from './components/Task';

export const Exercise = () => (
  <Container maxWidth="xl" sx={{ p: 5 }}>
    <Header />
    <Task />
  </Container>
);
