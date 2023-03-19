import "./AboutStyle.css";

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <div id="main">
    <section id="about" className="about">
    <Container>
        <Row justify-content-end>
            <Col lg={11}>
            <Row justify-content-end>
            <Col lg={3} md={5} d-md-flex align-items-md-stretch>
                <div class="count-box py-5">
                  <i class="icofont-simple-smile"></i>
                  <span data-toggle="counter-up">65</span>
                  <p style={{color:"black"}}>Happy Clients</p>
                </div>
            </Col>
            </Row>

            </Col>
        </Row>
    </Container>

    </section>

    </div>
  )
}

export default About;