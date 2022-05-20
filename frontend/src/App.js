


import { createTheme, Typography, ThemeProvider} from '@mui/material';
import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Login from './routes/Login';
import Product from './routes/Product';
import SignUp from './routes/SignUp';

const theme = createTheme({
  typography :{
    fontFamily : 'Roboto Flex',
  } ,
  palette : {
    type: 'light',
    primary: {
      main: '#3fb589',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
     
      primary: '#000000',
      secondary: '#000000',
      disabled: '#000000',
    },
  }
  
})

function App() {
  return (
    
   <ThemeProvider theme={theme}>
    <React.Fragment >
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
        </Route>
        
      </Routes>
      <Footer/>
    </React.Fragment>
    </ThemeProvider>

  );
}

export default App;
