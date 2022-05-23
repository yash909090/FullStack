import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

import './styles.css'
import { signin } from '../../actions/auth';
const initialValues={
    username:'',
    password:''
}
const validationSchema=Yup.object({
    username:Yup.string().required('Requried!!!'),
    password:Yup.string().required('Requried!!!'),
})


export default function LoginFormik() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit=async (value)=>{
        console.log(value.password)
        dispatch(signin(value.username,value.password,navigate))
    }
  return (
      <div className='D1'> 
        <div className='D2'>
        <div className='LG'>LOG-IN</div>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                
                <Form>
                    
                    <div className='mid'>
                        <div className='form-ctrl'>
                                <label htmlFor='username'>User Name</label>
                                    <Field  type="text"
                                            id="username"
                                            name="username"
                                            className="loginInput"/>

                               <div className='err'><ErrorMessage name='username' /></div> 
                        </div>

                        <div className='form-ctrl'>
                            <label htmlFor='password'>Password</label>
                            <Field  type="password"
                                    id="password"
                                    name="password"
                                    className="loginInput"/>
                            <div className='err'><ErrorMessage name='password' /></div> 
                        </div>

                        <Button type="submit" className='button-login'>
                        Log In
                        </Button>

                    </div>
                </Form>
            </Formik>

            <Link href="SignUp" variant="body2" to="/SignUp" style={{color: '#6C63FF'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
        </div>
    </div>
  )
}
