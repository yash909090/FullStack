import * as api from '../api';

 export const getTickets = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTickets();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
    
}

export const createTicket = (ticket) => async(dispatch) => {

    try {
        const { data } = await api.createTicket(ticket);

        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateTicket = (id, ticket) => async(dispatch) => {
    try {
        console.log(id);
        console.log(ticket);
       const { data } = await api.updateTicket(id, ticket);
        console.log(data)
       dispatch({type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteTicket = (id) => async(dispatch) => {
    try {
        console.log(id)
        const { data } = await api.deleteTicket(id);

        dispatch({type: 'DELETE', payload: data})
    } catch (error) {
        console.log(error);
    }
}