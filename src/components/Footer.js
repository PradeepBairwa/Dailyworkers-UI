import "./FooterStyle.css";
import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsTwitter} from 'react-icons/bs';
import {BsFacebook,BsSkype,BsLinkedin} from 'react-icons/bs';
import {FiInstagram} from 'react-icons/fi';


const Footer = () => {
  return (
    <div id="footer">
    <div className="footer-top">

    <Container>
      <Row>
        <Col lg={3} md={6} className="footer-info" style={{color:"black"}}>
             <h3>DailyWorkers</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
        </Col>
        <Col lg={3} md={6} className="footer-links" style={{color:"black"}}>
             <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
        </Col>
        <Col lg={3} md={6} className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              Sec-62 Ballabgarh <br/>
              Faridabad, 121004 <br/>
              India <br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@DailyWorkers.com
            </p>

            <div className="social-links">
                
              <a href="#" className="twitter"><BsTwitter/></a>
              <a href="https://www.facebook.com/DailyWorkers/" class="facebook"><BsFacebook/></a>
              <a href="#" class="instagram"><FiInstagram/></a>
              <a href="#" class="google-plus"><BsSkype/></a>
              <a href="https://www.linkedin.com/company/dailyworkers/?viewAsMember=true" class="linkedin"><BsLinkedin/></a>
            </div>
        </Col>
       
        <Col lg={3} md={6} className="footer-newsletter">
             <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
            
              {/* <input type="email" name="email"><input type="submit" value="Subscribe"> */}
            <form>
  
    <input type="email" name="email" />
  
  <input type="submit" value="Submit" />
</form>
        </Col>
      </Row>
    </Container>
    </div>
    <Container>
      <div className="copyright">
        &copy; 2020 Copyright <strong><span>DailyWorkers</span></strong>. All Rights Reserved
      </div>
      </Container>
    </div>
    

    
    
  )
}

export default Footer