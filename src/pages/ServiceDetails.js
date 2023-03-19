import React from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../components/Footer'
import Getservice from '../components/Getservice'
import Navbar from '../components/Navbar'

const ServiceDetails = () => {
     const parms=useParams();
  const serviceID = Object.values(parms)[0];
  console.log(serviceID);
  
  return (
    <div>
    <Navbar/>
    <Getservice/>
    <h2>{serviceID}Hi there...</h2>
    <Footer/>
    </div>
  )
}

export default ServiceDetails