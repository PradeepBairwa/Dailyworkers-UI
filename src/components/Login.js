// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import miniLogo from '../assets/Logo/minilogo.png'

import { Grid,Paper, Avatar, TextField, Button, Typography,Link, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Signup from '../pages/Signup';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Stack } from '@mui/material';

import {Container, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup } from "@material-ui/core"
import { KeyboardArrowRight } from "@material-ui/icons";
const Login = (props) => {
  
  // console.log("Props in Login Modal",props);
  const paperStyle={padding: '30px 20px', width: "100%", margin: "0px"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [showSignup,setShowSignup]=useState(false);
    const [showLogin,setShowLogin]=useState(false);

    const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    //Data Binding..
     const[loginData,setLoginData]=useState({
        username:'',
        password:''
   });
   const[error,setError]=useState({
    errorType:'',
    errorMessage:''
   });

   const handleChange=(event,property)=>{
    //dynamic setting the values
    
      setLoginData({...loginData,[property]:event.target.value})
      
   }
   const resetData=()=>{
    setLoginData({
      username:'',
        password:''
    })
   }
   
   const submitForm=()=>{
    console.log("submit...")
    // event.preventDefault()
    if(loginData.username==='' || loginData.password===''){
      console.log("data "+loginData.username+","+loginData.password)
      setError.errorType="error";
      setError.errorMessage='Please enter Username and password';
      console.log("hh"+setError.errorMessage +","+ setError.errorType)
    }else{
       setError.errorType='';
       setError.errorMessage='';
    }
   

    console.log("submitted  "+loginData.username+" , "+loginData.password +","+error.errorMessage);
    resetData();
    
    //data validate

    //call server API for the data
   }
    //Data Binding
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
    const classes = useStyles();

  const [formValues, setFormValues] = useState({
    name:{
      value:'',
      error:false,
      errorMessage:'You must enter a name'
    },
    name2:{
      value:'',
      error:false,
      errorMessage:'You must enter a password'
    }
    
  })

  const resetData2=()=>{
    setFormValues({
       name:{
      value:'',
      error:false,
      errorMessage:'You must enter a name'
    },
    name2:{
      value:'',
      error:false,
      errorMessage:'You must enter a password'
    }
    })
    console.log("Reset...")
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
            error:true
          }
        }
      }
      
    }
      console.log("Values "+newFormValues.name);
    setFormValues(newFormValues)
    
    
  }
  // console.log("form Values "+formValues.name.value,formValues.name2.value)
  // console.log("form Values "+ formValues.name2.value)
  return (
    <div>
      <Modal show={props.show} onHide={props.close}> 
       <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle} src={miniLogo}><miniLogo/></Avatar>
                    <h2>Sign In</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form for Login!!</Typography>

                </Grid>
                {/* New Input feilds start */}
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
            placeholder="Enter your name"
            label="Password"
            name="name2"
            variant="outlined"
            fullWidth
            required
            id="standard-adornment-password" 
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
            className={classes.field}
            value={formValues.name2.value}
            onChange={handleChange2}
            error={formValues.name2.error}
            helperText={formValues.name2.error && formValues.name2.errorMessage}
            
          />
          <FormControlLabel
                    control={
                    <Checkbox
                        name="checkBox"
                        color="primary"
                       
                        
                    />
                    }
                    label="Remember me"
                 />
          <Button
            type="submit"
            // variant="outlined"
            // color="secondary"
            color='primary'
            variant="contained" 
            style={btnstyle} fullWidth
            endIcon={<KeyboardArrowRight />}
          >
              SignIn
          </Button>
      </form>



                {/* New Inpput feilds End */}
                {/* Input feild */}
                {/* <TextField label='Username' placeholder='Enter username' fullWidth required autoFocus
                  onChange={(e)=>handleChange(e,'username')}
                  value={loginData.username} 
                />
                
                 <FormControl sx={{ m: 1, width: '100%' }} variant="standard" fullWidth>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password" 
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
             onChange={(e)=>handleChange(e,'password')}
             value={loginData.password}
          />
        </FormControl>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth
                onClick={submitForm}>Sign in</Button> */}
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link onClick={()=>setShowSignup(true) }  >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
            {/* </form> */}
            <Signup show={showSignup} close={()=>setShowSignup(false)}/>
            
        
      </Modal>
    </div>
  )
}

export default Login