import { Col, Container, Row } from 'react-bootstrap';
import React from 'react'
import "./Services.css"
import Card from 'react-bootstrap/Card';
import carwash from "../assets/ServiceIcons/car_wash.png";
import rajMistri from "../assets/ServiceIcons/raj_mistri.png";
import Helper from '../assets/ServiceIcons/construction_helper.png';
import marbleMistri from '../assets/ServiceIcons/marble_mistri.png';
import Cleaner from '../assets/ServiceIcons/cleaning.png';
import Gardning from '../assets/ServiceIcons/gardening.png';
import LodingUnloading from '../assets/ServiceIcons/loading_unloading.png';
import Painter from '../assets/ServiceIcons/painting.png'
import applianceRepair from '../assets/ServiceIcons/ApplianceRepair.jpeg'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
        <Container style={{color:"black"}}>
            <div className="section-title pt-5 pb-5" data-aos="fade-up">
            <h>What We Do</h>
          <h2>Our Services</h2>
        </div>
        <Row className="add-space" >
            <Col lg={3} md={4} sm={6} xs={6} >
            <Link className='link' to={`/servicedetails/${"carWash"}`} >
                 <p> <Card className="cardShadow">
                   <Card.Img variant="top" src={carwash} />
                    <Card.Header>
                         <h4 class="title" style={{textSizeAdjust:"float"}}>Car Wash</h4>
                    </Card.Header>

                 </Card></p>
                 </Link>
            </Col>
            <Col lg={3} md={4} sm={6} xs={6}  >
            <Link className='link' to={`/servicedetails/${"rajMistri"}`}>
                 <Card className="cardShadow">
                  <Card.Img variant="top" src={rajMistri} />
                    <Card.Header>
                         <h4 class="title">Raj Mistri</h4>
                    </Card.Header>
                 </Card>
             </Link>
            </Col>
            <Col lg={3} md={4} sm={6} xs={6} >
            <Link className='link' to={`/servicedetails/${"helper"}`}>
                 <Card className="cardShadow">
                     <Card.Img variant="top" src={Helper} />
                     <Card.Header>
                          <h4 class="title">Labour</h4>
                     </Card.Header>
                 </Card>
            </Link>     
            </Col>
            <Col lg={3} md={4} sm={6} xs={6} >
            <Link className='link' to={`/servicedetails/${"marbleMistri"}`}>
                 <Card className="cardShadow">
                    <Card.Img variant="top" src={marbleMistri} />
                    <Card.Header>
                              <h1 className="title">Marble Mistri</h1>
                    </Card.Header>
                    </Card>
            </Link>        
            </Col>
            <Col lg={3} md={4}sm={6} xs={6} >
            <Link className='link' to={`/servicedetails/${"cleaner"}`}>
                 <Card className="cardShadow">
                    <Card.Img variant="top" src={Cleaner} />
                    <Card.Header>
                         <h4 class="title">Cleaner</h4>
                    </Card.Header>
                    </Card>
            </Link>
            </Col>
            <Col lg={3} md={4} sm={6} xs={6} >
            <Link className='link' to={`/servicedetails/${"gardning"}`}>
                 <Card className="cardShadow">
                    <Card.Img variant="top" src={Gardning} />
                    <Card.Header>
                         <h4 className="title">Gardning</h4>
                    </Card.Header>
                    </Card>
            </Link>        
            </Col>
            <Col lg={3} md={4} sm={6}  xs={6} >
            <Link className='link' to={`/servicedetails/${"loading"}`} >
                 <Card className="cardShadow" >
                    <Card.Img variant="top" src={LodingUnloading}  />
                    <Card.Header>
                         <h4 className="title" >Loding & Unloading</h4>
                    </Card.Header>
                    </Card>
            </Link>
            </Col>
            <Col lg={3} md={4} sm={6} xs={6} >
            <Link className='link' to={`/servicedetails/${"painter"}`}>
                 <Card className="cardShadow">
                    <Card.Img variant="top" src={Painter}  />
                    <Card.Header>
                         <h4 className="title">Painter</h4>
                    </Card.Header>
                    </Card>
            </Link>
            </Col>
        </Row>
        <Row>
          <Col  >
            <Link className='link' to={`/servicedetails/${"repair"}`}>
                 <Card className="cardShadow"   >
                    <Card.Img variant="top" fluid src={applianceRepair}  />
                    <Card.Header>
                         <h4 className="title">Appliance Repair</h4>
                    </Card.Header>
                    </Card>
            </Link>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Services