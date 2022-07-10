import React from 'react';
import logo from './logo.svg';
import './App.css';
import MonthPannel from './components/MonthPannel';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container mt={1.5} direction={'row'} justifyContent={'center'}>
      <MonthPannel />
    </Grid>

  );
}

export default App;
