// import * as React from 'react';
// // import { useState } from 'react';
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
// import singin from '../../images/singin.png';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signin } from '../../actions/auth';


// import {Formik,Form,Field,ErrorMessage} from 'formik';
// import * as Yup from 'yup'
// // import {Button} from 'react-bootstrap';
// // import { useDispatch } from 'react-redux';
// // import {useNavigate} from 'react-router-dom'

// const initialValues={
//   username:'',
//   password:''
// }
// const validationSchema=Yup.object({
//   username:Yup.string().required('Requried!!!'),
//   password:Yup.string().required('Requried!!!'),
// })

// const theme = createTheme();

// export default function SignInSide() {

//   // const [formData, setFormData] = useState(initialState);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

  
//   const onSubmit=async (value)=>{
//     console.log(value.password)
//     dispatch(signin(value.username,value.password,navigate))
// }

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
//             backgroundImage: `url(${singin})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'contain',
//             backgroundPosition: 'center',
//           }}
//         />

//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{boxShadow: 'none'}}>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: '#6C63FF' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" noValidate sx={{ padding: '0 50px', mt: 1 }}>
              
//               <Formik initialValues={initialValues}
//                     validationSchema={validationSchema}
//                     onSubmit={onSubmit}>
               
//                   <Form>
                    
//                         <Field as={TextField}
//                           margin="normal"
//                           required
//                           fullWidth
//                           id="username"
//                           label="User Name"
//                           name="username"
//                           autoComplete="uesrname"
//                           autoFocus
//                           // onChange={handleChange}
//                         />
//                         <div className='err'><ErrorMessage name='username' /></div> 
//                         <Field as={TextField}
//                           margin="normal"
//                           required
//                           fullWidth
//                           name="password"
//                           label="Password"
//                           type="password"
//                           id="password"
//                           autoComplete="current-password"
                         
//                           // onChange={handleChange}
//                         />

//                         <div className='err'><ErrorMessage name='password' /></div> 
//                         <Button
//                           type="submit"
//                           fullWidth
//                           variant="contained"
//                           sx={{ mt: 3, mb: 2 }}
//                           style={{backgroundColor: '#6C63FF'}}
//                         >
//                           Sign In
//                         </Button>



//                   </Form>
                
//               </Formik>

//               <Grid container justifyContent='center'>
//                 <Grid item>
//                   <Link href="SignUp" variant="body2" to="/SignUp" style={{color: '#6C63FF'}}>
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }