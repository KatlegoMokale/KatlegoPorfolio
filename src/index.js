import React from 'react';
import ReactDOM from 'react-dom/client';
import Appbar from './components/Appbar';
import { StyledEngineProvider } from '@mui/material';
import AboutPage from './components/Aboutpage';
import EducationPage from './components/EducationPage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <Appbar />
    <AboutPage/>
    {/* <EducationPage/> */}
    </StyledEngineProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/Appbar" element={<Appbar/>}/>
//       <Route path="/" element={<EducationPage/>}/>
//       <Route path="/" element={<Appbar/>}/>

//     </Routes>
//   </Router>
// )

