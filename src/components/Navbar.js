import "./NavbarStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import Logo from "../assets/Logo.png";
import "./Login.js";
import LoginPage from '../components/Login'
import Signup from "../pages/Signup";
import Register from "./Register";

const Navbar = () => {

    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);

    const[color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    // Login Model
    const [showLogin,setShowLogin]=useState(false);
    const [showSignup,setShowSignup]=useState(false);


    window.addEventListener("scroll",changeColor);
    return (
        //header
    <div className={color ?"header header-bg":"header"}>
    <Link className='link' to={"/"}>
      <img src={Logo}style={{width:"180px",height:"40px"}} alt="" class="img-fluid"></img>
    </Link>
    <ul className={click ?"nav-menu active": "nav-menu"}>
        <li>
            <Link className='link' to={"/"}>Home</Link>
        </li>
        <li>
            <Link className='link' to={"/about"}>About</Link>
        </li>
        <li>
            <Link className='link' to={"/services"}>Services</Link>
        </li>
        <li>
            <Link className='link' to={"/contact"}>Contact</Link>
        </li>
        <li>
            <Link className='link' onClick={()=>setShowLogin(true)} >
            Login
            </Link>
        </li>
        <li>
             <Link className='link' onClick={()=>setShowSignup(true)} >
            
            Signup</Link>
        </li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
    {click ? (
        <FaTimes size={20} style={{color:"black"}}/>
        ):(
        <FaBars size={20} style={{color:"black"}}/>
    )}
    {/* Login Modal */}
    <LoginPage show={showLogin} close={()=>setShowLogin(false)}/>
    <Signup show={showSignup} close={()=>setShowSignup(false)}/>
        
    </div>
     
    </div>
  )
  
}

export default Navbar