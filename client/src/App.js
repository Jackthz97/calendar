import React, {useState} from 'react';
import './App.css';
import MonthPannel from './components/MonthPannel';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ProtectedRoutes from './hooks/userAuth';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';

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
    {/* <Grid container mt={1.5} direction={'row'} >
      <MonthPannel mode={mode} setMode={setMode}/>
    </Grid> */}
    <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/" element={<ProtectedRoutes />}>
            <Route
              path="/dashboard"
              element={<MonthPannel mode={mode} setMode={setMode} />}
            />
          </Route>
        </Routes>
    </ThemeProvider>

  );
}

export default App;
