import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MonthPannel from './components/MonthPannel';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Grid container mt={1.5} direction={'row'} >
      <MonthPannel mode={mode} setMode={setMode}/>
    </Grid>
    </ThemeProvider>

  );
}

export default App;
