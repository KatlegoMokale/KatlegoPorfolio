import React from 'react';
import ReactDOM from 'react-dom/client';
import Appbar from './components/Appbar';
import { StyledEngineProvider } from '@mui/material';
import HomePage from './components/Home';
import Header from './components/New/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    {/* <Appbar /> */}
    <HomePage/>
 
    </StyledEngineProvider>
  </React.StrictMode>
);

