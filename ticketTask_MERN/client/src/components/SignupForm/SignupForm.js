// import * as React from 'react';
// import { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link, useNavigate } from 'react-router-dom';
// import { signup } from '../../actions/auth';
// import { useDispatch } from 'react-redux';
// import { validName, validUserName, validPassword,  } from '../../js/regEx';
// import singup from '../../images/sing_up.jpg';

// const initialState = {firstName: '', lastName: '', usrname: '', password: ''}
// const initialIsValidValue = {
//   isfirstName: '',
//   islastName:"",
//   isusrname: '',
//   ispassword: '',
// }
// const theme = createTheme();

// export default function SignUp() {

  

//   const [formData, setFormData] = useState(initialState);
//   const {firstName, lastName, usrname, password}=formData;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [isValid, setIsValid] = useState(initialIsValidValue);
//   const { isfirstName, islastName,isusrname ,ispassword} = isValid;


//   const handleSubmit = (event) => {
//     event.preventDefault();
//    if(isfirstName==="" && islastName==="" && isusrname==="" && ispassword==="")
//     {dispatch(signup(formData, navigate));}
//     else{alert("invalid input")}
//   };

   

//     const onValidate = (e,regEx) => {
//       e.preventDefault();
//       const RegExObj=new RegExp(regEx);
//       const isValidKey='is'+e.target.name;
//       if(e.target.value==="" || RegExObj.test(e.target.value))
//         { setIsValid({...isValid,[isValidKey]:''});
//           setFormData({...formData, [e.target.name]: e.target.value});}
//       else{
//         setIsValid({...isValid,[isValidKey]:'Invalid input..!!'});
        
//     }
//     }
  
//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: `url(${singup})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'contain',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{boxShadow: 'none'}}>
//         <Box
//           sx={{
//             my: 8,
//             mx: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ padding: '0 50px', mt: 1 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
                  
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   onChange={(e)=>{onValidate(e,validName)}}
//                   onBlur={(e) => onValidate(e,validName)}
                 
//                 />
//                 <div style={{color:"red"}}>{isfirstName}</div>
                
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
                  
//                   onChange={(e)=>{onValidate(e,validName)}}
//                   onBlur={(e) => onValidate(e,validName)}
//                 />
//                 <div style={{color:"red"}}>{islastName}</div>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="usrname"
//                   label="User Name"
//                   name="usrname"
//                   autoComplete="usrname"
                 
//                   onChange={(e)=>{onValidate(e,validUserName)}}
//                   onBlur={(e) => onValidate(e,validUserName)}
//                 />
//                 <div style={{color:"red"}}>{isusrname}</div>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
                  
//                   onChange={(e)=>{onValidate(e,validPassword)}}
//                   onBlur={(e) => onValidate(e,validPassword)}
//                 />
//                 <div style={{color:"red"}}>{ispassword}</div>
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               style={{backgroundColor: '#6C63FF'}}
//               disabled={firstName.length===0 || lastName.length===0 || usrname.length===0 || password.length===0}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="center">
//               <Grid item>
//                 <Link href='Signin' variant="body2" to="/Signin" style={{color: '#6C63FF'}}>
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }