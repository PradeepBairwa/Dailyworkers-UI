// import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Image, WidthFull } from '@mui/icons-material';
import miniLogo from "../assets/Logo/minilogo.png";
import { Form } from 'react-bootstrap';
// ================================
import { Grid, Paper, Avatar, InputAdornment, IconButton, InputLabel, OutlinedInput } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { Button, Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from "@material-ui/core"
import { KeyboardArrowRight } from "@material-ui/icons";
// import { useState } from "react";
const useStyles = makeStyles(() => {
  return {
    container:{
      padding:'2em'
    },
    field:{
      display:'block',
      marginTop:'1em',
      marginBottom:'1em'
    }
  }
})
const Signup = (props) => {
  //  console.log("Props in Signup Modal",props);

   //data binding...
   const[regData,setRegData]=useState({
        name:'',
        email:'',
        gender:'',
        phoneNumber:'',
        password:'',
        terms:''
   });
   
  //  useEffect(()=>{
  //   console.log(data);
  //  },[data])
   const handleChange=(event,property)=>{
    //dynamic setting the values
    
      setRegData({...regData,[property]:event.target.value})
      
   }
   const resetData=()=>{
    setRegData({
       name:'',
        email:'',
        gender:'',
        phoneNumber:'',
        password:'',
    })
   }
   //submit form
   const submitForm=(event)=>{
    console.log("submit...")
    // event.preventDefault()
    console.log("submitted  "+regData.email);
    
    resetData();
    //data validate

    //call server API for the data
   }
   //data binding...

   const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const paperStyle = { padding: '30px 20px', width: "100%", margin: "0px" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
// New 
    const classes = useStyles();

  const [formValues, setFormValues] = useState({
    name:{
      value:'',
      error:false,
      errorMessage:'You must enter a name'
    },
    email:{
      value:'',
      error:false,
      errorMessage:'You must enter an age'
    },
    gender:{
      value:'',
      error:false,
      errorMessage:'You must enter your liked tech stacks'
    },
    phoneNumber:{
      value:'',
      error:false,
      errorMessage:'You must choose your job title'
    },
    password:{
      value:'',
      error:false,
      errorMessage:'You must choose your job title'
    },
    confirmPassword:{
      value:'',
      error:false,
      errorMessage:'You must choose your job title'
    },
    terms:{
      value:'',
      error:false,
      errorMessage:'You must Accept the terms & conditions'
    }
  })
  const getCheck=()=>{
    console.log("terms true")
   
  }
  const handleChange2 = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]:{
        ...formValues[name],
        value
      }
    })
  }
  const [isError,setIsError]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = {...formValues}
    
    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if(currentValue === ''){
        newFormValues = {
          ...newFormValues,
          [currentField]:{
            ...newFormValues[currentField],
            error:true,
            
          }
          
        }
      }
      
      
    }
        
      console.log("Valuesm "+newFormValues.name.error);
    setFormValues(newFormValues)
   console.log(JSON.stringify(formValues, null, 2));
  }
  
  return (
    <div>
    
      <Modal show={props.show} onHide={props.close}>
      {/* {JSON.stringify(formValues)} */}
       <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle} src={miniLogo}>
                        <miniLogo />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                {/* new feilds start */}
                 <form noValidate onSubmit={handleSubmit} >
                <TextField 
                      placeholder="Enter your name"
                      label="Name"
                      name="name"
                      variant="outlined"
                      fullWidth
                      required
                      className={classes.field}
                      value={formValues.name.value}
                      onChange={handleChange2}
                      error={formValues.name.error}
                      helperText={formValues.name.error && formValues.name.errorMessage}
                    />
                     <TextField 
                      placeholder="Enter your email"
                      label="Email"
                      name="email"
                      variant="outlined"
                      fullWidth
                      required
                      className={classes.field}
                      value={formValues.email.value}
                      onChange={handleChange2}
                      error={formValues.email.error}
                      helperText={formValues.email.error && formValues.email.errorMessage}
                    />
                    <TextField 
                      placeholder="Enter your phone number"
                      label="Phone Number"
                      name="phoneNumber"
                      variant="outlined"
                      fullWidth
                      required
                      className={classes.field}
                      value={formValues.phoneNumber.value}
                      onChange={handleChange2}
                      error={formValues.phoneNumber.error}
                      helperText={formValues.phoneNumber.error && formValues.phoneNumber.errorMessage}
                    />
                     <TextField 
                      placeholder="Enter your password"
                      label="Password"
                      name="password"
                      variant="outlined"
                      fullWidth
                      id="outlined-password-input"
                       type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }

                      required
                      className={classes.field}
                      value={formValues.password.value}
                      onChange={handleChange2}
                      error={formValues.password.error}
                      helperText={formValues.password.error && formValues.password.errorMessage}
                    />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            
          />
          
        </FormControl>
                    <FormControlLabel
                        control={<Checkbox name="terms"  />}
                        label="I have read and agree to the Terms *"
                      
                        // onChange={(e)=>handleChange(e,'terms')}
                        // onChange={getCheck}
                        required
                      defaultValue={'false'}
                      className={classes.field}
                      value={formValues.terms.value}
                      onChange={handleChange2}
                      error={formValues.terms.error}
                      helperText={formValues.terms.error && formValues.terms.errorMessage}
                        // value={regData.terms}
                    />
                  
                    
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
          
               {/* new feilds end */}
                    {/* <TextField fullWidth label='Name' placeholder="Enter your name" autoFocus
                    onChange={(e)=>handleChange(e,'name')}
                    value={regData.name}
                     /> */}
                    {/* <TextField fullWidth label='Email' placeholder="Enter your email"
                    onChange={(e)=>handleChange(e,'email')}
                    value={regData.email}
                     /> */}
                    {/* <FormControl component="fieldset" style={marginTop} className={classes.field}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} 
                            label="Female" />
                            <FormControlLabel value="male" control={<Radio />} 
                            label="Male" />
                            
                        </RadioGroup>
                    </FormControl> */}
                    {/* <TextField fullWidth label='Phone Number' placeholder="Enter your phone number"
                    onChange={(e)=>handleChange(e,'phoneNumber')}
                    value={regData.phoneNumber}
                     /> */}
                    {/* <TextField fullWidth label='Password' placeholder="Enter your password"
                      onChange={(e)=>handleChange(e,'password')}
                      value={regData.password}
                    /> */}
                    {/* <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/> */}
                    {/* <FormControlLabel
                        control={<Checkbox name="checkedA" value={true} />}
                        label="I accept the terms and conditions."
                        onChange={(e)=>handleChange(e,'terms')}
                        value={regData.terms}
                    />
                    <Button type='submit'onClick={submitForm} variant='contained' color='primary'>Sign up</Button> */}
               </form>
            </Paper>      
      
        
      </Modal>
    </div>
  )
}

export default Signup