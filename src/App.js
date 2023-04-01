
import './App.css';


import Home from './components/pages/Home';

import { useState } from 'react';

import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import { AuthContextProvider } from './components/context/authcontext';

// import BlogPage from './Pages/BlogPage';
// import About from './components/about/about';
// import Contact from './components/contact/contact';
import ContentPage from './components/pages/contentpage';
function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (

    <BrowserRouter>
      <AuthContextProvider>
        <Box style={{ marginTop: 64 }}>

          <Routes>
            
            <Route path="/" element={<Home />} />
          <Route path="/home" element={< ContentPage />} />
          
            {/* <Route path="/about" element={<About/>}/> */}
            {/* <Route path="/contact" element={<Contact/>}/> */} 

          </Routes>
        </Box>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
