import './App.css';
import React from "react";
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetails from './pages/ServiceDetails';
import { ToastContainer ,toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer position='top-center'/>
      <Routes>
      
        <Route path="/" element={<Home />}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/servicedetails/:serviceID" element={<ServiceDetails/>}/>
      </Routes>
    </>
  
  );
}

export default App;
