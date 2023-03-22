import Modal from 'react-bootstrap/Modal';
import miniLogo from "../assets/Logo/minilogo.png";
import { Button,Grid, Paper, Avatar, Typography, TextField, makeStyles, Checkbox, InputAdornment, IconButton, FormControlLabel } from '@material-ui/core'
import { useState } from 'react';
// import { Button } from 'reactstrap';
import { signUp } from '../services/user-service';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { KeyboardArrowRight } from '@material-ui/icons';
import Signup from '../pages/Signup';

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
     const[data,setData]=useState({
        name:'',
        password:'',
        rememberMer:false
    })

    const[error,setError]=useState({
        errors:{},
        isError:false
    })


   const resetData=()=>{
    setData({
        name:'',
        password:'',
        rememberMer:false
    })
    setError({
      isError:false
    })
   }
   
   const submitForm=(event)=>{
        event.preventDefault()
        // Validate data
        // if(error.isError){
        //     toast.error("Form Data Invalid");
        //     setError({...error,isError:false})
        //     return;
        // }
         console.log("data from submit :"+data.policyCheck);
        
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

  
  const handleChange=(event,property)=>{
        // Dynamic setting the values
        setData({...data,[property]:event.target.value})
        console.log("from handel change "+data.policyCheck)
    }


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
                <form noValidate onSubmit={submitForm} >
                <TextField 
            placeholder="Enter your name"
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            className={classes.field}
            onChange={(e)=>handleChange(e,'name')} 
            invalid={error.errors?.response?.data?.error ? true:false}
            value={data.name}
            error={error.errors?.response?.data?.name? true:false}
            helperText={error.errors?.response?.data?.name}

          />
          <TextField 
            placeholder="Enter your password"
            label="Password"
            name="password"
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
            onChange={(e)=>handleChange(e,'password')} 
            invalid={error.errors?.response?.data?.error ? true:false}
            value={data.password}
            error={error.errors?.response?.data?.password? true:false}
            helperText={error.errors?.response?.data?.password}
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
            style={btnstyle} 
            fullWidth
            endIcon={<KeyboardArrowRight />}
          >
              SignIn
          </Button>
      </form>

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