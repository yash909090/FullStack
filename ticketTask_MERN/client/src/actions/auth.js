import * as api from '../api';

export const signin = (usrname,password, navigate) => async(dispatch) => {
    try {
        
        const { data } = await api.signIn(usrname,password);

        dispatch({type: 'AUTH', payload: data});

        navigate('/Dashboard');   
    } catch (error) {
        console.log(error)
        
    }
}

export const signup = (firstname, lastname, username, password, navigate) => async(dispatch) => {
    try {
           
        const { data } = await api.signUp(firstname, lastname, username, password);

        dispatch({type: 'AUTH', payload: data});

        navigate('/Signin');
    } catch (error) {
        console.log(error);
    }
}