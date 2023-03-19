// import { Card } from '@mui/material'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import "./SearchStyle.css"
import { Col, Container, Row } from 'react-bootstrap';
const Search = () => {
    
  return (
    <div >
    <Container >
     <Card  className="shadow p-3 mb-5 bg-white rounded ">
      {/* <Card.Header className='cardHeader' style={{backgroundColor:"rgb(13, 146, 102)"}}></Card.Header> */}
      <Row>
      <Col className="colPadding" lg={6} md={6}>
      <Card.Body>
        <Card.Title className='title'>Search Labour </Card.Title>
        <Card.Text>
                        <input label="Address" className='searchlabour'  inputStyle="box" labelStyle="floating" placeholder="What is your address?" />
        </Card.Text>
      </Card.Body>
      </Col>
      <Col className="colPadding2" lg={6} md={6}>
      <Card.Body>
        <Card.Title className='title'>Search Address</Card.Title>
        <Card.Text>
                        <input label="Address" className='searchAddress'  inputStyle="box" labelStyle="floating" placeholder="What is your address?" />
                        <Button variant="primary" className='searchBtn'>Search</Button>

        </Card.Text>
      </Card.Body>
      </Col>
      </Row>
    </Card>
        </Container>
        
    </div>
  )
}

export default Search