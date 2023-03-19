import React from 'react'
import { useParams } from 'react-router-dom'
import "./Getservice.css"

const Getservice = () => {
  const parms=useParams();
  const serviceID=Object.values(parms)[0];
  console.log(serviceID);
  return (
    <div className='color'style={{padding:"100px"}}>
    <h4>Service Details {serviceID}</h4>
    </div>
  )
}

export default Getservice;