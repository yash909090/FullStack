import * as api from '../api';

export const signin = (formData, navigate) => async(dispatch) => {
    try {
        
        const { data } = await api.signIn(formData);

        dispatch({type: 'AUTH', payload: data});

        navigate('/Dashboard');
    } catch (error) {
        console.log(error)
        
    }
}

export const signup = (formData, navigate) => async(dispatch) => {
    try {
           
        const { data } = await api.signUp(formData);

        dispatch({type: 'AUTH', payload: data});

        navigate('/Signin');
    } catch (error) {
        console.log(error);
    }
}