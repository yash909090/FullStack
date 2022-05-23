import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Button} from 'react-bootstrap';
import { signup } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const initialValues={
    firstName: '',
    lastName: '',
    username:'',
    password:''
    
}
const validationSchema=Yup.object({
    firstname:Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').min(3, 'Too Short!').max(20, 'Too Long!').required('Requried!!!'),
    lastname:Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').min(3, 'Too Short!').max(20, 'Too Long!').required('Requried!!!'),
    username:Yup.string().min(5, 'Too Short!').required('Requried!!!'),
    password:Yup.string().matches('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,12}$','Password shall contain an uppercase, a lowercase and one numerical or special characters. Length must be minimum 8 characters').required('Requried!!!'),
})


export default function SingUpFormik() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit=async (value)=>{
        console.log(value.password)
        dispatch(signup(value.firstname,value.lastname,value.username,value.password,navigate))
    }
  return (
      <div className='D1'> 
        <div className='D2'>
        <div className='LG'>sing-up</div>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                
                <Form>
                    
                    <div className='mid1'>
                        <div className='form-ctrl'>
                                <label htmlFor='firstname'>First Name</label>
                                    <Field  type="text"
                                            id="firstname"
                                            name="firstname"
                                            className="loginInput"/>

                               <div className='err'><ErrorMessage name='firstname' /></div> 
                        </div>
                        <div className='form-ctrl'>
                                <label htmlFor='lastname'>Last Name</label>
                                    <Field  type="text"
                                            id="lastname"
                                            name="lastname"
                                            className="loginInput"/>

                               <div className='err'><ErrorMessage name='lastname' /></div> 
                        </div>
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
                        Sing Up
                        </Button>

                    </div>
                </Form>
            </Formik>

            <Link href='Signin' variant="body2" to="/Signin" style={{color: '#6C63FF'}}>
                Already have an account? Sign in
                </Link>
        </div>
    </div>
  )
}
