import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, FormFeedback } from 'reactstrap';
import { signUp } from '../services/user-service';
import { toast } from 'react-toastify';
function Register() {


    const[data,setData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        gender:'',
        password:'',
        confirmPassword:''
    })

    const[error,setError]=useState({
        errors:{},
        isError:false
    })

   const resetData=()=>{
    setData({
        firstName:'',
        lastName:'',
        email:'',
        gender:'',
        password:'',
        confirmPassword:''
    })
   }
    const handleChange=(event,property)=>{
        // Dynamic setting the values
        setData({...data,[property]:event.target.value})
    }

    const submitForm=(event)=>{
        event.preventDefault()
        // Validate data
        // if(error.isError){
        //     toast.error("Form Data Invalid");
        //     setError({...error,isError:false})
        //     return;
        // }

        // Call API for sending data
        signUp(data).then((resp)=>{
            console.log(resp);
            console.log("success log")
            toast.success("User is Registered Successfully")
        }).catch((error)=>{
            console.log(error);
            toast.error(error.response.data.error)
            setError({
                errors:error,
                isError:true
            })
            console.log("Error log");
        })
        console.log(data);
    }


  return (
     <div>
            <Container>
            {/* {JSON.stringify(data)} */}
                <Row>
                    <Col sm={{size:6,offset:3}}>

                        <Form onSubmit={submitForm}>
                        {/* Name Field */}
                        <Row>
                            <Col>
                            <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input 
                            type="text" 
                            name="firstName" 
                            id="firstName"
                            onChange={(e)=>handleChange(e,'firstName')} 
                            value={data.firstName}
                            placeholder="enter your first name"
                            invalid={error.errors?.response?.data?.error ? true:false}
                            />
                            <FormFeedback>
                                {error.errors?.response?.data?.error}
                            </FormFeedback>
                            </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input 
                            type="text" 
                            name="lastName" 
                            id="lastName"
                            onChange={(e)=>handleChange(e,'lastName')} 
                            value={data.lastName}
                            placeholder="enter your last name"
                            invalid={error.errors?.response?.data?.error ? true:false}
                            />
                            <FormFeedback>
                                {error.errors?.response?.data?.error}
                            </FormFeedback>
                            </FormGroup>
                            </Col>
                        </Row>
                            
                        {/* Email Field */}
                            <FormGroup>
                            <Label for="Email">Email</Label>
                            <Input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={(e)=>handleChange(e,'email')} 
                            value={data.email}
                            placeholder="enter your email" 
                            invalid={error.errors?.response?.data?.error ? true:false}
                            />
                            <FormFeedback>
                                {error.errors?.response?.data?.error}
                            </FormFeedback>
                            </FormGroup>
                        {/* Password Field */}
                            <FormGroup>
                            <Label for="Password">Password</Label>
                            <Input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={(e)=>handleChange(e,'password')}
                            value={data.password} 
                            placeholder="enter password"
                            invalid={error.errors?.response?.data?.error ? true:false}
                            />
                            <FormFeedback>
                                {error.errors?.response?.data?.error}
                            </FormFeedback>
                            </FormGroup>
                        {/* Confirm Field */}
                            <FormGroup>
                            <Label for="ConfirmPassword">Password</Label>
                            <Input 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword"
                            onChange={(e)=>handleChange(e,'confirmPassword')}
                            value={data.confirmPassword}  
                            placeholder="confirm password"
                            invalid={error.errors?.response?.data?.error ? true:false}
                            />
                            <FormFeedback>
                                {error.errors?.response?.data?.error}
                            </FormFeedback>
                            </FormGroup>
                        {/* Gender Field */}
                        
                            <FormGroup tag="fieldset">
                            <Row>
                            <legend>Gender</legend>
                            <Col>
                            <FormGroup check>
                                <Label check>
                                <Input 
                                type="radio" 
                                name="gender" 
                                onChange={(e)=>handleChange(e,'gender')} 
                                value={'male'}/>{' '}
                                Male
                                </Label>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup check>
                                <Label check>
                                <Input 
                                type="radio" 
                                name="gender" 
                                onChange={(e)=>handleChange(e,'gender')} 
                                value={'female'} />{' '}
                                    Female
                                </Label>
                            </FormGroup>
                            </Col>
                            </Row>
                            </FormGroup>
                            
                            <FormGroup check>
                            <Label check>
                                <Input type="checkbox" value={'true'} />{' '}
                                Check me out
                            </Label>
                            </FormGroup>
                            <Container className='text-center'>
                                <Button color='primary'onClick={resetData}>Reset</Button>
                                <Button className='ms-2'>Register</Button>
                            </Container>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
     </div>
  )
}

export default Register