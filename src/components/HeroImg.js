import "./HeroImgStyle.css"
import React from 'react'
import IntroImg from "../assets/Banner.jpg"
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg"/>  
        </div>
        <div className="content">
            <h1>Welcome to Dailyworkers</h1>
            <p>React To Each</p>
            <div>
                <Link to={"/services"} className="btn-get-started">Get Started</Link>
                
                {/* <Dropdown>
                        <Dropdown.Toggle  variant="light" fontSize='0' id="dropdown-basic">
                            Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown> */}
                
                
            </div>
            
        </div>
    </div>
  )
}

export default HeroImg