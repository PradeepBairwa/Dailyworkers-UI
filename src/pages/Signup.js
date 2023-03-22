
import Modal from 'react-bootstrap/Modal';
import miniLogo from "../assets/Logo/minilogo.png";
import { Button,Grid, Paper, Avatar, Typography, TextField, makeStyles } from '@material-ui/core'
import { useState } from 'react';
import {   Container, Row, Col } from 'reactstrap';
import { signUp } from '../services/user-service';
import { toast } from 'react-toastify';
import Login from '../components/Login';
import {  Link } from 'react-router-dom';

const Signup = (props) => {
   console.log("Props in Signup Modal",props);
   
    const paperStyle = { padding: '30px 10px', width: "100%", margin: "0px" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const [showLogin,setShowLogin]=useState(false);
    const [showSignup,setShowSignup]=useState(false);
    const btnstyle={margin:'8px 0'}
    const useStyles = makeStyles(() => {
  return {
    container:{
      // padding:'2em'
    },
    field:{
      display:'block',
      marginTop:'1em',
      marginBottom:'1em'
    }
  }
})
    const classes = useStyles();

     const[data,setData]=useState({
        fullName:'',
        phoneNumber:'',
        email:'',
        // gender:'',
        password:'',
        confirmPassword:'',
        policyCheck:false
    })

    const[error,setError]=useState({
        errors:{},
        isError:false
    })

    const[errorFormat , setErrorFormat]=useState({
      fullName:'',
      phoneNumber:'',
      email:'',
      password:'',
      confirmPasssword:''
      

    })
   const resetData=()=>{
    setData({
        fullName:'',
        phoneNumber:'',
        email:'',
        gender:'',
        password:'',
        confirmPassword:'',
        policyCheck:false
    })
    setError({
      isError:false
    })
   }
    const handleChange=(event,property)=>{
        // Dynamic setting the values
        setData({...data,[property]:event.target.value})
    }
    const checkChange=(event,property)=>{
      setData({...data,[property]:event.target.checked})
    }
    

    const submitForm=(event)=>{
        event.preventDefault()
        // Validate data
        // if(error.isError){
        //     toast.error("Form Data Invalid");
        //     setError({...error,isError:false})
        //     return;
        // }
       if(data.password!==data.confirmPassword){
          setErrorFormat({
            password:"password does not match",
            confirmPasssword:'Password should match !!!'
          })
          return
       } else{
          setErrorFormat({
            password:"",
            confirmPasssword:''
          })
       }       
        // Call API for sending data
        signUp(data).then((response)=>{
            console.log(response);
            console.log("success log")
            toast.success("User is Registered Successfully")
            resetData();
        }).catch((error)=>{
            console.log(error);
            toast.error(error.message);
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
    
      <Modal show={props.show} onHide={props.close}>
        {/* <Modal.Header closeButton>
                 <Grid style={{marginBottom:"-20px"}} >
                    <Avatar style={avatarStyle} src={miniLogo}>
                        <miniLogo />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid> 
        </Modal.Header> */}
      {/* {JSON.stringify(formValues)} */}
       <Paper elevation={20} style={paperStyle} >
       
                <Grid align='center'>  
                     <Avatar style={avatarStyle} src={miniLogo}><miniLogo/></Avatar>
                    <h2>Sign In</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form for Login!!</Typography>

                </Grid>
                {/* new feilds start */}
                 <Container>
            {/* {JSON.stringify(data)} */}
                <Row>
                    <Col >

                        <form onSubmit={submitForm}>
                        {/* Name Field */}
                        <TextField 
                              placeholder="Enter your full name"
                              label="Full Name"
                              name="fullName"
                              variant="outlined"
                              fullWidth
                              className={classes.field}
                              onChange={(e)=>handleChange(e,'fullName')} 
                              invalid={error.errors?.response?.data?.error ? true:false}
                              value={data.fullName}
                              error={error.errors?.response?.data?.fullName? true:false}
                              helperText={error.errors?.response?.data?.fullName}

                              // error={errorFormat?.fullName? true:false}//custom
                              // helperText={errorFormat?.fullName}
                            />
                            
                        {/* Phone number */}
                         <TextField 
                              placeholder="Enter your phone number"
                              label="Phone Number"
                              name="phoneNumber"
                              variant="outlined"
                              fullWidth
                              onChange={(e)=>handleChange(e,'phoneNumber')} 
                              invalid={error.errors?.response?.data?.error ? true:false}
                              className={classes.field}
                              value={data.phoneNumber}
                              error={error.errors?.response?.data?.phoneNumber? true:false}
                              helperText={error.errors?.response?.data?.phoneNumber}
                              // error={errorFormat?.phoneNumber? true:false}//custom
                              // helperText={errorFormat?.phoneNumber}
                            />
                        {/* Email Field */}
                        <TextField 
                              placeholder="Enter your email"
                              label="Email"
                              name="email"
                              variant="outlined"
                              fullWidth
                              onChange={(e)=>handleChange(e,'email')} 
                              invalid={error.errors?.response?.data?.error ? true:false}
                              className={classes.field}
                              value={data.email}
                              error={error.errors?.response?.data?.email? true:false}
                              helperText={error.errors?.response?.data?.email}
                            />
                            

                        {/* Gender Field */}
                            {/* <FormGroup tag="fieldset">
                            <Row>
                            <Label for="Gender">Gender</Label>
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
                            </FormGroup> */}
                        {/* Password Field */}
                        <TextField 
                              placeholder="Enter your password"
                              label="Password"
                              name="password"
                              type="password" 
                              variant="outlined"
                              fullWidth
                              onChange={(e)=>handleChange(e,'password')} 
                              invalid={error.errors?.response?.data?.error ? true:false}
                              className={classes.field}
                              value={data.password}
                              error={errorFormat.password?true:
                                error.errors?.response?.data?.password? true:false
                                }
                              helperText={errorFormat.password?errorFormat.password:
                                error.errors?.response?.data?.password
                                }
                            />
                            
                        {/* Confirm Field */}
                        <TextField 
                              placeholder="Enter your password"
                              label="Confirm Password"
                              name="confirmPassword"
                              type="password"
                              variant="outlined"
                              fullWidth
                              onChange={(e)=>handleChange(e,'confirmPassword')} 
                              invalid={error.errors?.response?.data?.error ? true:false}
                              className={classes.field}
                              value={data.confirmPassword}
                              // error={error.errors?.response?.data?.password? true:false}
                              // helperText={error.errors?.response?.data?.password}
                              error={errorFormat.password?true:
                                error.errors?.response?.data?.password? true:false
                                }
                              helperText={errorFormat.confirmPasssword?errorFormat.confirmPasssword:
                                error.errors?.response?.data?.confirmPasssword
                                }
                            />
                                <TextField 
                                type="checkbox"
                                name='policyCheck'                                 
                                onChange={(e)=>checkChange(e,'policyCheck')}
                                error={error.errors?.response?.data?.policyCheck? true:false}
                                helperText={error.errors?.response?.data?.policyCheck}
                                
                                />
                                I agree to the terms
                           
                            
                            
                            <Container className='text-center'>
                                <Button color='primary'
                                 variant="contained" 
                                 style={btnstyle}
                                onClick={resetData}>Reset</Button>
                                <Button className='ms-2'
                                 color='primary'
                                 variant="contained" 
                                 style={btnstyle}
                                 type='submit'
                                >Register</Button>
                            </Container>
                            
                        </form>
                    </Col>
                </Row>
            </Container>
                 <Typography > Already have an account !  
                     <Link onClick={()=>setShowLogin(true)}  >
                        Login 
                </Link>
                </Typography>
      </Paper>  
      <Login show={showLogin} close={()=>setShowLogin(false)}/>  
      <Signup show={showSignup} close={()=>setShowSignup(false)}/>  
      
        
      </Modal>
    </div>
  )
}

export default Signup